import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './styles'

export default CardHeader = ({title}) => (
  <View style={styles.cardHeader}>
    <Text style={styles.cardTitle}>{title}</Text>
  </View>
)

CardHeader.propTypes = {
  title: PropTypes.string.isRequired
}