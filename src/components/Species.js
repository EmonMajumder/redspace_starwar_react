import React from 'react';

const Species = ({newitem}) =>{
    if(newitem.name.length>1){
        return(
            <li>
                <span>Name: {newitem.name},</span>
                <span> Average Lifespan: {newitem.average_lifespan},</span>
                <span> Classification: {newitem.classification},</span>
                <span> Language: {newitem.language}</span>     
            </li>
        )
    }else{
        return (" : No Information Available!")
    }
}
    

export default Species;