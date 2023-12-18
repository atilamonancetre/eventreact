// src/App.tsx

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventList from "./pages/event-list";
import EventDetail from "./pages/event-detail";
import EventEdit from "./pages/event-edit";
import EventCreate from "./pages/event-create"; // Importer la nouvelle page
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                {/* ... contenu existant ... */}
                <Switch>
                    <Route exact path="/" component={EventList} />
                    <Route exact path="/events" component={EventList} />
                    <Route exact path="/events/new" component={EventCreate} /> {/* Nouvelle route */}
                    <Route exact path="/events/:id" component={EventDetail} />
                    <Route exact path="/events/edit/:id" component={EventEdit} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

