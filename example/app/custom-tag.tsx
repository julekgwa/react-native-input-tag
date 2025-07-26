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

export default function CustomTagExample() {
  const [tags, setTags] = useState<ITags>({
    tag: '',
    tagsArray: ['Design', 'Development'],
  });

  const renderCustomTag = (
    tag: string,
    index: number,
    onDelete: () => void
  ) => (
    <View style={styles.customTag} key={index}>
      <Text style={styles.tagEmoji}>✨</Text>
      <Text style={styles.tagText}>{tag}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        accessibilityRole="button"
        accessibilityLabel={`Delete tag: ${tag}`}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Custom Tag Rendering</Text>
          <Text style={styles.description}>
            Complete customization of tag appearance with your own render
            function.
          </Text>

          <TagInput
            label="Creative Tags"
            tags={tags}
            updateState={setTags}
            keysForTag=" "
            suggestions={[
              'design',
              'ui',
              'ux',
              'creative',
              'innovation',
              'prototype',
              'mockup',
              'wireframe',
              'branding',
              'illustration',
            ]}
            maxSuggestions={4}
            renderTag={renderCustomTag}
            containerStyle={styles.tagInputContainer}
            inputStyle={styles.input}
            labelStyle={styles.label}
          />

          <View style={styles.featuresBox}>
            <Text style={styles.featuresTitle}>Custom Tag Benefits:</Text>
            <Text style={styles.featureText}>
              🎨 Unique styling that matches your brand
            </Text>
            <Text style={styles.featureText}>
              🔧 Custom actions like multiple buttons
            </Text>
            <Text style={styles.featureText}>
              📊 Dynamic content with counts or status
            </Text>
            <Text style={styles.featureText}>
              ♿ Enhanced accessibility labels
            </Text>
            <Text style={styles.featureText}>
              ✨ Animations and special effects
            </Text>
            <Text style={styles.featureText}>
              🎯 Perfect control over user interactions
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
  customTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tagEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresBox: {
    backgroundColor: '#fff5f5',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b6b',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc2626',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 6,
    lineHeight: 20,
  },
});
