import React from 'react'
import {ActivityIndicator, View } from 'react-native'
import Container from '../components/common/Container'
import QuestionCard from '../components/QuestionCard'
import { H1, CenteredText } from '../components/common/Typography'
import Button from '../components/common/Button'

const Quiz = ({navigation, loading, questions, questionNumber, incrementQuestionNumber, answerQuestion, disabled, toggleDisabled}) => {

  if(loading){
    return(
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    )
  }

  const currentQuestion = questions[questionNumber - 1]

  const handlePress = string => {}

  return(
    <Container>
      <H1>{currentQuestion.category}</H1>
      <QuestionCard question={entities.decodeHTML(currentQuestion.questionText)} />
      <Button disabled={disabled} onPress={() => handlePress("True")} title={"TRUE"} />
      <Button disabled={disabled} onPress={() => handlePress("False")} title={"FALSE"} />
      <CenteredText>{questionNumber} of 10</CenteredText>
    </Container>
  )
}

export default Quiz