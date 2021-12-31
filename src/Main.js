import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Main() {
  return (
    <div>
      <h1>main page</h1>
      <Link to="child1">child 1</Link> |||| <Link to="child2">child 2</Link>{" "}
      |||| <Link to="/">log out</Link>
      <Outlet />
      <Routes>
        <Route path="child1" element={<Child1 />} />
        <Route path="child2" element={<Child2 />} />
      </Routes>
    </div>
  );
}
