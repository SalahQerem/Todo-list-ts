import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

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
