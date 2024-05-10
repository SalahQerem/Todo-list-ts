import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types";

export interface ITodo {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setTodoToDelete: (todo: Todo) => void;
  handleOpenDeleteDialog: () => void;
}
