import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  resultsCard: {
    height: 300
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "black",
    shadowOpacity: 0.12,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 6,
    height: 150,
    width: 300,
    padding: 10
  },
  cardBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-around'
  }
})