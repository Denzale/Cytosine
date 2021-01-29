import Navbar from "./components/Navbar";
import Mentor from "./components/Mentor";
import Mentorjumbo from "./components/Mentorjumbo";

function Mentorform() {
    return (
        <div className="container">
            <Navbar />
            <Mentorjumbo />
            <Mentor />
        </div>
    );
}

export default Mentorform;