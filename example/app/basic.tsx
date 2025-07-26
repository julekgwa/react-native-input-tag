import { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function BasicExample() {
  const [tags, setTags] = useState<ITags>({ tag: '', tagsArray: [] });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Basic Usage</Text>
          <Text style={styles.description}>
            A simple tag input with basic configuration. Press semicolon to add
            tags.
          </Text>

          <TagInput
            label="Enter your tags (press ; to add)"
            tags={tags}
            updateState={setTags}
            keysForTag=";"
            suggestions={[
              'react',
              'react-native',
              'javascript',
              'typescript',
              'mobile',
              'development',
              'programming',
              'frontend',
              'backend',
              'fullstack',
            ]}
            inputStyle={styles.input}
            labelStyle={styles.label}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            containerStyle={styles.tagInputContainer}
          />

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Features in this example:</Text>
            <Text style={styles.infoText}>• Basic tag input functionality</Text>
            <Text style={styles.infoText}>• Autocomplete suggestions</Text>
            <Text style={styles.infoText}>
              • Custom key separator (semicolon)
            </Text>
            <Text style={styles.infoText}>• Simple styling</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 30,
    lineHeight: 24,
  },
  tagInputContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#007bff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  infoBox: {
    backgroundColor: '#e9f7ff',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0056b3',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
  },
});
