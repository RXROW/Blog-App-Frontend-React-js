import Header from "./components/header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import Posts from "./pages/post-page/Posts-page";
import AdminDashbourd from "./pages/admin/AdminDashbourd";
import CreatePost from "./pages/create-post/CreatePost";
import Footer from "./components/footer/Footer";
import PostDetails from "./pages/post-detalis/PostDetails";
import {  ToastContainer  } from "react-toastify"; 
import Category from "./pages/category/Category";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer theme="colored " position="top-center"/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="posts">
              <Route index element={<Posts />} />
              <Route path="create-post" element={<CreatePost />} />
              <Route path="details/:id" element={<PostDetails />} />
              <Route path="categories/:category" element={<Category />} />
          </Route>
          <Route path="/admin-dashbourd" element={<AdminDashbourd />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
