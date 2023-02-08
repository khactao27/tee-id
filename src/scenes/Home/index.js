import { useState } from 'react'
import { SafeAreaView, Modal, Pressable, FlatList, View, Text, Alert } from 'react-native'
import styles from './styles'


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

export const Home = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} setModalVisible={setModalVisible} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ItemDivider}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}