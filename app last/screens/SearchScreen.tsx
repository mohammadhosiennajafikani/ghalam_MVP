import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { cardData } from '../data/dummyData';
import { CardHolder } from '../components/CardHolder';

const categories = [
  "همه",
  "رمان",
  "شعر",
  "تاریخی",
  "علمی",
  "فلسفه",
  "کودک",
  "داستان کوتاه",
  "زندگی‌نامه",
  "فانتزی",
  "دینی",
  "هنر",
];

export default function SearchScreen() {
  const [selected, setSelected] = useState("همه");

  return (
    <View style={styles.container}>
      {/* سرچ‌بار نمایشی */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="جستجو..."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* دکمه‌های دسته‌بندی */}
      <ScrollView
        contentContainerStyle={styles.categoriesWrapper}
        horizontal={false}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryBtn,
              selected === cat && styles.categoryBtnActive,
            ]}
            onPress={() => setSelected(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                selected === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <CardHolder
        title="جدید ترین اپدیت از نویسنده هایی که دنبال میکنید"
        description="کتاب های جدید نویسنده های مورد علاقه شما"
        data={cardData}
      />
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: "#fafafa",
  },
  searchBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  searchInput: {
    fontSize: 14,
    color: "#333",
  },
  categoriesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#eee",
    margin: 4,
  },
  categoryBtnActive: {
    backgroundColor: "#008822ff",
  },
  categoryText: {
    fontSize: 13,
    color: "#333",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
});
