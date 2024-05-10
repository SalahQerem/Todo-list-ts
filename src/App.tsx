import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Todos />
      <ToastContainer />
    </>
  );
}

export default App;
