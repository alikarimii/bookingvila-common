import { UniqueEntityID } from "./UniqueEntityID";

export interface UseCase<IRequest, IResponse> {
  execute(operatorId: UniqueEntityID, request?: IRequest): Promise<IResponse> | IResponse;
}
