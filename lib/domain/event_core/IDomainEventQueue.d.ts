import { IDomainEvent } from "./IDomainEvent";
export interface IDomainEventQueue {
    register<T>(callback: (event: T) => Promise<void>, eventClassName: string): void;
    clearHandlers(): void;
    dispatch<T>(event: IDomainEvent<T>): void;
}
