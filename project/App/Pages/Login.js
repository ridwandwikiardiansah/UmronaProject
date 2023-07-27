import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    Alert
} from 'react-native'
import styles from '../Styles/Login'



const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = 'user'
        const pass = '123'
        if(username === user && password === pass){
            Alert.alert('Login Berhasil, Selamat Datang!')
            navigation.navigate('Home')
        }else{
            Alert.alert('Username atau password salah, silahkan coba lagi!')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Umrona App Test</Text>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAv09ty3i7UwtXtas0khybaRmOJEqvEvY3Q'
                    }}
                />
                <View style={styles.card}>
                    <Text style={styles.textCard}>Login</Text>
                    <View>
                        <Text>Username</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Username' 
                            onChangeText={(e)=> setUsername(e)}/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Password' 
                            onChangeText={(e)=> setPassword(e)}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Login' onPress={handleLogin} />
                    </View>
                </View>
            </View>
        </View>
    )

}

export default Login