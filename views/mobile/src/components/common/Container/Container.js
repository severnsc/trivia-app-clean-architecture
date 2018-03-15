import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

export default Container = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}