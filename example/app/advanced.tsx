import { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function AdvancedExample() {
  const [tags, setTags] = useState<ITags>({ tag: '', tagsArray: [] });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Advanced Customization</Text>
          <Text style={styles.description}>
            Showcasing advanced styling, highlighting, and autocomplete
            features.
          </Text>

          <TagInput
            label="Skills & Technologies"
            tags={tags}
            updateState={setTags}
            keysForTag=","
            suggestions={[
              'React Native',
              'JavaScript',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'PostgreSQL',
              'GraphQL',
              'REST API',
              'iOS',
              'Android',
              'React',
              'Vue.js',
            ]}
            // Autocomplete customization
            maxSuggestions={4}
            highlightMatchedText={true}
            caseSensitive={false}
            showAutocompleteBorder={true}
            // Styling
            containerStyle={styles.tagInputContainer}
            inputStyle={styles.input}
            labelStyle={styles.label}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            autocompleteContainerStyle={styles.autocompleteContainer}
            autocompleteSuggestionItemStyle={styles.suggestionItem}
            autocompleteSuggestionTextStyle={styles.suggestionText}
          />

          <View style={styles.featuresBox}>
            <Text style={styles.featuresTitle}>Advanced Features:</Text>
            <Text style={styles.featureText}>
              🎯 Text highlighting in suggestions
            </Text>
            <Text style={styles.featureText}>
              🔍 Case-insensitive filtering
            </Text>
            <Text style={styles.featureText}>
              📊 Limited suggestions (max 4)
            </Text>
            <Text style={styles.featureText}>🎨 Comprehensive styling</Text>
            <Text style={styles.featureText}>
              💫 Shadow effects and elevation
            </Text>
            <Text style={styles.featureText}>⌨️ Comma separator</Text>
          </View>
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
    shadowOffset: { width: 0, height: 2 },
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
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  autocompleteContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    maxHeight: 200,
  },
  suggestionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
  },
  suggestionText: {
    fontSize: 15,
    color: '#333',
  },
  featuresBox: {
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 6,
    lineHeight: 20,
  },
});
