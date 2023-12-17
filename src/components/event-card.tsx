import React, { FunctionComponent, useState } from 'react';
import Event from '../models/event';
import './pokemon-card.css';
import formatType from '../helpers/format-type';
import {useHistory} from "react-router-dom";

type Props = {
    event: Event
    borderColor?: string
};

const EventCard: FunctionComponent<Props> = ({event, borderColor = '#009688'}) => {

    const[color, setColor]=useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5'); //on remet bordure en gris.
    }

    const goToEvent = (id: number) => {
        history.push(`/events/${id}`);
    }

    const formatDate = (date: Date): string => {
        return`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    return (
        <div className="col s6 m4" onClick={()=> goToEvent(event.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{borderColor: color}}>
                <div className="card-image">
                    <img src={event.picture} alt={event.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{event.name}</p>
                        <p><small>{formatDate(event.date)}</small></p>
                        {event.types.map(type => (
                            <span key={type} className={formatType(type)}>{type}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;