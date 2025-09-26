// components/BannerHolder.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");
const BANNER_WIDTH = screenWidth; // ریسپانسیو
const BANNER_HEIGHT = ((BANNER_WIDTH * 320) / 720); // نسبت 720x320

interface BannerHolderProps {
  data: { id: string; image: any }[];
  interval?: number;
  onPressBanner?: (item: { id: string; image: any }, index: number) => void;
}

export function BannerHolder({
  data,
  interval = 3000,
  onPressBanner,
}: BannerHolderProps) {
  const [index, setIndex] = useState(0);

  // اتوپلی + لوپ
  useEffect(() => {
    if (!data?.length) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, interval);
    return () => clearInterval(t);
  }, [data, interval]);

  // هندل دکمه‌ها
  const handleNext = () => setIndex((prev) => (prev + 1) % data.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  const current = data[index];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.55}
        onPress={() => onPressBanner?.(current, index)}
        style={styles.bannerBox}
      >
        <Image
          source={
            typeof current.image === "string"
              ? { uri: current.image }
              : current.image
          }
          style={styles.bannerImage}
        />
      </TouchableOpacity>

      <Pressable style={[styles.arrow, { left: 10 }]} onPress={handlePrev}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </Pressable>
      <Pressable style={[styles.arrow, { right: 10 }]} onPress={handleNext}>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </Pressable>

      <View style={styles.indicatorWrapper}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  bannerBox: {
    width: BANNER_WIDTH,
    flex: 1,
    overflow: "hidden",
  },
  bannerImage: {
    width: BANNER_WIDTH,
    height: BANNER_HEIGHT,
    borderRadius:20,
    resizeMode: 'cover',
  },
  arrow: {
    position: "absolute",
    top: "45%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
  indicatorWrapper: {
    flexDirection: "row",
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});