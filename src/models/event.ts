export default class Event {
    // 1. Typage des propiétés d'un event.
    id: number;
    name: string;
    picture: string;
    types: Array<string>;
    date: Date;

    // 2. Définition des valeurs par défaut des propriétés d'un event.
    constructor(
        id: number,
        name: string = 'name',
        picture: string = 'https://...',
        types: Array<string> = ['Normal'],
        date: Date = new Date()
    ) {
        // 3. Initialisation des propiétés d'un event.
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.date = date;
    }
}