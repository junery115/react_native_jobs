import React from 'react';

import { useRouter } from 'expo-router';
import {
  Text,
  TextInput,
  View
} from 'react-native';

import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Japheth</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='what are u looking for?'
           />
        </View>

      </View>
    </View>
  )
}

export default Welcome