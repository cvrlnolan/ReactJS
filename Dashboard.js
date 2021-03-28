import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar";
import Home from "./Home";
import FireAlert from "./FireAlert";
import ControlPanel from "./ControlPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Router>
        <Navbar handleLogOut={handleLogOut}></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/firealert" component={FireAlert}></Route>
          <Route path="/controlpanel" component={ControlPanel}></Route>
        </Switch>
      </Router>
    </>
  );
}
