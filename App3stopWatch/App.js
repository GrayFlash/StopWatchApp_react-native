import React, {Fragment} from 'react';
import { SafeAreaView } from 'react-native';
import HomePage from './src/components/HomePage';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomePage/>
    </SafeAreaView>
  );
}


