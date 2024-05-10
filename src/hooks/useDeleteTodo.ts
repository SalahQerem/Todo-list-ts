import { useState } from "react";
import { CustomErrorAlert } from "../utils";

const useDeleteTodo = (
  fetchTodos: (page: number, limit: number) => Promise<void>,
  page: number,
  limit: number
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let status = false;

  const deleteTodo = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fullstack-todolist-upnv.onrender.com/todos/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      status = response.ok;
      await fetchTodos(page, limit);
    } catch (error) {
      CustomErrorAlert(error as string);
    } finally {
      setIsLoading(false);
    }
    return status;
  };

  return { deleteTodo, isDeletingTodo: isLoading };
};

export default useDeleteTodo;
