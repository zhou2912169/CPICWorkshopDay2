import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class StatusBar extends Component{
    render() {
        const {Retweet,Likes,users}=this.props.activities;

        return (
            <View style={styles.statusBar}>
                <View style={styles.leftBar}>
                    <View style={styles.BarContent}>
                        <Text style={styles.BarText}>RETWEETS</Text>
                        <Text style={styles.BarNumber}>{Retweet}</Text>
                    </View>
                    <View style={styles.BarContent}>
                        <Text style={styles.BarText}>LIKES</Text>
                        <Text style={styles.BarNumber}>{Likes}</Text>
                    </View>
                </View>
                <View style={styles.rightBar}>
                    {
                        users.map(function(item,i){
                            return <Image style={styles.BarImg} source={{uri:item.avatar}}></Image>
                        })
                    }
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    statusBar:{
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#e1e8ed',
        borderBottomColor:'#e1e8ed',
        marginBottom:40,
    },
    leftBar:{
        flex:2,
        flexDirection:'row',
        borderRightWidth:1,
        borderRightColor:'#e1e8ed',
    },
    rightBar:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    BarContent:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    BarText:{
        fontSize:10,
        color:'#8899a6',
    },
    BarNumber:{
        fontSize:18,
        color:'#0084b4',
        fontWeight:'bold',
    },
    BarImg:{
        width:25,
        height:25,
        marginLeft:10,
    },
})

export default StatusBar;