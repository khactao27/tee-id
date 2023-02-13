import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2
    },
    body: {
        flex: 6,
        marginLeft: '5%'
    },
    footer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center',
        gap: 16
    },
    signUpBtn: {
        backgroundColor: '#567DF4',
        borderRadius: 10,
        paddingTop: '4%',
        paddingBottom: '4%',
        paddingRight: '10%',
        paddingLeft: '10%',
        alignItems: 'center',
        alignContent: 'center'
    }
})