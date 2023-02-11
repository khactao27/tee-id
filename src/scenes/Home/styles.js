import { StatusBar, StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#f2f2f2",
        marginLeft: 10,
        marginRight: 10
    },
    header: {
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        flex: 1,
        width: 60,
        height: 60,
        borderRadius: 50,
        borderColor: '#a6a6a6',
        borderWidth: 2
    },
    content: {
        marginTop: '2%'
    },
    inputPost: {
        flex: 4
    },
    postButton: {
        flex: 1,
        alignItems: 'center'
    },
    post: {
        backgroundColor: '#a6a6a6'
    },
    postHeader: {

    },
    postBody: {

    },
    postActions: {

    },
    item: {
        backgroundColor: "#99c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})