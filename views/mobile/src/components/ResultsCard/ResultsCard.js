import React from 'react'
import Card from '../common/Card'
import ResultsList from '../ResultsList'
import styles from './styles'

export default ResultsCard = ({data}) => (
  <Card style={styles.resultsCard}>
    <Card.Body>
      <ResultsList data={data} />
    </Card.Body>
  </Card>
)