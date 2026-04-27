import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Dropdown } from 'react-native-omni-select';

// Sample data
const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
  { label: 'Grape', value: 'grape' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Pineapple', value: 'pineapple' },
];

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'India',
  'Brazil',
  'Mexico',
];

interface User {
  id: number;
  name: string;
  email: string;
  department: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Design' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Marketing' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', department: 'Engineering' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', department: 'Sales' },
];

type Fruit = { label: string; value: string };

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>React Native Omni Select</Text>
        <Text style={styles.subtitle}>Simple dropdown examples</Text>

        {/* Basic Dropdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Dropdown</Text>
          <Dropdown<Fruit>
            data={fruits}
            value={selectedFruit}
            onChange={(value) => setSelectedFruit(value as Fruit | null)}
            placeholder="Select a fruit"
            style={styles.dropdown}
          />
          {selectedFruit && (
            <Text style={styles.result}>
              Selected: {selectedFruit.label}
            </Text>
          )}
        </View>

        {/* Multi-select with Search */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Multi-select with Search</Text>
          <Dropdown
            data={countries}
            value={selectedCountries}
            onChange={(value) => setSelectedCountries(value as string[])}
            placeholder="Select countries"
            multiple
            search
            searchPlaceholder="Search countries..."
            style={styles.dropdown}
          />
          {selectedCountries.length > 0 && (
            <Text style={styles.result}>
              Selected: {selectedCountries.join(', ')}
            </Text>
          )}
        </View>

        {/* Custom Object with TypeScript */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Objects</Text>
          <Dropdown<User>
            data={users}
            value={selectedUser}
            onChange={(value) => setSelectedUser(value as User)}
            labelField="name"
            valueField="id"
            placeholder="Select a user"
            search
            searchPlaceholder="Search by name..."
            renderItem={(user, isSelected) => (
              <View style={styles.customItem}>
                <Text style={[styles.userName, isSelected && styles.selected]}>
                  {user.name}
                </Text>
                <Text style={styles.userEmail}>{user.email}</Text>
                <Text style={styles.userDept}>{user.department}</Text>
              </View>
            )}
            style={styles.dropdown}
          />
          {selectedUser && (
            <View style={styles.result}>
              <Text>Selected: {selectedUser.name}</Text>
              <Text style={styles.resultDetail}>{selectedUser.email}</Text>
            </View>
          )}
        </View>

        {/* Disabled State */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disabled State</Text>
          <Dropdown
            data={fruits}
            value={null}
            onChange={() => {}}
            placeholder="This is disabled"
            disabled
            style={styles.dropdown}
          />
        </View>

        {/* Custom Styling */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Styling</Text>
          <Dropdown
            data={fruits}
            value={null}
            onChange={() => {}}
            placeholder="Styled dropdown"
            style={styles.styledDropdown}
            dropdownStyle={styles.styledDropdownMenu}
            itemStyle={styles.styledItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  dropdown: {
    backgroundColor: 'white',
  },
  result: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#e8f4f8',
    borderRadius: 8,
  },
  resultDetail: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  customItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  userDept: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  selected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  styledDropdown: {
    backgroundColor: '#4A90E2',
    borderWidth: 0,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  styledDropdownMenu: {
    borderRadius: 12,
    marginTop: 8,
  },
  styledItem: {
    paddingVertical: 14,
  },
});