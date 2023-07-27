import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import styles from '../Styles/Home';
import * as Animatable from 'react-native-animatable';

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const fetchData = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(fetchData.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const renderSeparator = (item) => {
        return (
            <View
                style={styles.separator}
            />
        );
    };

    const getListViewItem = (item) => {
        navigation.navigate('Detail', item)
    }

    const _renderItem = (item) => {
        return (
            <View style={styles.card}>
                <Animatable.Text
                    onPress={() => getListViewItem(item)}
                    animation="tada"
                    iterationCount={'infinite'}
                    direction={'alternate'} style={styles.title}>{item.index + 1}. {item.item.title} ({item.item.id})</Animatable.Text>
                <Animatable.Text
                    animation="bounceOutLeft"
                    iterationCount={'infinite'}
                    direction={'alternate'} > {item.item.body}</Animatable.Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => _renderItem(item)}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );

}

export default Home