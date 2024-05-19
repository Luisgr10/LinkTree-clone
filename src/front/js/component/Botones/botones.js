import React, { useState } from "react";
import '../Botones/botones.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Buttons = ({ url, name, icon }) => {
    const [smShow, setSmShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault(); // Evita que se ejecute el enlace principal
        event.stopPropagation(); // Evita que el evento se propague al enlace principal
        setSmShow(true);
        console.log('HICISTE CLICK');
    }

    const handleShare = (platform) => {
        let shareUrl;
        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
                break;
            default:
                navigator.clipboard.writeText(url)
                    .then(() => alert('Enlace copiado al portapapeles'))
                    .catch(err => console.error('Error al copiar al portapapeles:', err))
                return;
        }
        window.open(shareUrl, '_blank');
    }

    return (
        <div className="container-fluid d-flex justify-content-center ">
            <a href={url} target="_blank" rel="noopener noreferrer" className="button">
                <span>{icon}</span>  <span>{name}</span>
                <span
                    className="share-btn"
                    onClick={handleShow}
                ><i class="fa-solid fa-ellipsis fa-sm"></i></span>
            </a>

            <Modal size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered>
                <Modal.Header closeButton>
                    <h5 className="m-title">Compartir enlaces</h5>
                </Modal.Header>
                <Modal.Body className="m-body">
                    <button className="btn-modal my-1" onClick={() => handleShare('whatsapp')}>
                        <i class="fa-brands fa-whatsapp fa-lg"></i> Compartir en WhatsApp
                    </button>
                    <button className="btn-modal my-1" onClick={() => handleShare('linkedin')}>
                        <i class="fa-brands fa-linkedin-in fa-lg"></i> Compartir en LinkedIn
                    </button>
                    <button className="btn-modal my-1" onClick={() => handleShare('clipboard')}>
                        <i class="fa-regular fa-clipboard fa-lg"></i> Copiar al portapapeles
                    </button>
                </Modal.Body>
            </Modal>
        </div>

    )
}