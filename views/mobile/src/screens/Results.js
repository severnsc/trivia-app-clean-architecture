import React from 'react'
import { Text, View } from 'react-native'
import Container from '../components/common/Container'
import { H1, H2 } from '../components/common/Typography'
import ResultsCard from '../components/ResultsCard'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

const Results = ({navigation, answeredQuestions, score}) => {

  const handlePress = () => {}

  return(
    <Container>
      <H1>You Scored</H1>
      <H2>{score}/10</H2>
      <ResultsCard data={answeredQuestions} />
      <Button onPress={() => handlePress()}  title="PLAY AGAIN?" />
    </Container>
  )
}

export default Results