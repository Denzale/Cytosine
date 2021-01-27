import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Welcomejumbo from "./components/Welcomejumbo";

// import Mentor from "./components/Mentor";
// import Rookies from "./components/Rookies";

function Loginscreen() {
    return (
        <div className="container">
            <Navbar />
            <Welcomejumbo />
            <Login />
        </div>
    );
}

export default Loginscreen;
