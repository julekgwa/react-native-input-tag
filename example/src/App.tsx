import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';
import React from 'react';

export default function App() {
  const [tags, updateState] = React.useState<ITags>({ tag: '', tagsArray: [] });
  const [customTags, updateCustomState] = React.useState<ITags>({
    tag: '',
    tagsArray: ['custom', 'styled'],
  });
  const [deleteButtonTags, updateDeleteButtonState] = React.useState<ITags>({
    tag: '',
    tagsArray: ['delete', 'button', 'demo'],
  });

  // Custom suggestion renderer
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
        <Text style={styles.suggestionEmoji}>🏷️</Text>
        <Text style={styles.customSuggestionText}>{suggestion}</Text>
        <Text style={styles.suggestionIndex}>#{index + 1}</Text>
      </TouchableOpacity>
    );
  };

  // Custom delete button renderer
  const renderCustomDeleteButton = (
    onDelete: () => void,
    tag: string,
    _index: number
  ) => {
    return (
      <TouchableOpacity
        style={styles.customDeleteBtn}
        onPress={onDelete}
        accessibilityRole="button"
        accessibilityLabel={`Remove tag: ${tag}`}
      >
        <Text style={styles.customDeleteIcon}>🗑️</Text>
      </TouchableOpacity>
    );
  };

  // Custom tag renderer
  const renderCustomTag = (
    tag: string,
    index: number,
    onDelete: () => void
  ) => {
    return (
      <View style={styles.customTag} key={index}>
        <Text style={styles.customTagEmoji}>✨</Text>
        <Text style={styles.customTagText}>{tag}</Text>
        <TouchableOpacity
          style={styles.customDeleteButton}
          onPress={onDelete}
          accessibilityRole="button"
          accessibilityLabel={`Delete tag: ${tag}`}
        >
          <Text style={styles.customDeleteText}>×</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TagInput
        label="Enter your tags (press ; to add)"
        inputStyle={styles.tagInputStyle}
        keysForTag=";"
        tags={tags}
        labelStyle={styles.labelStyle}
        tagStyle={styles.tagViewStyle}
        updateState={updateState}
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
        maxSuggestions={3}
        highlightMatchedText={true}
        caseSensitive={false}
        autocompleteContainerStyle={styles.autocompleteContainer}
        renderSuggestion={renderCustomSuggestion}
      />

      <TagInput
        label="Custom Tag Rendering (press ; to add)"
        inputStyle={styles.tagInputStyle}
        keysForTag=";"
        tags={customTags}
        labelStyle={styles.labelStyle}
        updateState={updateCustomState}
        suggestions={[
          'design',
          'ui',
          'ux',
          'creative',
          'innovation',
          'prototype',
          'mockup',
          'wireframe',
        ]}
        maxSuggestions={2}
        renderTag={renderCustomTag}
        containerStyle={styles.customTagContainer}
      />

      <Button
        title="Clear All Tags"
        onPress={() => updateState({ tag: '', tagsArray: [] })}
      />
      <Button
        title="Clear Custom Tags"
        onPress={() => updateCustomState({ tag: '', tagsArray: [] })}
      />

      <TagInput
        label="Custom Delete Button (press ; to add)"
        inputStyle={styles.tagInputStyle}
        keysForTag=";"
        tags={deleteButtonTags}
        labelStyle={styles.labelStyle}
        updateState={updateDeleteButtonState}
        suggestions={[
          'feature',
          'bugfix',
          'enhancement',
          'documentation',
          'testing',
        ]}
        maxSuggestions={3}
        renderDeleteButton={renderCustomDeleteButton}
        containerStyle={styles.deleteButtonContainer}
        tagStyle={styles.deleteButtonTag}
      />

      <Button
        title="Clear Delete Button Tags"
        onPress={() => updateDeleteButtonState({ tag: '', tagsArray: [] })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#C8A165',
    minHeight: 12,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  tagInputStyle: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  labelStyle: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
  tagViewStyle: {
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
    borderRadius: 16,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 8,
  },
  customSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  highlightedSuggestion: {
    backgroundColor: '#e3f2fd',
  },
  suggestionEmoji: {
    fontSize: 16,
    marginRight: 8,
  },
  customSuggestionText: {
    flex: 1,
    fontSize: 15,
    color: '#495057',
    fontWeight: '500',
  },
  suggestionIndex: {
    fontSize: 12,
    color: '#6c757d',
    backgroundColor: '#e9ecef',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  customTagContainer: {
    marginTop: 20,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  customTagEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  customTagText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  customDeleteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDeleteText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButtonContainer: {
    marginTop: 20,
  },
  deleteButtonTag: {
    backgroundColor: '#6c757d',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  customDeleteBtn: {
    backgroundColor: '#C8A165',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  customDeleteIcon: {
    fontSize: 12,
  },
});
