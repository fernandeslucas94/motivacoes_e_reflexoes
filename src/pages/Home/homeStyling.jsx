import { StyleSheet } from "react-native"

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    subtitle: {
        color: "#434343",
        paddingLeft: 17,
        marginTop: 44,
        fontSize: 24,
        fontWeight: "700",
    },
    item: {
        width: '43%',
        height: 90,
        marginLeft: 17,
        marginTop: 27,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemImage: {
        width: 30,
        height: 30,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#54515B'
    },
    destaquesContainer: {
        flexDirection: 'row',
        height: '16%',
    },
    allContentContainer: {
        width: '100%'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 15,
    },
    motivationTitle: {
        color: '#54515B',
        fontWeight: '800',
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 10,
    }
});