import { Channel } from "amqplib";
export declare abstract class Publisher<TData> {
    protected channel: Channel;
    abstract queueName: string;
    constructor(channel: Channel);
    publish(data: TData): Promise<void>;
    publishWithDelay(data: TData, delay: number): Promise<void>;
}
