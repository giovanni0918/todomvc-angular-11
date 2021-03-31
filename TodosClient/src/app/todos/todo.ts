export interface Todo {
  readonly uuid: string;
  task: string;
  complete: boolean;
  createDate: Date | null;
  updateDate?: Date | null;
  readonly id?: number;
}
