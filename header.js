import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Header extends Component{
    render() {
        const{avatar,handler,name}=this.props.user;
        var isFollowing=this.props.isFollowing;
        isFollowing=isFollowing==true?'onFollowing':'Follow';
        return (
            <View style={styles.header}>
                <View style={styles.row}>
                    <Image style={styles.headerImg} source={{uri:avatar}}></Image>
                    <View style={[styles.column,{marginLeft:10}]}>
                        <Text style={[styles.bold,{color:'#292f33',fontSize:18}]}>{name}</Text>
                        <Text style={{color:'#8899a6',fontSize:14}}>{handler}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Image style={{width:25,height:25,marginRight:10,marginTop:10}} source={require('./icons/settings.png')}></Image>
                    <View style={styles.headerBtn}>
                        <Text style={[styles.bold,{color:'white',fontSize:20,textAlign:'center',marginTop:10}]}>{isFollowing}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const size =50
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
       
        marginBottom:20,
    },
    headerImg:{
        width:size,
        height:size,
    },
    column:{
        flexDirection:'column',
    },
    row:{
        flexDirection:'row',
    },
    bold:{
        fontWeight:'bold',
    },
    headerBtn:{
        width:150,
        height:50,
        marginRight:10,
        backgroundColor:'#1c9eee',
        borderWidth:1,
        borderColor:'#3b88c3',
        borderRadius:5,
    },
})

export default Header;