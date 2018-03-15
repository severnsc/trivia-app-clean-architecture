import React from 'react'
import PropTypes from 'prop-types'
import Card from '../common/Card'
import { H2 } from '../common/Typography'

export default QuestionCard = ({question}) => (
  <Card>
    <Card.Body>
      <H2>{question}</H2>
    </Card.Body>
  </Card>
)

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired
}