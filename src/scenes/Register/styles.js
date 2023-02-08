import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#307ecc'
    },
    button: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        color: '#000000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
    },
    section: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
    loginText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    }
})