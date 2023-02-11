import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    deviceList: {

    },
    deviceItem: {
        marginTop: '1%',
        padding: 20,
        backgroundColor: '#ffddcc',
        borderRadius: 10
    },
    modalBottom: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    modalBottomHeader: {
        flex: 1
    },
    modalBottomBody: {
        flex: 10
    },
    modalBodyRow: {
        flexDirection: 'row'
    },
    modalBottomFoot: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
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
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})