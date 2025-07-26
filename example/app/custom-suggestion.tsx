import { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function CustomSuggestionExample() {
  const [tags, setTags] = useState<ITags>({ tag: '', tagsArray: [] });

  const renderCustomSuggestion = (
    suggestion: string,
    index: number,
    isHighlighted: boolean,
    onPress: () => void
  ) => {
    return (
      <TouchableOpacity
        style={[
          styles.customSuggestion,
          isHighlighted && styles.highlightedSuggestion,
        ]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Select suggestion: ${suggestion}`}
      >
        <Text style={styles.emoji}>🏷️</Text>
        <Text style={styles.suggestionText}>{suggestion}</Text>
        <Text style={styles.badge}>#{index + 1}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Custom Suggestion Rendering</Text>
          <Text style={styles.description}>
            Complete control over suggestion item appearance with custom render
            function.
          </Text>

          <TagInput
            label="Choose Technologies"
            tags={tags}
            updateState={setTags}
            keysForTag=" "
            suggestions={[
              'React Native',
              'JavaScript',
              'TypeScript',
              'Node.js',
              'Python',
              'Swift',
              'Kotlin',
              'Flutter',
            ]}
            maxSuggestions={5}
            renderSuggestion={renderCustomSuggestion}
            containerStyle={styles.tagInputContainer}
            inputStyle={styles.input}
            labelStyle={styles.label}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            autocompleteContainerStyle={styles.autocompleteContainer}
          />

          <View style={styles.featuresBox}>
            <Text style={styles.featuresTitle}>Custom Rendering Features:</Text>
            <Text style={styles.featureText}>
              🎨 Complete visual control over suggestions
            </Text>
            <Text style={styles.featureText}>
              🖱️ Custom touch handling and accessibility
            </Text>
            <Text style={styles.featureText}>
              🏷️ Emoji icons and custom badges
            </Text>
            <Text style={styles.featureText}>
              ⚡ Highlight states for better UX
            </Text>
            <Text style={styles.featureText}>
              📱 Perfect for branded experiences
            </Text>
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
    backgroundColor: '#6f42c1',
    borderRadius: 16,
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
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  customSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  highlightedSuggestion: {
    backgroundColor: '#e3f2fd',
  },
  emoji: {
    fontSize: 16,
    marginRight: 8,
  },
  suggestionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#495057',
  },
  badge: {
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  featuresBox: {
    backgroundColor: '#f8f4ff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#6f42c1',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6f42c1',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 6,
    lineHeight: 20,
  },
});
