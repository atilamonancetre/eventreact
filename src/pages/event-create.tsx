// src/pages/event-create.tsx

import React, { FunctionComponent } from 'react';
import EventForm from '../components/event-form';
import Event from '../models/event';

const EventCreate: FunctionComponent = () => {
    // Créer un événement vide pour initialiser le formulaire
    const emptyEvent = new Event(0, '', '', [], new Date(), 0, '', '');

    return (
        <div className="row">
            <h2 className="header center">Créer un nouvel événement</h2>
            <EventForm event={emptyEvent} />
        </div>
    );
}

export default EventCreate;