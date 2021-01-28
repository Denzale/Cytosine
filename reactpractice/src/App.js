import React from "react";
import from "./components/";
import from "./components/";
import from "./components/";
import from "./components/";
import from "./components/";

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route exact path="/" component={ } />
                <Route exact path="/" component={ } />
                <Route exact path="/" component={ } />
                <Route path="/" component={ } />
            </div>
        </Router>
    );
}

export default App;