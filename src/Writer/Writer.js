import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import './Writer.css';

const Writer = (props) => {
    const { id, name, salary, book, title, img } = props.author;
    // console.log(props);
    return (
        <>
            <div className="card">
                <div>
                    <img src={img} />
                </div>
                <div className="container">
                    <h1><b>{name}</b></h1>
                    <h5>Author of {book}</h5>
                    <h5>Known as: {title}</h5>
                    <h3>Delegate Fee {salary}$</h3>
                    <button onClick={() => props.handleDelegate(props.author)} className="button button-hover"><FontAwesomeIcon className="icon-color" icon={faMoneyCheck} /> Be a Delegate</button>
                </div>
            </div>
        </>
    );
};

export default Writer;