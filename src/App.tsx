import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventList from "../src/pages/event-list";
import EventDetail from "../src/pages/event-detail";
import PageNotFound from "../src/pages/page-not-found";
import EventEdit from "../src/pages/event-edit";

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                {/*La barre de navigation commun à toutes le pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Evénements</Link>
                    </div>
                </nav>
                {/* Le systeme de gestion des routes de notre app */}
                <Switch>
                    <Route exact path="/" component={EventList} />
                    <Route exact path="/events" component={EventList} />
                    <Route exact path="/events/:id" component={EventDetail} />
                    <Route exact path="/events/edit/:id" component={EventEdit} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;