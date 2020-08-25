import { ConsumeMessage, Channel } from 'amqplib'
import { logger } from '../util/logger';
import { injectable } from 'inversify'

@injectable()
export abstract class Listener<TData> {
    abstract queueName: string;
    abstract onMessage(data: TData, msg: ConsumeMessage): void;
    abstract prefetch: number
    abstract noAck: boolean = false

    constructor(protected channel: Channel) {
    }
    listen() {
        this.subscriptionOption()
        this.channel.consume(this.queueName, (msg: ConsumeMessage | null) => {
            if (!msg) {
                return;
            }
            try {
                let data: TData = JSON.parse(msg.content.toString());
                this.onMessage(data, msg)
            } catch (error) {
                logger.error({ message: JSON.stringify(error), label: "Listener:listen" })
            }
        }, { noAck: !!this.noAck })
    }
    private subscriptionOption() {
        try {
            // no exchange => rond robin
            this.channel
                .assertQueue(this.queueName, {
                    durable: true
                })
            console.log(
                " [*] Waiting for messages in %s. To exit press CTRL+C",
                this.queueName
            );
            if (this.prefetch) this.channel.prefetch(this.prefetch);
        } catch (error) {
            logger.error({ message: JSON.stringify(error), label: "Listener:subscriptionOption" })
            return
        }
    }


}
