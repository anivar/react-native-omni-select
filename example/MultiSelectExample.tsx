import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-omni-select';

type Tech = { label: string; value: string; category: string };

export const MultiSelectExample = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<Tech[]>([]);

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink'];

  const technologies: Tech[] = [
    { label: 'React Native', value: 'rn', category: 'Mobile' },
    { label: 'Flutter', value: 'flutter', category: 'Mobile' },
    { label: 'React', value: 'react', category: 'Web' },
    { label: 'Vue', value: 'vue', category: 'Web' },
    { label: 'Angular', value: 'angular', category: 'Web' },
    { label: 'Node.js', value: 'node', category: 'Backend' },
    { label: 'Django', value: 'django', category: 'Backend' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi-Select Examples</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Select Multiple Colors:</Text>
        <Dropdown<string>
          data={colors}
          value={selectedColors}
          onChange={(value) => setSelectedColors((value as string[]) ?? [])}
          multiple
          placeholder="Select colors"
        />
        {selectedColors.length > 0 && (
          <View style={styles.result}>
            <Text>Selected {selectedColors.length} colors:</Text>
            <Text style={styles.chips}>
              {selectedColors.join(' • ')}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Select Technologies:</Text>
        <Dropdown<Tech>
          data={technologies}
          value={selectedTech}
          onChange={(value) => setSelectedTech((value as Tech[]) ?? [])}
          multiple
          search
          searchPlaceholder="Search technologies..."
          placeholder="Select technologies"
        />
        {selectedTech.length > 0 && (
          <View style={styles.result}>
            <Text>Selected {selectedTech.length} technologies:</Text>
            {selectedTech.map((tech, index) => (
              <Text key={index} style={styles.techItem}>
                • {tech.label} ({tech.category})
              </Text>
            ))}
          </View>
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
  chips: {
    marginTop: 5,
    fontSize: 14,
    color: '#007AFF',
  },
  techItem: {
    marginTop: 3,
    fontSize: 14,
  },
});