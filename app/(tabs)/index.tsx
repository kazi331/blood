import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Bell } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import StatisticCard from '@/components/home/StatisticCard';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Palestine</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell color={Colors.neutral[700]} size={24} />
          </TouchableOpacity>
        </View>
        
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>GIVE THE GIFT OF LIFE</Text>
            <View style={styles.donateTextContainer}>
              <Text style={styles.donateText}>Donate </Text>
              <Text style={[styles.donateText, styles.bloodText]}>Blood</Text>
            </View>
          </View>
          
          {/* Statistics */}
          <View style={styles.statsContainer}>
            <StatisticCard
              number="157"
              label="New Blood Requested"
              backgroundColor={Colors.primary[500]}
            />
            <StatisticCard
              number="15K"
              label="Save Lives"
              backgroundColor={Colors.neutral[100]}
              textColor={Colors.neutral[600]}
            />
          </View>
          
          <Text style={styles.infoText}>
            Each Donations can help save up to <Text style={styles.highlight}>3 lives!</Text>
          </Text>

          {/* Chart (Simplified version) */}
          <View style={styles.chartContainer}>
            <LinearGradient
              colors={[Colors.primary[300], Colors.primary[50]]}
              style={styles.chart}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
            <View style={styles.chartDot}>
              <View style={styles.innerDot} />
            </View>
            <View style={styles.chartLabel}>
              <Text style={styles.chartValue}>14.2 K</Text>
            </View>
          </View>
        </View>
        
        {/* Action Cards */}
        <View style={styles.actionCardsContainer}>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, styles.findDonorIcon]}>
                <Search color={Colors.primary[500]} size={24} />
              </View>
              <Text style={styles.actionTitle}>Find A Donor</Text>
              <View style={styles.actionBadge}>
                <Text style={styles.badgeText}>235K</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, styles.requestIcon]}>
                <Bell color={Colors.primary[500]} size={24} />
              </View>
              <Text style={styles.actionTitle}>Blood Request</Text>
              <View style={styles.actionBadge}>
                <Text style={styles.badgeText}>500K</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, styles.bankIcon]}>
                <View style={styles.dropletIcon} />
              </View>
              <Text style={styles.actionTitle}>Blood Bank</Text>
              <View style={[styles.actionBadge, styles.mapBadge]}>
                <Text style={styles.badgeText}>Map</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <View style={[styles.actionIcon, styles.otherIcon]}>
                <Settings color={Colors.neutral[500]} size={24} />
              </View>
              <Text style={styles.actionTitle}>Other</Text>
              <View style={[styles.actionBadge, styles.moreBadge]}>
                <Text style={styles.badgeText}>More</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Settings = ({ color, size }: { color: string, size: number }) => (
  <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: size * 0.6, height: size * 0.6, borderRadius: size * 0.3, borderWidth: 2, borderColor: color }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary[500],
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  heroContent: {
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[700],
    marginBottom: 8,
  },
  donateTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  donateText: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary[500],
  },
  bloodText: {
    color: Colors.primary[500],
    fontWeight: '900',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 24,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
    color: Colors.neutral[800],
  },
  chartContainer: {
    height: 160,
    marginBottom: 32,
    position: 'relative',
  },
  chart: {
    height: '100%',
    borderRadius: 24,
  },
  chartDot: {
    position: 'absolute',
    right: '20%',
    top: '25%',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  innerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary[500],
  },
  chartLabel: {
    position: 'absolute',
    right: '15%',
    top: '10%',
    backgroundColor: Colors.primary[500],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  chartValue: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  actionCardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Extra padding for tab bar
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  findDonorIcon: {
    backgroundColor: Colors.primary[50],
  },
  requestIcon: {
    backgroundColor: Colors.accent[50],
  },
  bankIcon: {
    backgroundColor: Colors.secondary[50],
  },
  otherIcon: {
    backgroundColor: Colors.neutral[100],
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[800],
    marginBottom: 8,
  },
  actionBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: Colors.info,
  },
  mapBadge: {
    backgroundColor: Colors.secondary[400],
  },
  moreBadge: {
    backgroundColor: Colors.neutral[400],
  },
  badgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  dropletIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.secondary[500],
    transform: [{ rotate: '45deg' }],
  },
});