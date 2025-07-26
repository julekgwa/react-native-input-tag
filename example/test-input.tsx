import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TagInput } from 'react-native-input-tag';

// Simple test to verify TagInput is working
export default function TestInput() {
  const [tags, setTags] = React.useState({
    tag: '',
    tagsArray: [] as string[],
  });

  return (
    <View style={styles.container}>
      <Text>Simple Tag Input Test</Text>
      <TagInput
        tags={tags}
        updateState={setTags}
        keysForTag=" "
        placeholder="Type and press space to add tags"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
