// app/components/CardHolder.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';

const { width } = Dimensions.get('window');

interface CardHolderProps {
  title: string;
  description?: string;
  data: any[];
}

export function CardHolder({ title, description, data }: CardHolderProps) {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const spacing = 8;

  const handleNext = () => {
    const nextIndex = Math.min(currentIndex + 1, data.length - 1);
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
    setCurrentIndex(prevIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

      <View style={styles.carouselWrapper}>
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          inverted
          keyExtractor={(item, index) => item.id ?? index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: spacing }}>
              <Card {...item} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / (spacing * 2)
            );
            setCurrentIndex(index);
          }}
        />

        {currentIndex > 0 && (
          <Pressable style={[styles.arrow, styles.rightArrow]} onPress={handlePrev}>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </Pressable>
        )}

        {currentIndex < data.length - 1 && (
          <Pressable style={[styles.arrow, styles.leftArrow]} onPress={handleNext}>
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#aaffcdff',
    borderRadius: 16,
  
  },
  header: {
    marginBottom: 12,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
  },
  title: {
    margin: 6,
    fontSize: 18,
    fontFamily: 'vazir',
    fontWeight: '700',
    color: '#222',
   alignSelf: 'flex-start'
  },
  description: {
    alignSelf: 'flex-start',
    margin: 6,
    fontSize: 13,
    color: '#555',
    marginTop: 4,
    textAlign: 'right',
  },
  carouselWrapper: {
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    top: '40%',
    backgroundColor: '#007aff',
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
  leftArrow: {
    left: 8,
  },
  rightArrow: {
    right: 8,
  },
});