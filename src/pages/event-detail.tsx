import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Event from '../models/event';
import {EVENTS} from '../models/mock-event';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Params = { id: string };

const EventDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

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
                    <div className="col s12 m8 offset-m2">
                        <h2 className="header center">{ event.name }</h2>
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={event.pictureUrl} alt={event.name} style={{width: '250px', margin: '0 auto'}}/>
                                <Link to={`/events/edit/${event.id}`} className={"btn btn-floating halfway-fab waves-effect waves-light"}>
                                    <i className="material-icons">edit</i>
                                </Link>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered striped">
                                        <tbody>
                                        <tr>
                                            <td>Nom</td>
                                            <td><strong>{ event.name }</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Nombre de personnes</td>
                                            <td>{event.nombre_de_personnes}</td>
                                        </tr>
                                        <tr>
                                            <td>Lieu</td>
                                            <td>{event.lieu}</td>
                                        </tr>
                                        <tr>
                                            <td>Objectif de l'événement</td>
                                            <td>{event.objectif_de_l_evenement}</td>
                                        </tr>
                                        <tr>
                                            <td>Types</td>
                                            <td>
                                                {event.types.map(type => (
                                                    <span key={type} className={formatType(type)}>{type}</span>
                                                ))}</td>
                                        </tr>
                                        <tr>
                                            <td>Date de création</td>
                                            <td>{formatDate(event.date)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-action">
                                    <Link to="/">Retour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className="center">Aucun événement à afficher !</h4>
            )}
        </div>
    );
}

export default EventDetail;