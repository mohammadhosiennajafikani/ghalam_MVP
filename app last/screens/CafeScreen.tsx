// app/screens/AccountScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Post } from "../components/Post";
import { ScrollView } from 'react-native-gesture-handler';

const userAvatar = require("../assets/person.svg");
const bookCover = require('../assets/books/book3.png');

export default function CafeScreen() {
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <ScrollView showsHorizontalScrollIndicator={false} >

        <Post
          avatar={userAvatar}
          name="علی رضایی"
          message="این کتاب خیلی به من کمک کرد."
          type="plain"
           likes={42}
          comments={10}
          time="۳۵ دقیقه پیش"
        />

        {/* Reply to book */}
        <Post
          avatar={userAvatar}
          name="مریم کاظمی"
          type="bookReply"
          book={{ cover: bookCover, title: "بوف کور", author: "صادق هدایت" }}
          message="به نظرم فصل اول خیلی سنگینه ولی مهمه."
           likes={42}
          comments={10}
          time="۱ ساعت پیش"
        />

        {/* Reply to excerpt */}
        <Post
          avatar={userAvatar}
          name="نوید"
          type="excerptReply"
          book={{ cover: bookCover, title: "سووشون", author: "سیمین دانشور" }}
          excerpt="در آن روزگار، هیچ‌کس نمی‌دانست که چه خواهد شد..."
          message="این پاراگراف منو گرفت."
          likes={42}
          comments={10}
          time="دیروز"
        />

        {/* Quote post with collapsible */}
        <Post
          avatar={userAvatar}
          name="فاضل نظری"
          type="quote"
          message="بخشی از کتاب جدید در حال انتشار"
          quoteText={"«در دل تاریکی، نوری کوچک می‌تواند راه را روشن کند...»"}
          likes={150}
          comments={10}
          time="۲ ساعت پیش"
        />
        <Post
          avatar={userAvatar}
          name="حسین"
          message="پست معمولی از یک فرد مثل همه شکبه های مجازی"
          type="plain"
           likes={42}
          comments={10}
          time="۳۵ دقیقه پیش"
        />
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});