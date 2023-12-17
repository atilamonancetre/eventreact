import React, { FunctionComponent, useState, useEffect } from 'react';
import Event from '../models/event';
import {EVENTS} from '../models/mock-event';
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
            </div>
        </div>
    );
}

export default EventList;