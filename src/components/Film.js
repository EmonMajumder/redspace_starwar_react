import React from 'react';

const Film = ({newitem}) => {
    return (<li>        

            <span>Title: {newitem.title},</span>
            <span> Director: {newitem.director},</span>
            <span> Producer: {newitem.producer},</span>
            <span> Release Date: {newitem.release_date}</span>
     
    </li>)
}

export default Film;