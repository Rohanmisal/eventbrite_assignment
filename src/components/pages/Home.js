import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import {Row, Col, Card} from 'react-bootstrap'

const Home = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function fetchevents(){
      const {data} = await axios.get('api/events/')
      setEvents(data);
    }
    fetchevents()
  },[])
  return (
    <Container>
      <h1>Likes</h1>

      <Row>
        {events.map((events)=>(
          <Col key={events._id} sm={12} md={6} lg={4} xl={3}>
          <Card className='my-3 p-3 rounded'>
            <img src={events.image} alt=''/>
          </Card>
            <h3>{events.eventname}</h3>
            <h4>{events.category}</h4>
            <h5>{events.price}</h5>
            <span>{events.likes}❤️</span>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
