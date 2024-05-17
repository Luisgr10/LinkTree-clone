import React from "react";
import '../../styles/linktree.css'
import profile from '../component/images/profileImg.jpg';


export const LinkTree = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={profile} className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
};
