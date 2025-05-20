import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Edit2, Shield, Settings } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  const bloodType = 'A+'; // Mock data
  const donationCount = 5; // Mock data

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color={Colors.neutral[700]} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Edit2 size={16} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>
          {user?.email?.split('@')[0] || 'User'}
        </Text>
        <Text style={styles.email}>{user?.email || 'No email provided'}</Text>

        <View style={styles.bloodTypeContainer}>
          <Text style={styles.bloodType}>{bloodType}</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{donationCount}</Text>
            <Text style={styles.statLabel}>Donations</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Lives Saved</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <Text style={styles.infoValue}>John Doe</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoValue}>01/01/1990</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Weight</Text>
            <Text style={styles.infoValue}>70 kg</Text>
          </View>
          
          <TouchableOpacity style={styles.editInfoButton}>
            <Text style={styles.editInfoText}>Edit Information</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Donation History</Text>
        
        {donationCount > 0 ? (
          <View style={styles.historyCard}>
            <View style={styles.historyItem}>
              <View style={styles.historyDate}>
                <Text style={styles.historyMonth}>JUN</Text>
                <Text style={styles.historyDay}>15</Text>
              </View>
              <View style={styles.historyDetails}>
                <Text style={styles.historyLocation}>Red Cross Blood Center</Text>
                <Text style={styles.historyType}>Whole Blood</Text>
              </View>
              <Shield size={24} color={Colors.success} />
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.historyItem}>
              <View style={styles.historyDate}>
                <Text style={styles.historyMonth}>MAR</Text>
                <Text style={styles.historyDay}>22</Text>
              </View>
              <View style={styles.historyDetails}>
                <Text style={styles.historyLocation}>Community Blood Drive</Text>
                <Text style={styles.historyType}>Plasma</Text>
              </View>
              <Shield size={24} color={Colors.success} />
            </View>
            
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All History</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emptyHistoryCard}>
            <Text style={styles.emptyHistoryText}>
              You haven't made any donations yet.
            </Text>
            <TouchableOpacity style={styles.donateNowButton}>
              <Text style={styles.donateNowText}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={() => signOut()}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
      
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 24,
    paddingTop: 60,
  },
  settingsButton: {
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
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary[500],
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.neutral[900],
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 16,
  },
  bloodTypeContainer: {
    backgroundColor: Colors.primary[500],
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 24,
  },
  bloodType: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.neutral[200],
    marginHorizontal: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary[500],
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.neutral[600],
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[800],
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  infoItem: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 12,
    color: Colors.neutral[500],
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.neutral[800],
  },
  editInfoButton: {
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
    marginTop: 8,
  },
  editInfoText: {
    color: Colors.primary[500],
    fontSize: 16,
    fontWeight: '500',
  },
  historyCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  historyDate: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  historyMonth: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.primary[500],
  },
  historyDay: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary[700],
  },
  historyDetails: {
    flex: 1,
  },
  historyLocation: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[800],
    marginBottom: 4,
  },
  historyType: {
    fontSize: 14,
    color: Colors.neutral[600],
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
    marginVertical: 8,
  },
  viewAllButton: {
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
    marginTop: 8,
  },
  viewAllText: {
    color: Colors.primary[500],
    fontSize: 16,
    fontWeight: '500',
  },
  emptyHistoryCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyHistoryText: {
    fontSize: 16,
    color: Colors.neutral[600],
    textAlign: 'center',
    marginBottom: 16,
  },
  donateNowButton: {
    backgroundColor: Colors.primary[500],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  donateNowText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  signOutButton: {
    marginHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.neutral[100],
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  signOutText: {
    color: Colors.error,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    height: 100, // Space for tab bar
  },
});