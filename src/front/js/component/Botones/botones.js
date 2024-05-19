import React from "react";
import '../Botones/botones.css'

export const Button = ({url,name,icon}) => {

    const handleClick = () => {
        console.log('HICISTE CLICK');
    }
    return (
        <button className="button">
           <span>{icon}</span>  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a> 
           <button 
           className="share-btn"
           onClick={handleClick}
           ><i class="fa-solid fa-ellipsis fa-sm"></i></button>
</button>
    )
}