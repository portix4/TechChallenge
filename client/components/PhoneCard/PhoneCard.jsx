import { Container, Card, Button, Modal } from "react-bootstrap"
import './PhoneCard.css'
import { useState } from "react"

const PhoneCard = ({ color, description, id, imageFileName, manufacturer, name, price, processor, ram, screen }) => {

    const [showModal, setShowModal] = useState(false)

    const finalActions = () => {
        setShowModal(false)
    }

    return (
        <>
            <Card style={{ width: 'auto' }} className="d-flex flex-column align-items-center mb-4">
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <img src={`./../../src/assets/${imageFileName}`} alt={name} />
                    </Card.Text>
                    <Button className="details" onClick={() => setShowModal(true)}>More details</Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className="headerDeleteModal">
                    <Modal.Title className="titleModalDeleteClass">{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bodyDeleteModal text-center">
                    <h3>Description</h3>
                    <p>{description}</p>
                    <h2>Price</h2>
                    <p>{price}$</p>
                    <Button className='deleteButtonModal' onClick={finalActions}>Cerrar</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PhoneCard