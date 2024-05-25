import { toast } from "react-toastify";
import { Todo } from "../types";

export const defaultTodo: Todo = {
  _id: "",
  title: "",
  description: "",
  isCompleted: false,
};

export const CustomSuccessAlert = (message: string) => {
  toast.success(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const CustomWarningAlert = (message: string) => {
  toast.warning(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const CustomErrorAlert = (message: string) => {
  toast.error(message, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
