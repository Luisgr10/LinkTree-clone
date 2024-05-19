import React from "react";
import '../Botones/botones.css'

export const Button = ({url,name,icon}) => {

    const handleClick = (event) => {
        event.preventDefault(); // Evita que se ejecute el enlace principal
        event.stopPropagation(); // Evita que el evento se propague al enlace principal
        console.log('HICISTE CLICK');
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="button">
           <span>{icon}</span>  <span>{name}</span> 
           <span
           className="share-btn"
           onClick={handleClick}
           ><i class="fa-solid fa-ellipsis fa-sm"></i></span>
</a>
    )
}