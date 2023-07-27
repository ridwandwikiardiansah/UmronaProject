import React from "react";
import { View, Image, Text } from "react-native";
import styles from '../Styles/Detail';
import * as Animatable from 'react-native-animatable';

const Detail = (props) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAv09ty3i7UwtXtas0khybaRmOJEqvEvY3Q'
                }}
            />
            <View style={styles.content}>
                <Animatable.Text animation="slideInRight" iterationCount={'infinite'} direction={'alternate'} style={styles.title}>{props.route.params.item.id}. {props.route.params.item.title}</Animatable.Text>
                <Text style={styles.body}>{props.route.params.item.body}</Text>
            </View>

        </View>
    );

}

export default Detail