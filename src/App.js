import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";

function App() {
    return (
        <>
            <BackToTop />
            <div className="page-wrap">
                <BgBubbles />
                <Router basename="/hanzalah.resume"> {/* Set the basename for GitHub Pages */}
                    <div className="container">
                        <Menu />
                        <Profile />
                        <AnimatedRoutes />
                    </div>
                </Router>
            </div>
        </>
    );
}

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname} // Use location.pathname for unique keys in transitions
        >
            <Switch location={location}>
                <Route exact path="/about" component={About} />
                <Route exact path="/works" component={Works} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/">
                    <Redirect to="/about" />
                </Route>
                <Route exact path="*">
                    <Redirect to="/about" />
                </Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default App;
