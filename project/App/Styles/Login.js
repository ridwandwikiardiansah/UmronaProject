import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    content: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    card: {
        padding: 20,
        minHeight: 200,
        width: '100%',
        elevation: 5,
        borderRadius: 10
    },
    textCard: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 5,
        borderRadius: 10,
        padding: 5
    },
    button: {
        marginVertical: 20
    }
})