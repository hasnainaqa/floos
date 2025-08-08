import React from "react";
// import { Link } from "react-router-dom";
import EmployeesList from "../components/Employee/EmployeesList";
import DasbboardHero from "../components/Dashboard/DasbboardHero";

export default function Dashboard() {
  return (
    <>
      <DasbboardHero />
      <EmployeesList limit={5} />
    </>
  );
}
