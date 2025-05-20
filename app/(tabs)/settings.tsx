import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import {
  User,
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
  LogOut
} from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';
import Colors from '@/constants/Colors';

export default function SettingsScreen() {
  const { signOut } = useAuth();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.profileIcon]}>
                  <User size={20} color={Colors.primary[500]} />
                </View>
                <Text style={styles.menuText}>Profile Information</Text>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.notificationsIcon]}>
                  <Bell size={20} color={Colors.accent[500]} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>Notifications</Text>
                  <Text style={styles.menuSubtext}>Email, push notifications</Text>
                </View>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.privacyIcon]}>
                  <Shield size={20} color={Colors.secondary[500]} />
                </View>
                <Text style={styles.menuText}>Privacy & Security</Text>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.menuCard}>
            <View style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.darkModeIcon]}>
                  <Moon size={20} color={Colors.neutral[700]} />
                </View>
                <Text style={styles.menuText}>Dark Mode</Text>
              </View>
              <Switch 
                value={false}
                trackColor={{ false: Colors.neutral[300], true: Colors.primary[300] }}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.neutral[300]}
              />
            </View>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.languageIcon]}>
                  <Globe size={20} color={Colors.info} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>Language</Text>
                  <Text style={styles.menuSubtext}>English</Text>
                </View>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.locationIcon]}>
                  <MapPin size={20} color={Colors.error} />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>Location</Text>
                  <Text style={styles.menuSubtext}>Use current location</Text>
                </View>
              </View>
              <Switch 
                value={true}
                trackColor={{ false: Colors.neutral[300], true: Colors.primary[300] }}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.neutral[300]}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.helpIcon]}>
                  <HelpCircle size={20} color={Colors.primary[500]} />
                </View>
                <Text style={styles.menuText}>Help & Support</Text>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.aboutIcon]}>
                  <Info size={20} color={Colors.info} />
                </View>
                <Text style={styles.menuText}>About Rooh</Text>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <View style={[styles.iconContainer, styles.termsIcon]}>
                  <FileText size={20} color={Colors.neutral[600]} />
                </View>
                <Text style={styles.menuText}>Terms & Policies</Text>
              </View>
              <ChevronRight size={20} color={Colors.neutral[400]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.signOutButton}
          onPress={() => signOut()}
        >
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
        
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

// Custom icons
const Moon = ({ size, color }: { size: number, color: string }) => (
  <View style={{ width: size, height: size }}>
    <View style={{ width: size * 0.8, height: size * 0.8, borderRadius: size * 0.4, borderWidth: 2, borderColor: color }} />
  </View>
);

const Globe = ({ size, color }: { size: number, color: string }) => (
  <View style={{ width: size, height: size, borderWidth: 2, borderRadius: size / 2, borderColor: color }} />
);

const MapPin = ({ size, color }: { size: number, color: string }) => (
  <View style={{ width: size, height: size, alignItems: 'center' }}>
    <View style={{ width: size * 0.6, height: size * 0.6, borderRadius: size * 0.3, borderWidth: 2, borderColor: color }} />
    <View style={{ width: 2, height: size * 0.4, backgroundColor: color }} />
  </View>
);

const Info = ({ size, color }: { size: number, color: string }) => (
  <View style={{ width: size, height: size, borderWidth: 2, borderRadius: size / 2, borderColor: color, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color, fontWeight: 'bold', fontSize: size * 0.7 }}>i</Text>
  </View>
);

const FileText = ({ size, color }: { size: number, color: string }) => (
  <View style={{ width: size, height: size, borderWidth: 2, borderColor: color, borderRadius: 2 }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  header: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.neutral[800],
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[700],
    marginBottom: 16,
  },
  menuCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileIcon: {
    backgroundColor: Colors.primary[50],
  },
  notificationsIcon: {
    backgroundColor: Colors.accent[50],
  },
  privacyIcon: {
    backgroundColor: Colors.secondary[50],
  },
  darkModeIcon: {
    backgroundColor: Colors.neutral[100],
  },
  languageIcon: {
    backgroundColor: Colors.info + '20',
  },
  locationIcon: {
    backgroundColor: Colors.error + '20',
  },
  helpIcon: {
    backgroundColor: Colors.primary[50],
  },
  aboutIcon: {
    backgroundColor: Colors.info + '20',
  },
  termsIcon: {
    backgroundColor: Colors.neutral[100],
  },
  menuText: {
    fontSize: 16,
    color: Colors.neutral[800],
  },
  menuTextContainer: {
    flex: 1,
  },
  menuSubtext: {
    fontSize: 12,
    color: Colors.neutral[500],
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.neutral[200],
    marginLeft: 56,
  },
  signOutButton: {
    marginTop: 32,
    marginBottom: 24,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.error + '30',
  },
  signOutText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.error,
  },
  versionContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  versionText: {
    fontSize: 12,
    color: Colors.neutral[500],
  },
  footer: {
    height: 100, // Space for tab bar
  },
});