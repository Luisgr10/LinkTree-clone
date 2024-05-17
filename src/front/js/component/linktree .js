import React from "react";
import '../../styles/linktree.css'
import profile from '../component/images/profileImg.jpg';


export const LinkTree = () => {
    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <div className="col d-flex justify-content-center align-items-center mt-5">
                    <img src={profile} className="img-Item" alt="..." />
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-5">
                    <h1> aqui van tus links</h1>
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-5">
                    <h1> aqui van tus links</h1>
                </div>
            </div>
        </div>
    );
};
