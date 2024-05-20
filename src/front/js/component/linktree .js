import React from "react";
import '../../styles/linktree.css'
import { Buttons } from "./Botones/botones";
import profile from '../component/images/profileImg.jpg';
import { Link } from "react-router-dom";


export const LinkTree = () => {
    return (
        <div className="container">
            <div className="row d-flex flex-column">
                <div className="col d-flex justify-content-center align-items-center mt-5">
                    <img src={profile} className="img-Item" alt="..." />
                </div>
                <div className="titles my-3">
                    <h1>Luis Guilarte Rodriguez</h1>
                    <h6>Full Stack Developer</h6>
                </div>
                <div className="titles">
                <p>"Sin caos no hay evolución y sin evolución no hay cambios"</p>
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-3">
                    <Buttons
                    icon= {<i class="fa-brands fa-linkedin-in fa-2xl"></i>}
                    name='LinkedIn'
                    url='https://www.linkedin.com/in/luisgr10/'
                     />
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-3">
                    <Buttons
                    icon= {<i className="fa-brands fa-github fa-2xl"></i>}
                    name='Github'
                    url='https://github.com/Luisgr10' />
                </div>
                <div className="col col d-flex justify-content-center align-items-center mt-3">
                    <Buttons
                    icon= {<i class="fa-solid fa-laptop-code fa-2xl"></i>}
                    name='Portfolio'
                    url='/portfolio'/>
                </div>
            </div>
        </div>
    );
};