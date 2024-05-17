import React from "react";
import '../../styles/linktree.css'
import profile from '../component/images/profileImg.jpg';


export const LinkTree = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center mt-5">
                    <img src={profile} className="img-Item" alt="..." />
                </div>
            </div>
        </div>
    );
};
