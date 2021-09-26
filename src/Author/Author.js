import React from 'react';
import { useState, useEffect } from 'react';
import Delegate from '../Delegate/Delegate';
import Writer from '../Writer/Writer';
import './Author.css'

const Author = () => {

    const [authors, setAuthors] = useState([]);
    const [delegates, setDelegates] = useState([]);

    useEffect(() => {
        fetch('./writers.JSON')
            .then(res => res.json())
            .then(data => {
                setAuthors(data)
                // console.log(data)
            })
    }, [])

    const handleDelegate = (authorItem) => {
        const newDelegate = [...delegates, authorItem];
        setDelegates(newDelegate);
        // console.log(authorItem);
    }

    return (
        <>
            <div className="main-container">
                <div className="author-container">
                    {
                        authors.map(author => <Writer
                            key={author.id}
                            author={author}
                            handleDelegate={handleDelegate}
                        ></Writer>)
                    }
                </div>
                <div className="delegate-container">
                    <Delegate delegates={delegates}></Delegate>
                </div>
            </div>
        </>
    );
};

export default Author;