import React, {useState} from "react";
import '../Botones/botones.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Buttons = ({ url, name, icon }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault(); // Evita que se ejecute el enlace principal
        event.stopPropagation(); // Evita que el evento se propague al enlace principal
        setShow(true);
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Compartir enlaces</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" onClick={() => handleShare('whatsapp')}>
                        Compartir en WhatsApp
                    </Button>
                    <Button variant="primary" onClick={() => handleShare('linkedin')}>
                        Compartir en LinkedIn
                    </Button>
                    <Button variant="primary" onClick={() => handleShare('clipboard')}>
                        Copiar al portapapeles
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}