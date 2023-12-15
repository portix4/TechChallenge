import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import phoneServices from '../services/phone.services'
import { Container, Row, Col } from 'react-bootstrap'
import PhoneCard from '../components/PhoneCard/PhoneCard'
import { Blocks } from 'react-loader-spinner'

function App() {
  const [phone, setPhone] = useState()

  useEffect(() => {
    loadPhones()
  }, [])

  const loadPhones = () => {
    phoneServices

      .getAllPhones()
      .then(({ data }) => {
        setPhone(data)
      })
      .catch(error => console.log(error))
  }

  return phone ? (
    <Container>
      <h1>The Phone Cave (WD)</h1>
      <Row>
        {phone?.map(e => {
          return (
            <Col md={4} key={e._id}>
              <PhoneCard id={e.id} />
            </Col>
          )
        })}
      </Row>
    </Container>
  ) : (
    <Blocks
      visible={true}
      height='80'
      width='80'
      ariaLabel='blocks-loading'
      wrapperStyle={{}}
      wrapperClass='blocks-wrapper'
    />
  )
}

export default App
