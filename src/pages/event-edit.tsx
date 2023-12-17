import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import EventForm from '../components/event-form';
import Event from '../models/event';
import {EVENTS} from '../models/mock-event';

type Params = { id: string };

const EventEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const [event, setEvent] = useState<Event|null>(null);

    useEffect(() => {
        EVENTS.forEach(event => {
            if (match.params.id === event.id.toString()) {
                setEvent(event);
            }
        })
    }, [match.params.id]);

    return (
        <div>
            { event ? (
                <div className="row">
                    <h2 className="header center">Éditer { event.name }</h2>
                    <EventForm event={event}></EventForm>
                </div>
            ) : (
                <h4 className="center">Aucun événement à afficher !</h4>
            )}
        </div>
    );
}

export default EventEdit;