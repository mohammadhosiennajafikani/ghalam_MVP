import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Pressable,
  Animated,
} from 'react-native';

interface CardProps {
  title: string;
  description?: string;
  image: any;
  onPress?: () => void;
  children?: React.ReactNode;
}

export function Card({ title, description, image, onPress, children }: CardProps) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = Math.min(Math.max(screenWidth * 0.45, 120), 160)-30;
  const CARD_RATIO = 160 / 256;
  const RADIUS_RATIO = 16 / 160;
  const cardRadius = cardWidth * RADIUS_RATIO;

  const scaleAnim = useState(new Animated.Value(1))[0];

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 8,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ width: cardWidth }}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <ImageBackground
            source={image}
            style={[
              styles.card,
              {
                width: cardWidth,
                aspectRatio: CARD_RATIO,
                borderRadius: cardRadius,
              },
            ]}
            imageStyle={{ borderRadius: cardRadius }}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{title}</Text>
              {description && <Text style={styles.description}>{description}</Text>}
            </View>

            {children && <View style={styles.content}>{children}</View>}
          </ImageBackground>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  card: {
    backgroundColor: '#ff0000ff',
    marginVertical: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(25, 58, 15, 0.3)',
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#00ff80ff',
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 10,
    color: '#a8ffc2ff',
    marginTop: 4,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 12,
  },
});