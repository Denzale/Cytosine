import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Welcomejumbo from "./components/Welcomejumbo";

// import Mentor from "./components/Mentor";
// import Rookies from "./components/Rookies";

function Signupscreen() {
    return (
        <div className="container">
            <Navbar />
            <Welcomejumbo />
            <Signup />
        </div>
    );
}

export default Signupscreen;
