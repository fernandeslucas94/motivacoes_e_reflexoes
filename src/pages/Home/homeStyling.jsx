import { StyleSheet } from "react-native"

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#6B38DE',
        paddingTop: 65,
    },

    greeting: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 20,
        marginBottom: 10,
    },

    subtitle: {
        color: "#FFF",
        paddingLeft: 20,
        paddingRight: 10,
        fontSize: 17,
        fontWeight: "500",
        marginBottom: 45,
    },

    contentContainer: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%',
    },

    motivationTitle: {
        color: '#54515B',
        fontWeight: '800',
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 10,
    }
});