import { useState } from 'react'
import { SafeAreaView, Modal, Pressable, FlatList, View, Text, Alert, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import icons from '@assets/icons'
import { useEffect } from 'react'

const Item = ({ title, setModalVisible }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title} onPress={() => setModalVisible(true)}>{title}</Text>
        </View>
    )
}

const ItemDivider = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#607D8B",
            }}
        />
    )
}

export const Home = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity >
                    <Image source={icons.bell} style={{ width: 30, height: 30, marginRight: '5%' }}/>
                </TouchableOpacity>
            ),
        })
    })

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={icons.avatarDefault} style={styles.avatar} />
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