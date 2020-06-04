import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Simples Texto='Flexível!! Mizera'/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})