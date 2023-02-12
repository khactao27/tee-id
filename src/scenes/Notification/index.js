import { 
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert,
    Modal,
    Pressable
} from 'react-native'
import { useState } from 'react'
import styles from './styles'
import icons from '@assets/icons'

const data = []
export const Notification = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.notificationList}>
                {false ? null : data.map(item =>
                (
                    <TouchableOpacity
                        id={item}
                        style={styles.notificationItem}
                        onPress={() => {setModalVisible(!modalVisible)}}
                    >
                        {/* <View>
                            <Text>{item}</Text>
                        </View> */}
                        <Image source={icons.bell} style={{ height: 80, width: 80 }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

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
                        <Text style={styles.modalText}>Notification!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}