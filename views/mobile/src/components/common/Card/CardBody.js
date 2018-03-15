import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

export default CardBody = ({children}) => (
  <View style={styles.cardBody}>
    {children}
  </View>
)

CardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}