import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:"row"
    },
    image:{
        width:100,
        height:100,
        borderRadius:80,
    },
    inner_container: {
        padding:10,
        flex:1,
        justifyContent:'center',
        
    },
    title:{
        fontWeight:'bold',
        fontSize:27
    },
    info_container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    year: {
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:3,
        borderRadius:5,
    },
    soldout_title:{
        color:'red',
        fontSize:12,
    },
    content_container: {
        flexDirection:'row',
        justifyContent:'space-between'
    }



})