import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowLeft, Menu } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  onMenuPress?: () => void;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  showMenuButton = false,
  onMenuPress,
  transparent = false,
}) => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={[
      styles.container, 
      transparent && styles.transparentContainer
    ]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.iconButton}
          >
            <ArrowLeft
              size={24}
              color={transparent ? Colors.white : Colors.neutral[700]}
            />
          </TouchableOpacity>
        )}
      </View>

      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.rightContainer}>
        {showMenuButton && (
          <TouchableOpacity
            onPress={onMenuPress}
            style={styles.iconButton}
          >
            <Menu
              size={24}
              color={transparent ? Colors.white : Colors.neutral[700]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  transparentContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  leftContainer: {
    width: 40,
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[800],
  },
  iconButton: {
    padding: 8,
  },
});

export default Header;