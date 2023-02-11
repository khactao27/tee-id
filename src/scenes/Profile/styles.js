import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        padding: 200,
        alignContent: 'center',
        margin: 2,
        marginTop: 5
    },
    input: {
        width: 200,
        borderWidth: 2,
        borderBottomColor: '#d9d9d9',
        borderRadius: 10,
        margin: 5,
        padding: 10
    },
    Image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#b3b3b3'
    },
    ListItem: {
        backgroundColor: '#f6f6f6ff',
        width: '100%',
        height: 50,
        paddingHorizontal: 15
    },
    ListItemContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomSheet: {
        height: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        flexDirection: 'column'
    },
    rowBottomSheet: {
        width: '100%',
        backgroundColor: '#d9d9d9',
        flexDirection: 'row',
        padding: '3%',
        marginTop: '1%',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: '5%'
    },
    TextStyles: {
        padding: 10,
        fontSize: 20,
        color: '#676767ff',
        fontWeight: '400'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50
    },
    modalView: {
        width: '95%',
        height: '80%',
        margin: 10,
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