// src/models/mock-event.ts
import Event from './event';

export const EVENTS: Event[] = [
    new Event(
        1,
        "Événement 80s",
        "https://www.jandjevent.com/wp-content/uploads/2023/09/Post-carre-5-janvier-Beauvoisin-scaled.jpg", // Specific image URL for this event
        ["80s"],
        new Date(),
        100,
        "Lieu de l'événement",
        "Objectif de l'événement"
    ),
    // ... other events ...
];
