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

export default function CustomDeleteExample() {
  const [tags, setTags] = useState<ITags>({
    tag: '',
    tagsArray: ['Feature', 'Bugfix', 'Enhancement'],
  });

  const renderCustomDeleteButton = (
    onDelete: () => void,
    tag: string,
    _index: number
  ) => (
    <TouchableOpacity
      style={styles.deleteBtn}
      onPress={onDelete}
      accessibilityRole="button"
      accessibilityLabel={`Remove tag: ${tag}`}
    >
      <Text style={styles.deleteIcon}>🗑️</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Custom Delete Button</Text>
          <Text style={styles.description}>
            Customize only the delete button while keeping default tag styling.
          </Text>

          <TagInput
            label="Project Tags"
            tags={tags}
            updateState={setTags}
            keysForTag=" "
            suggestions={[
              'feature',
              'bugfix',
              'enhancement',
              'documentation',
              'testing',
              'refactor',
              'performance',
              'security',
            ]}
            maxSuggestions={4}
            renderDeleteButton={renderCustomDeleteButton}
            containerStyle={styles.tagInputContainer}
            inputStyle={styles.input}
            labelStyle={styles.label}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
          />

          <View style={styles.featuresBox}>
            <Text style={styles.featuresTitle}>Custom Delete Benefits:</Text>
            <Text style={styles.featureText}>
              🎯 Targeted customization - only the delete button
            </Text>
            <Text style={styles.featureText}>
              🔄 Easy integration with existing styles
            </Text>
            <Text style={styles.featureText}>
              📱 Consistent UX across your app
            </Text>
            <Text style={styles.featureText}>
              ⚡ Better performance than full tag rendering
            </Text>
            <Text style={styles.featureText}>
              🎨 Custom icons, colors, and animations
            </Text>
            <Text style={styles.featureText}>
              ♿ Enhanced accessibility support
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
    backgroundColor: '#6c757d',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  deleteIcon: {
    fontSize: 12,
  },
  featuresBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#6c757d',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 6,
    lineHeight: 20,
  },
});
