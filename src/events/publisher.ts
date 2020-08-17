import { Channel } from "amqplib";
import { logger } from "../util/logger";

export abstract class Publisher<TData> {
    abstract queueName: string
    constructor(protected channel: Promise<Channel>) { }

    async publish(data: TData): Promise<void> {
        try {
            // no exchange => rond robin
            const chan = await this.channel
            await chan.assertQueue(this.queueName, {
                durable: true
            })
            chan.sendToQueue(this.queueName, Buffer.from(JSON.stringify(data)), {
                persistent: true,
            })
        } catch (error) {
            logger.error({ message: JSON.stringify(error), label: "Publisher:publish" })
        }
    }
    // must install rabbitmq_delayed_message_exchange-3.8.0 plugin in rabbitmq
    async publishWithDelay(data: TData, delay: number): Promise<void> {
        try {
            const chan = await this.channel
            await chan.assertExchange("my-exchange", "x-delayed-message", {
                durable: true,
                arguments: { "x-delayed-type": "direct" },
            });
            await chan.bindQueue(this.queueName, "my-exchange", this.queueName);
            // Publish message with a delay of ? ms
            const headers = { "x-delay": delay };
            chan.publish(
                "my-exchange",
                this.queueName,
                Buffer.from(JSON.stringify(data)),
                {
                    headers,
                    persistent: true,
                }
            );

        } catch (error) {
            logger.error({ message: JSON.stringify(error), label: "Publisher:publishWithDelay" })
        }
    }
}

