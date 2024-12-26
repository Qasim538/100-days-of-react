import React, { useState } from 'react';
import people from './data';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const nextBtn = () => {
        if (index >= people.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevBtn = () => {
        if (index <= 0) {
            setIndex(people.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        // Ensure we don't get the same person
        if (randomNumber === index) {
            randomNumber = (randomNumber + 1) % people.length;
        }
        setIndex(randomNumber);
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button onClick={prevBtn} className='prev-btn'>{"<"}</button>
                <button onClick={nextBtn} className='next-btn'>{">"}</button>
            </div>
            <button onClick={randomPerson} className='random-btn'>Surprise me</button>
        </article>
    );
};

export default Reviews;
