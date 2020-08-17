import { ConsumeMessage, Channel } from 'amqplib';
export declare abstract class Listener<TData> {
    protected channel: Promise<Channel>;
    abstract queueName: string;
    abstract onMessage(data: TData, msg: ConsumeMessage): void;
    abstract prefetch: number;
    abstract noAck: boolean;
    constructor(channel: Promise<Channel>);
    listen(): Promise<void>;
    private subscriptionOption;
}
