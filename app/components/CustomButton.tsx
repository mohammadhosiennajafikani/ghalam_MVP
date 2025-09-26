// app/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonVariant = 'primary' | 'danger' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'small' | 'medium' | 'large' | 'icon';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

export function CustomButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textColor[variant]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});

const variantStyles: Record<ButtonVariant, object> = {
  primary: { backgroundColor: '#d32f2f' },
  danger: { backgroundColor: '#c62828' },
  outline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
  },
  secondary: { backgroundColor: '#455a64' },
  ghost: { backgroundColor: 'transparent' },
  link: { backgroundColor: 'transparent' },
};

const textColor: Record<ButtonVariant, object> = {
  primary: { color: '#fff' },
  danger: { color: '#fff' },
  outline: { color: '#333' },
  secondary: { color: '#fff' },
  ghost: { color: '#333' },
  link: { color: '#1976d2', textDecorationLine: 'underline' },
};

const sizeStyles: Record<ButtonSize, object> = {
  small: { paddingVertical: 6, paddingHorizontal: 12 },
  medium: { paddingVertical: 10, paddingHorizontal: 16 },
  large: { paddingVertical: 14, paddingHorizontal: 20 },
  icon: { width: 40, height: 40 },
};