import React from 'react'
import {ActivityIndicator, View } from 'react-native'
import Container from '../components/common/Container'
import QuestionCard from '../components/QuestionCard'
import { H1, CenteredText } from '../components/common/Typography'
import Button from '../components/common/Button'
import entities from 'entities'

const Quiz = ({loading, category, questionText, answers, questionNumber, answerQuestion}) => {

  if(loading){
    return(
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    )
  }

  const handlePress = answer => answerQuestion(answer)

  return(
    <Container>
      <H1>{category}</H1>
      <QuestionCard question={entities.decodeHTML(questionText)} />
      {answers.map(answer => {
        return <Button onPress={() => handlePress(answer)} title={answer} />
      })}
      <CenteredText>{questionNumber} of 10</CenteredText>
    </Container>
  )
}

export default Quiz