import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

export class QRCode extends Component {
    
    constructor() {
        super()
    }

    render() {
        return (
            <SafeAreaView>
            
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(QRCode)