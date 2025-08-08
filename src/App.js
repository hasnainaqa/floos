import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Payroll from "./pages/Payroll";
import Transactions from "./pages/Transactions";
import AddToTransaction from "./pages/AddToTransaction";
import CreateTransaction from "./pages/CreateTransaction";
import PayrollUsers from "./components/Payroll/PayrollUsers";

function App() {
  return (
    <Router>
      <Navbar />
      <div
        className="p-16 pt-24 bg-[#F1F4F1] min-h-screen font-inter border-b"
        style={{ borderColor: "#EAECF0" }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route
            path="/payroll/addtransaction"
            element={<AddToTransaction />}
          />
          <Route
            path="/payroll/createtransaction"
            element={<CreateTransaction />}
          />
          <Route
            path="/payroll/users"
            element={<PayrollUsers />}
          />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
