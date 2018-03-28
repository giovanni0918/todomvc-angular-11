export interface Todo {
  readonly uuid: string;
  task: string;
  complete: boolean;
  createDate: Date;
  updateDate?: Date;
  readonly id?: number;
}
