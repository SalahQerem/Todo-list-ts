import { Dispatch, SetStateAction, useState } from "react";
import { CustomErrorAlert } from "../utils";
import { Todo } from "../types";

const useGetTodos = (
  setTodos: Dispatch<SetStateAction<Todo[]>>,
  setNumOfPages: Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchTodos = async (page: number, limit: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://fullstack-todolist-upnv.onrender.com/todos?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setTodos(data.todos);
      setNumOfPages(data.numOfPages);
      if (page > data.numOfPages) setPage(data.numOfPages);
    } catch (error) {
      CustomErrorAlert(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchTodos, isFetchingTodos: isLoading };
};

export default useGetTodos;
