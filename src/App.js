import Header from "./components/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Posts from "./pages/post-page/Posts";
import AdminDashbourd from "./pages/admin/AdminDashbourd";
import CreatePost from "./pages/create-post/CreatePost";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create-post" element={<CreatePost />} />
          <Route path="/admin-dashbourd" element={<AdminDashbourd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
