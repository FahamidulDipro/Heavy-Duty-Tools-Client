import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Dashboard/AddProduct";
import AllUsers from "./components/Dashboard/AllUsers";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageAllOrders from "./components/Dashboard/ManageAllOrders";
import ManageProducts from "./components/Dashboard/ManageProducts";
import MyOrders from "./components/Dashboard/MyOrders";
import MyProfile from "./components/Dashboard/MyProfile";
import Review from "./components/Dashboard/Review";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Purchase from "./components/Pages/Purchase";
import Navigation from "./components/Shared/Navigation";
import RequireAuth from "./components/Utilities/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./components/Utilities/RequireAdmin";
import Payment from "./components/Dashboard/Payment";
import Portfolio from "./components/Pages/Portfolio";
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/dashboard/payment/:orderId"
          element={<Payment></Payment>}
        ></Route>
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          {/* Nested Routes */}
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
