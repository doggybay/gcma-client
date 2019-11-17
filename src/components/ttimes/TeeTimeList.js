import React from 'react'
import { useSelector } from 'react-redux'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { Container } from "semantic-ui-react";
import TeeTimesList from '../teeTimes/TeeTimesList'

const TeeTimeList = () => {
  const teeTimes = useSelector(state => state.teetimes.all)


  return (
    <Container>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Container>
  )
}

export default TeeTimeList