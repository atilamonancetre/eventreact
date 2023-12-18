// src/models/event.ts
export default class Event {
    id: number;
    name: string;
    pictureUrl: string; // Changed from 'picture' to 'pictureUrl'
    types: Array<string>;
    date: Date;
    nombre_de_personnes: number;
    lieu: string;
    objectif_de_l_evenement: string;

    constructor(
        id: number,
        name: string = 'name',
        pictureUrl: string = 'https://example.com/default.jpg', // Default image URL
        types: Array<string> = ['Festif'],
        date: Date = new Date(),
        nombre_de_personnes: number = 0,
        lieu: string = 'Undefined',
        objectif_de_l_evenement: string = 'Undefined'
    ) {
        this.id = id;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.types = types;
        this.date = date;
        this.nombre_de_personnes = nombre_de_personnes;
        this.lieu = lieu;
        this.objectif_de_l_evenement = objectif_de_l_evenement;
    }
}

