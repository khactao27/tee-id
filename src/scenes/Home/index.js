import React, { Component } from 'react'
import { 
    SafeAreaView,
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import styles from './styles'
import icons from '@assets/icons'

class Home extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity >
                    <Image source={icons.bell} style={{ width: 30, height: 30, marginRight: '5%' }} />
                </TouchableOpacity>
            ),
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image source={{ uri: 'http://222.255.238.183:8010/uploads/tee-306348862_1180959729511317_2812908560085888436_n-1676240231351.jpg' }} style={styles.avatar} />
                    <TextInput
                        placeholder='do something?'
                        style={styles.inputPost}
                        onFocus={() => {
                            console.log("Open modal create Post")
                        }}
                    />
                    <TouchableOpacity style={styles.postButton}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.content}>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <Text>Post Header</Text>
                        </View>
                        <View style={styles.postBody}>
                            <Text>Post Data</Text>
                        </View>
                        <View style={styles.postAction}>
                            <Text>Post Actions</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export { Home }