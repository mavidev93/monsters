import React from 'react';
import '../card/card.style.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&siza=180*180`} />
        <h2 >{props.monster.name}</h2>
        <p >{props.monster.email}</p>
    </div>
)