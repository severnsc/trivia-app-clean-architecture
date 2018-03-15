import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

export default CardFooter = ({content}) => (
  <View style={styles.cardFooter}>
    <Text style={styles.cardFooterContent}>{content}</Text>
  </View>
)

CardFooter.propTypes = {
  content: PropTypes.string.isRequired
}