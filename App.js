import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import FireAlert from "./FireAlert";
import ControlPanel from "./ControlPanel";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" exact component={Home} />
          <Route path="/firealert" component={FireAlert} />
          <Route path="/controlpanel" component={ControlPanel} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
