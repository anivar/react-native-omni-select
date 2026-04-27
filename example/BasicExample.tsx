import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-omni-select';

type Language = { label: string; value: string };

export const BasicExample = () => {
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];

  const languages: Language[] = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'Python', value: 'py' },
    { label: 'Ruby', value: 'rb' },
    { label: 'Go', value: 'go' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Examples</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Simple String Array:</Text>
        <Dropdown<string>
          data={fruits}
          value={selectedFruit}
          onChange={(value) => setSelectedFruit(value as string | null)}
          placeholder="Select a fruit"
        />
        {selectedFruit && (
          <Text style={styles.result}>You selected: {selectedFruit}</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Object Array:</Text>
        <Dropdown<Language>
          data={languages}
          value={selectedLanguage}
          onChange={(value) => setSelectedLanguage(value as Language | null)}
          placeholder="Select a language"
        />
        {selectedLanguage && (
          <Text style={styles.result}>
            You selected: {selectedLanguage.label} ({selectedLanguage.value})
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});