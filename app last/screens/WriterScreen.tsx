// app/screens/AccountScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { cardData } from '../data/dummyData';
import { CardHolder } from '../components/CardHolder';

export default function WriterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> تعداد باز دید های ماهانه شما: 216</Text>
      <Text style={styles.text}> کتاب های در جریان:3        کتاب های منتشر شده :10</Text>
      <CardHolder
        title="کتاب های در حال جریان"
        description="کتاب هایی که دارید روش کار میکنید"
        data={cardData}
      />
       <CardHolder
        title="کتاب های منتشر شده"
        data={cardData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',

  },
  text: {
    margin:12,
    padding:10,
    shadowOpacity:52,
    shadowRadius:5,
   textDecorationStyle:'double',
    backgroundColor:"#76ff9fff",
    borderRadius:23,
    fontSize: 18,
    fontFamily: 'vazir',
  },
});