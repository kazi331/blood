import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Check, AlertTriangle, Info, Droplet } from 'lucide-react-native';
import Colors from '@/constants/Colors';

const notifications = [
  {
    id: '1',
    type: 'request',
    title: 'Blood Donation Request',
    message: 'Urgent need for A+ blood type at Central Hospital.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'alert',
    title: 'Donation Reminder',
    message: 'You are eligible to donate blood again in 3 days.',
    time: '1 day ago',
    read: false,
  },
  {
    id: '3',
    type: 'success',
    title: 'Donation Successful',
    message: 'Thank you for your recent blood donation! You helped save lives.',
    time: '3 days ago',
    read: true,
  },
  {
    id: '4',
    type: 'info',
    title: 'Tips for Donors',
    message: 'Stay hydrated and eat iron-rich foods before your next donation.',
    time: '1 week ago',
    read: true,
  },
  {
    id: '5',
    type: 'request',
    title: 'Emergency Blood Required',
    message: 'Critical need for O- blood type at Children\'s Hospital.',
    time: '1 week ago',
    read: true,
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Mark all as read</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.notificationsContainer}>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
          
          {notifications.length === 0 && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No notifications yet</Text>
            </View>
          )}
        </View>
        
        <View style={styles.footer} />
      </ScrollView>
    </View>
  );
}

interface NotificationProps {
  notification: {
    id: string;
    type: string;
    title: string;
    message: string;
    time: string;
    read: boolean;
  };
}

const NotificationItem: React.FC<NotificationProps> = ({ notification }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'request':
        return <Droplet size={20} color={Colors.primary[500]} />;
      case 'alert':
        return <AlertTriangle size={20} color={Colors.warning} />;
      case 'success':
        return <Check size={20} color={Colors.success} />;
      case 'info':
        return <Info size={20} color={Colors.info} />;
      default:
        return <Info size={20} color={Colors.info} />;
    }
  };
  
  const getIconContainerStyle = () => {
    switch (notification.type) {
      case 'request':
        return styles.requestIcon;
      case 'alert':
        return styles.alertIcon;
      case 'success':
        return styles.successIcon;
      case 'info':
        return styles.infoIcon;
      default:
        return styles.infoIcon;
    }
  };
  
  return (
    <TouchableOpacity style={[
      styles.notificationCard,
      !notification.read && styles.unreadCard
    ]}>
      <View style={[styles.iconContainer, getIconContainerStyle()]}>
        {getIcon()}
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          {!notification.read && <View style={styles.unreadDot} />}
        </View>
        <Text style={styles.notificationMessage}>{notification.message}</Text>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.neutral[800],
  },
  markAllRead: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  notificationsContainer: {
    padding: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  unreadCard: {
    backgroundColor: Colors.primary[50] + '20',
    borderLeftWidth: 3,
    borderLeftColor: Colors.primary[500],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  requestIcon: {
    backgroundColor: Colors.primary[100],
  },
  alertIcon: {
    backgroundColor: Colors.warning + '20',
  },
  successIcon: {
    backgroundColor: Colors.success + '20',
  },
  infoIcon: {
    backgroundColor: Colors.info + '20',
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.neutral[800],
    flex: 1,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary[500],
    marginLeft: 8,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.neutral[600],
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: Colors.neutral[500],
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.neutral[500],
  },
  footer: {
    height: 100, // Space for tab bar
  },
});