import Header from "./components/header/Header";
import { Route, BrowserRouter, Routes ,Navigate } from "react-router-dom";
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
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import PostsTable from "./pages/admin/PostsTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import CommentTable from "./pages/admin/CommentTable";
import ForgotPassword from "./pages/Forms/ForgotPassword";
import ResetPassword from "./pages/Forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";
import { useSelector  } from "react-redux";
export default function App() {
  const { user } = useSelector((state) => state.auth);
 
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer theme="colored " position="top-center"/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user?  <Register /> :<Navigate to="/" /> } /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/reset-password" element={<ResetPassword />} /> 
          <Route path="/profile/:id" element={<Profile />} /> 

          <Route path="posts">
              <Route index element={<Posts />} />
              <Route path="create-post" element={user? <CreatePost /> : <Navigate to="/" />} />
              <Route path="details/:id" element={<PostDetails />} />
              <Route path="categories/:category" element={<Category />} />
          </Route>
          <Route path="admin-dashbourd">
             <Route index element={user?.isAdmin? <AdminDashbourd /> : <Navigate to="/" />} />
             <Route path="users-table" element={user?.isAdmin?  <UsersTable />: <Navigate to="/" />} />
             <Route path="posts-table" element={user?.isAdmin? <PostsTable />: <Navigate to="/" />} />
             <Route path="categories-table" element={user?.isAdmin? <CategoriesTable />: <Navigate to="/" />} />
             <Route path="comments-table" element={user?.isAdmin? <CommentTable />: <Navigate to="/" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
