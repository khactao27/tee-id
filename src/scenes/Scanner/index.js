import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, View, Text, ImageBackground, Alert, Image } from "react-native"
import { useState } from "react"

import QRCodeScanner from "react-native-qrcode-scanner"
import styles from "./styles"
import icons from '@assets/icons'
import images from '@assets/images'
import { connect } from 'react-redux'


export class Scanner extends Component {
    constructor() {
        super()
        this.state = {
            scanner: false,
            scanResult: ''
        }
    }

    async onSuccess(e) {
        console.log(e.data)
        // this.setState({ scanner: false, scanResult: e.data })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
    
                </View>
                {
                    !this.state.scanner && !this.state.scanResult &&
                    <View style={styles.card}>
                        <Image source={icons.camera} />
                        <Text>Please move your camera over the QR Code</Text>
                        <Image source={images.qrCode} />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({scanner: true})
                            } } >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: 'black',
                                marginBottom: '5%',
                                paddingRight: '5%',
                                paddingLeft: '5%'
                            }}>
                                <Image source={icons.camera} />
                                <Text>Scan</Text>
                            </View>
    
                        </TouchableOpacity>
                    </View>
                }
    
                {
                    this.state.scanResult &&
                    <Text>{this.state.scanResult}</Text>
                }
    
                {
                    this.state.scanner &&
                    <QRCodeScanner
                        reactivate={true}
                        showMarker={true}
                        onRead={this.onSuccess}
                        topContent={
                            <Text>Please move your camera {"\n"} over QR Code</Text>
                        }
                        bottomContent={
                            <View>
                                <Text>Hello</Text>
                            </View>
                        }
                    />
                }
                <View style={styles.bottomContent}>
    
                </View>
            </SafeAreaView>
        )
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({

    })
)(Scanner)
