import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    header: {
        flex: 9
    },
    body: {
        flex: 2,
        flexDirection: 'column-reverse'
    },
    footer: {
        flex: 2,
        flexDirection: 'column-reverse',
        alignItems: 'center',
     
    },
    buttonBox: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%'
    },
    qrCodeBtn: {
        flex: 1,
        alignItems: 'center',
        background: 'white',
        borderRadius: 10,
        backgroundColor: 'rgba(86, 125, 244, 0.1)',
        padding: '4%',
        marginRight: '1%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    navSignUpBtn: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        padding: '4%',
        backgroundColor: '#567DF4',
        marginLeft: '1%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})