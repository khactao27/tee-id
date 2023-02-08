import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        alignContent: 'center',
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
    TextStyles: {
        fontSize: 15,
        color: '#676767ff',
        fontWeight: '400'
    }
})