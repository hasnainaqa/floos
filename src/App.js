import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import CheckoutNavbar from "./components/ui/Navbar/CheckoutNavbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Transactions from "./pages/Transactions";
import AddToTransaction from "./pages/AddToTransaction";
import CreateTransaction from "./pages/CreateTransaction";
import PayrollUsers from "./components/Payroll/PayrollUsers";
import MakePayment from "./pages/MakePayment";
import TransactionFailed from "./pages/Checkout";
import Login from "./pages/Login";
import PayrollAccountEntry from "./pages/PayrollAccountEntry"; 
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./pages/404";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div
        className="p-16 pt-24 bg-[#F1F4F1] min-h-screen font-inter border-b"
        style={{ borderColor: "#EAECF0" }}
      >
        <Outlet />
      </div>
    </>
  );
}

function CheckoutNavbarLayout() {
  return (
    <>
      <CheckoutNavbar />
      <div className="p-16 pt-24 bg-[#F1F4F1] min-h-screen font-inter border-b">
        <Outlet />
      </div>
    </>
  );
}
function NoNav() {
  return (
    <>
      <div className="p-16 min-h-screen font-inter">
        <Outlet />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/payroll-entry" element={<PayrollAccountEntry />} />
      <Route path="/*" element={<ErrorPage />} />

        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/payroll/addtransaction" element={<AddToTransaction />} />
          <Route path="/payroll/createtransaction" element={<CreateTransaction />} />
          <Route path="/payroll/users" element={<PayrollUsers />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>

        <Route element={<CheckoutNavbarLayout />}>
          <Route path="/checkout" element={<TransactionFailed />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<NoNav />}>
        <Route path="/makepayment" element={<MakePayment />} />
        </Route>
      </Routes>
    </Router>
  );
}
