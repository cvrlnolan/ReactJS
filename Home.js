import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/firealert" className="alarm-logo">
        <img src="/Images/red alarm.png" alt="" />
      </Link>
      <div className="alarm-text">
        <img src="/Images/smoke alarm text.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
