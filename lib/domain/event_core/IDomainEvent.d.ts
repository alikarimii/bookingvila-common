import { UniqueEntityID } from "../UniqueEntityID";
export interface IDomainEvent<T> {
    readonly props: T;
    readonly dateTimeOccurred: Date;
    readonly id: UniqueEntityID;
}
