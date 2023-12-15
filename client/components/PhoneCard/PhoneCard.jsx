import { Container, Card, Button, Modal } from 'react-bootstrap'
import './PhoneCard.css'
import { useState, useEffect } from 'react'
import phoneServices from '../../services/phone.services'

const PhoneCard = ({ id }) => {
  const [showModal, setShowModal] = useState(false)

  const [phone, setPhone] = useState({})

  useEffect(() => {
    loadPhones()
  }, [])

  const loadPhones = () => {
    phoneServices

      .getPhonebyId(id)
      .then(({ data }) => {
        setPhone(data)
      })
      .catch(error => console.log(error))
  }

  const finalActions = () => {
    setShowModal(false)
  }

  return (
    <>
      <Card
        style={{ width: 'auto' }}
        className='d-flex flex-column align-items-center mb-4'
      >
        <Card.Body className='text-center'>
          <Card.Title>{phone.name}</Card.Title>
          <Card.Text>
            <img src={`./../../src/assets/${phone.imageFileName}`} alt={phone.name} />
          </Card.Text>
          <Button className='details' onClick={() => setShowModal(true)}>
            More details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className='headerDeleteModal'>
          <Modal.Title className='titleModalDeleteClass'>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bodyDeleteModal text-center'>
          <h3>Description</h3>
          <p>{phone.description}</p>
          <h2>Price</h2>
          <p>{phone.price}$</p>
          <Button className='deleteButtonModal' onClick={finalActions}>
            Cerrar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PhoneCard
