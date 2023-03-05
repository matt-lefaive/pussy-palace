import React, { useState } from 'react';
import '../styles/credit-image-bio.css';

const CreditImageBio = ({ people }) => {
    const [currentPerson, setCurrentPerson] = useState(0);
    
    return (
        <div className='credit-image-bio'>
            <div className='credit-photo-list'>
                {people.map((person, i) => {
                    return (
                        <img 
                            className='credit-photo'
                            src={`${person.photo}_${currentPerson === i ? 'Colour' : 'BW'}.png`}
                            onClick={() => setCurrentPerson(i)}
                            alt={person.name}    
                        />
                    )
                })}
            </div>
            {people.map((person, i) => {
                return (
                    <div className={`person-info${currentPerson === i ? '' : ' hidden'}`}>
                        <div className='person-name-role'>
                            <div className='person-name'>{person.name}</div>
                            <div className='person-role'>{person.role}</div>
                        </div>
                        {person.bio}
                    </div>
                )
            })}
        </div>
    )
}

export default CreditImageBio;