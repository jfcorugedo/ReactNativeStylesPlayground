import React from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';


const ProfileCard = ({avatarImage = require('./avatar.jpg')}) => {
    console.log('rendering profile card....');
    return (
        <View style={card.container}>
            <View style={card.avatar}>
                <Image
                    resizeMode="cover"
                    style={{flex:1, height: undefined, width: undefined, borderRadius:30}}
                    source={avatarImage} />
            </View>
            <View style={{flex: 0, alignItems: 'center', paddingLeft:20, paddingRight: 20}}>
                <Text style={{color: 'white', fontWeight: 'bold', padding: 5}}>Juan Corugedo</Text>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>Software developer</Text>
                <Text style={{fontSize: 10, fontStyle: 'italic', textAlign: 'justify'}}>
                    I'm a software developer who knows how to create
                    native applications using React Native
                </Text>
            </View>
        </View>
    );
};

const card = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        borderWidth: 3,
        borderRadius: 20,
        width: 200,
        height: 200,
        flex: 0,
        alignItems: 'center',

    },
    avatar: {
        borderRadius: 30,
        marginTop: 5,
        borderWidth: 3,
        backgroundColor: 'white',
        width: 60,
        height: 60,
        //transform: [{rotate: '45deg'}, {rotateY: '30deg'}, {scale: 1.1}],
        backfaceVisibility: 'visible',
        ...Platform.select(
            {
                ios: {
                    shadowColor: 'black',
                    shadowOffset: {
                        height: 2,
                    },
                    shadowOpacity: 1,
                },
                android: {
                    borderWidth: 3,
                    borderColor: 'black',
                    elevation: 15
                },
            }
        ),
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ProfileCard/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
