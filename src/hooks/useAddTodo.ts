import { Dispatch, SetStateAction, useState } from "react";
import { CustomSuccessAlert, CustomErrorAlert, defaultTodo } from "../utils";
import { Todo } from "../types";

const useAddTodos = (
  fetchTodos: (page: number, limit: number) => Promise<void>,
  setNewTodo: Dispatch<SetStateAction<Todo>>,
  page: number,
  limit: number
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addTodo = async (todo: Todo) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://fullstack-todolist-upnv.onrender.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchTodos(page, limit);
      setNewTodo(defaultTodo);
      CustomSuccessAlert("New Todo added successfully");
    } catch (error) {
      CustomErrorAlert(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { addTodo, isAddingTodo: isLoading };
};

export default useAddTodos;
