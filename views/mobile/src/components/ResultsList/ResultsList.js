import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import entities from "entities"

const resultsListItem = ({item, index}) => (
  <View>
    <Text>
      {index + 1}. {entities.decodeHTML(item.questionText)}
    </Text>
    <Text>
      You answered: {item.userAnswer} | Correct answer: {item.correctAnswer}
    </Text>
  </View>
)

const separator = () => <View style={styles.separator} />

export default ResultsList = ({data}) => (
  <FlatList
    style={styles.resultsList}
    data={data}
    renderItem={resultsListItem}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={separator}
  />
)

ResultsList.propTypes = {
  data: PropTypes.array.isRequired
}