import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./components/Post";
import Product from "./components/Product";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />}>
          <Route path={"post"} element={<Post />} />
          <Route path={"product"} element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
