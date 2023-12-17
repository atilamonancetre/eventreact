import React, { FunctionComponent } from 'react';
import Event from '../models/event';
import formatType from '../helpers/format-type';

type Props = {
    event: Event
};

const EventForm: FunctionComponent<Props> = ({event}) => {

    const types: string[] = [
        '80s', 'Vin'
    ];

    return (
        <form>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={event.picture} alt={event.name} style={{width: '250px', margin: '0 auto'}}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* event name */}
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input id="name" type="text" className="form-control"></input>
                                </div>
                                {/* event types */}
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{marginBottom: '10px'}}>
                                            <label>
                                                <input id={type} type="checkbox" className="filled-in"></input>
                                                <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                                {/* Submit button */}
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