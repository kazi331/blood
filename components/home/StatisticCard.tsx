import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

interface StatisticCardProps {
  number: string | number;
  label: string;
  backgroundColor?: string;
  textColor?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  number,
  label,
  backgroundColor = Colors.primary[500],
  textColor = Colors.white,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.number, { color: textColor }]}>{number}</Text>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
    height: 90,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  number: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default StatisticCard;