export interface IAddTodoForm {
  fetchTodos: (page: number, limit: number) => Promise<void>;
  page: number;
  limit: number;
}
