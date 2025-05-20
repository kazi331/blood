import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function DonateScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Donate Blood</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Blood Type</Text>
          <View style={styles.bloodTypeGrid}>
            {bloodTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.bloodTypeButton,
                  selectedType === type && styles.selectedType,
                ]}
                onPress={() => setSelectedType(type)}
              >
                <Text
                  style={[
                    styles.bloodTypeText,
                    selectedType === type && styles.selectedTypeText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Donation Details</Text>
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Donation Type</Text>
              <View style={styles.optionsRow}>
                <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                  <Text style={styles.selectedOptionText}>Whole Blood</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Text style={styles.optionText}>Plasma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                  <Text style={styles.optionText}>Platelets</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>When can you donate?</Text>
              <View style={styles.datePickerRow}>
                <TouchableOpacity style={styles.datePicker}>
                  <Text style={styles.datePickerText}>Select a date</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby Donation Centers</Text>
          
          <TouchableOpacity style={styles.centerCard}>
            <View style={styles.centerInfo}>
              <Text style={styles.centerName}>Red Cross Blood Center</Text>
              <Text style={styles.centerAddress}>
                123 Main Street, Downtown, City
              </Text>
              <Text style={styles.centerDistance}>1.2 miles away</Text>
            </View>
            <View style={styles.centerHours}>
              <Text style={styles.hoursText}>Open</Text>
              <Text style={styles.hoursDetail}>9 AM - 5 PM</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.centerCard}>
            <View style={styles.centerInfo}>
              <Text style={styles.centerName}>Community Hospital Blood Bank</Text>
              <Text style={styles.centerAddress}>
                456 Health Avenue, Northside, City
              </Text>
              <Text style={styles.centerDistance}>2.5 miles away</Text>
            </View>
            <View style={styles.centerHours}>
              <Text style={styles.hoursText}>Open</Text>
              <Text style={styles.hoursDetail}>8 AM - 8 PM</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.viewAllCenters}>
            <Text style={styles.viewAllText}>View All Centers</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eligibilitySection}>
          <Text style={styles.eligibilityTitle}>Eligibility Criteria</Text>
          <Text style={styles.eligibilityDescription}>
            To donate blood, you typically need to:
          </Text>
          
          <View style={styles.criteriaList}>
            <View style={styles.criteriaItem}>
              <View style={styles.criteriaCircle} />
              <Text style={styles.criteriaText}>Be at least 17 years old</Text>
            </View>
            <View style={styles.criteriaItem}>
              <View style={styles.criteriaCircle} />
              <Text style={styles.criteriaText}>Weigh at least 110 lbs (50 kg)</Text>
            </View>
            <View style={styles.criteriaItem}>
              <View style={styles.criteriaCircle} />
              <Text style={styles.criteriaText}>Be in good general health</Text>
            </View>
            <View style={styles.criteriaItem}>
              <View style={styles.criteriaCircle} />
              <Text style={styles.criteriaText}>
                Have not donated whole blood in the last 56 days
              </Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer} />
      </ScrollView>
      
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Schedule Donation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.primary[500],
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[800],
    marginBottom: 16,
  },
  bloodTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  bloodTypeButton: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  selectedType: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  bloodTypeText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[800],
  },
  selectedTypeText: {
    color: Colors.white,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 24,
  },
  cardRow: {
    marginBottom: 16,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[800],
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    marginRight: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  optionText: {
    color: Colors.neutral[800],
  },
  selectedOptionText: {
    color: Colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
    marginVertical: 16,
  },
  datePickerRow: {
    flexDirection: 'row',
  },
  datePicker: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  datePickerText: {
    color: Colors.neutral[500],
  },
  centerCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
    flexDirection: 'row',
  },
  centerInfo: {
    flex: 1,
  },
  centerName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[800],
    marginBottom: 4,
  },
  centerAddress: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 4,
  },
  centerDistance: {
    fontSize: 12,
    color: Colors.primary[500],
  },
  centerHours: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  hoursText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.success,
    marginBottom: 4,
  },
  hoursDetail: {
    fontSize: 12,
    color: Colors.neutral[600],
  },
  viewAllCenters: {
    alignItems: 'center',
    marginBottom: 24,
  },
  viewAllText: {
    fontSize: 16,
    color: Colors.primary[500],
    fontWeight: '500',
  },
  eligibilitySection: {
    backgroundColor: Colors.neutral[50],
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 100,
  },
  eligibilityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.neutral[800],
    marginBottom: 8,
  },
  eligibilityDescription: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 16,
  },
  criteriaList: {
    marginBottom: 16,
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  criteriaCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary[500],
    marginRight: 12,
  },
  criteriaText: {
    fontSize: 14,
    color: Colors.neutral[700],
    flex: 1,
  },
  learnMoreButton: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '500',
  },
  footer: {
    height: 80,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  donateButton: {
    backgroundColor: Colors.primary[500],
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donateButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});