import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 2,
        justifyContent: 'center'
    },
    body: {
        flex: 6,
        marginLeft: '5%',
        marginRight: '5%'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center',
        gap: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(18, 18, 29, 0.1)'
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