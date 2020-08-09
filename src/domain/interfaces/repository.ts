import { ModelUpdateOptions } from "mongoose";

export type ProjectionType<TProps> = {
  [key in keyof TProps]: 0 | 1;
};

export interface Repository<TProps, TDoc> {
  save(doc: Partial<TProps>): Promise<TDoc>;
  findById(
    id: string,
    projection?: Partial<ProjectionType<TProps>>
  ): Promise<TDoc>;
  updateOne(query: Partial<TProps>, update: Partial<TProps>, opt?: Partial<ModelUpdateOptions>): Promise<{ n: 1 | 0, nModified: 1 | 0, ok: 1 | 0 }>
  findOne(query: Partial<TProps>, projection?: ProjectionType<TProps>): Promise<TDoc>
}
