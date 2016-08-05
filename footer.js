import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class Footer extends Component{
    render() {
        const createdAt=this.props.createdAt;
        const {Retweet,Likes}=this.props.activities;
        return (
            <View style={styles.footer}>
                <Text style={{color:'#8899a6',fontSize:14,marginBottom:10,fontWeight:'bold'}}>{createdAt}</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}><Image style={styles.footerImg} source={require('./icons/reply.png')}></Image></View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Image style={styles.footerImg} source={require('./icons/retweet.png')}></Image>
                        <Text style={{color:'#aab8c2',fontWeight:'bold'}}>{Retweet}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Image style={styles.footerImg} source={require('./icons/heart.png')}></Image>
                        <Text style={{color:'#aab8c2',fontWeight:'bold'}}>{Likes}</Text>
                    </View>
                    <View style={{flex:1}}><Image style={styles.footerImg} source={require('./icons/heart.png')}></Image></View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    footer:{
        marginBottom:40,
    },
    footerImg:{
        width:25,
        height:25,
    },
})

export default Footer;