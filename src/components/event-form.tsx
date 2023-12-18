// src/components/event-form.tsx
import React, { FunctionComponent } from 'react';
import Event from '../models/event';
import formatType from '../helpers/format-type';

type Props = {
    event: Event;
};

const EventForm: FunctionComponent<Props> = ({ event }) => {
    const types: string[] = [
        '80s', 'Vin', 'Festif', 'Lucratif', 'Non Lucratif', 'Inauguration',
        'Anniversaire', 'Mariage', 'Action Caritative', 'Fête Commerciale',
        'Remercier', 'Lancement de Produit'
    ];

    return (
        <form>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={event.pictureUrl} alt={event.name} style={{width: '250px', margin: '0 auto'}}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* event name */}
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input id="name" type="text" className="form-control" defaultValue={event.name}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre_de_personnes">Nombre de personnes</label>
                                    <input id="nombre_de_personnes" type="number" className="form-control" defaultValue={event.nombre_de_personnes} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lieu">Lieu</label>
                                    <input id="lieu" type="text" className="form-control" defaultValue={event.lieu} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="objectif_de_l_evenement">Objectif de l'événement</label>
                                    <textarea id="objectif_de_l_evenement" className="form-control" defaultValue={event.objectif_de_l_evenement}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pictureUrl">Image URL</label>
                                    <input id="pictureUrl" type="text" className="form-control" defaultValue={event.pictureUrl} />
                                </div>
                                {/* event types */}
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{marginBottom: '10px'}}>
                                            <label>
                                                <input id={type} type="checkbox" className="filled-in" />
                                                <span>
                                                    <p className={formatType(type)}>{type}</p>
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EventForm;
