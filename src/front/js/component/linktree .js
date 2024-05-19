import React from "react";
import '../../styles/linktree.css'
import { Button } from "./Botones/botones";
import profile from '../component/images/profileImg.jpg';


export const LinkTree = () => {
    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <div className="col d-flex justify-content-center align-items-center mt-5">
                    <img src={profile} className="img-Item" alt="..." />
                </div>
                <div className="titles mt-5">
                    <h1>Luis Guilarte Rodriguez</h1>
                    <p>"Sin caos no hay evolución y sin evolución no hay cambios"</p>
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-3">
                    <Button
                    icon= {<i class="fa-brands fa-linkedin-in fa-2xl"></i>}
                    name='LinkedIn'
                    url='https://www.linkedin.com/in/luisgr10/'
                     />
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-3">
                    <Button
                    icon= {<i className="fa-brands fa-github fa-2xl"></i>}
                    name='Github'
                    url='https://github.com/Luisgr10' />
                </div>
            </div>
        </div>
    );
};
