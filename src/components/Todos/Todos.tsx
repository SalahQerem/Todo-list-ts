import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
//   import useDeleteTodo from "../../hooks/useDeleteTodo.js";
import useGetTodos from "../../hooks/useGetTodos.js";
import AddTodoForm from "../AddTodoForm";
//   import DeleteConfirmationDialog from "../Dialogs/DeleteConfirmationDialog.jsx";
import Loader from "../Loader";
import Todo from "./components/Todo.jsx";
import { defaultTodo } from "../../utils/index.js";
import { Todo as TodoType } from "../../types/index.js";

const Todos = () => {
  let [todos, setTodos] = useState<Array<TodoType>>([]);
  let [numOfPages, setNumOfPages] = useState<number>(10);
  let [page, setPage] = useState<number>(1);
  let [limit, setLimit] = useState<number>(5);

  let [todoToDelete, setTodoToDelete] = useState<TodoType>(defaultTodo);
  const [openCancelDialog, setOpenCancelDialog] = useState<boolean>(false);

  const { fetchTodos, isFetchingTodos } = useGetTodos(
    setTodos,
    setNumOfPages,
    setPage
  );
  //   const { deleteTodo, isDeletingTodo } = useDeleteTodo(fetchTodos, page, limit);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    fetchTodos(page, limit);
  };

  const handleLimitChange = (event: SelectChangeEvent<number>) => {
    // const limit = props.value;
    const limit = 5;
    setLimit(limit);
    fetchTodos(page, limit);
  };

  const handleDeleteTodo = async () => {
    // const status = await deleteTodo(todoToDelete._id);
    // if (status) setOpenCancelDialog(false);
  };

  const handleCancelDeleteTodo = () => {
    setTodoToDelete(defaultTodo);
    setOpenCancelDialog(false);
  };

  const handleClose = () => {
    setOpenCancelDialog(false);
  };

  const renderTodos = todos?.map((todo) => (
    <Grid key={todo._id} item xl={2.4}>
      <Todo
        todo={todo}
        setTodos={setTodos}
        setTodoToDelete={setTodoToDelete}
        handleOpenDeleteDialog={() => setOpenCancelDialog(true)}
      />
    </Grid>
  ));

  useEffect(() => {
    fetchTodos(page, limit);
  }, []);

  if (isFetchingTodos) return <Loader />;

  return (
    <Box>
      <Box
        sx={{
          margin: "2rem auto",
          width: "76.5%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <AddTodoForm fetchTodos={fetchTodos} page={page} limit={limit} />
        <Box
          sx={{
            maxWidth: 100,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Limit</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={limit}
              label="limit"
              onChange={handleLimitChange}
              sx={{
                height: "56px",
                textAlign: "center",
                width: "100px",
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid
        container
        spacing={4}
        width={"80%"}
        sx={{ marginX: "auto", paddingBlockEnd: 15 }}
      >
        {renderTodos}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          py: 3,
          backgroundColor: "white",
        }}
      >
        <Pagination
          count={numOfPages}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
      {/* <DeleteConfirmationDialog
        openCancelDialog={openCancelDialog}
        todoToDeleteTitle={todoToDelete.title}
        isDeletingTodo={isDeletingTodo}
        handleCancelDeleteTodo={handleCancelDeleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleClose={handleClose}
      /> */}
    </Box>
  );
};

export default Todos;
