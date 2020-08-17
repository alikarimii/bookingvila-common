import { ConsumeMessage, Channel } from 'amqplib'
import { logger } from '../util/logger';

export abstract class Listener<TData> {
    abstract queueName: string;
    abstract onMessage(data: TData, msg: ConsumeMessage): void;
    abstract prefetch: number
    abstract noAck: boolean = false

    constructor(protected channel: Promise<Channel>) {
    }
    async listen() {
        try {
            const chan = await this.subscriptionOption()
            if (!chan) return
            await chan.consume(this.queueName, (msg: ConsumeMessage | null) => {
                if (!msg) {
                    return;
                }

                let data: TData = JSON.parse(msg.content.toString());
                this.onMessage(data, msg)

            }, { noAck: this.noAck })
        } catch (error) {
            logger.error({ message: JSON.stringify(error), label: 'Listener:listen' })
        }

    }
    private async subscriptionOption(): Promise<Channel | null> {
        try {
            // no exchange => rond robin
            const chan = await this.channel
            await chan.assertQueue(this.queueName, {
                durable: true
            })
            console.log(
                " [*] Waiting for messages in %s. To exit press CTRL+C",
                this.queueName
            );
            if (this.prefetch) chan.prefetch(this.prefetch);
            return chan
        } catch (error) {
            logger.error({ message: JSON.stringify(error), label: "Listener:subscriptionOption" })
            return null
        }
    }


}
