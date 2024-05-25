export interface IDeleteConfirmationDialog {
  openCancelDialog: boolean;
  todoToDeleteTitle: string;
  isDeletingTodo: boolean;
  handleCancelDeleteTodo: () => void;
  handleDeleteTodo: () => Promise<void>;
  handleClose: () => void;
}
