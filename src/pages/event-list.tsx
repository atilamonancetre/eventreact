// src/pages/event-list.tsx

import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ajout pour le lien
import Event from '../models/event';
import { EVENTS } from '../models/mock-event';
import EventCard from '../components/event-card';

const EventList: FunctionComponent = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        setEvents(EVENTS);
    }, []);

    return (
        <div>
            <h1 className="center">Evénements</h1>
            <div className="container">
                <div className="row">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                {/* Bouton pour ajouter un nouvel événement */}
                <Link to="/events/new" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
            </div>
        </div>
    );
}

export default EventList;
