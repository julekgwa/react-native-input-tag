# react-native-input-tag

[![npm version](https://badge.fury.io/js/react-native-input-tag.svg?icon=si%3Anpm)](https://badge.fury.io/js/react-native-input-tag) [![npm downloads](https://img.shields.io/npm/dm/react-native-input-tag.svg)](https://www.npmjs.com/package/react-native-input-tag) [![GitHub stars](https://img.shields.io/github/stars/julekgwa/react-native-input-tag.svg?style=social&label=Star)](https://github.com/julekgwa/react-native-input-tag) [![GitHub license](https://img.shields.io/github/license/julekgwa/react-native-input-tag.svg)](https://github.com/julekgwa/react-native-input-tag/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/julekgwa/react-native-input-tag.svg)](https://github.com/julekgwa/react-native-input-tag/issues) [![GitHub forks](https://img.shields.io/github/forks/julekgwa/react-native-input-tag.svg)](https://github.com/julekgwa/react-native-input-tag/network) [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/) [![React Native](https://img.shields.io/badge/React%20Native-0.79+-green.svg)](https://reactnative.dev/) [![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey.svg)](https://reactnative.dev/) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-native-input-tag)](https://bundlephobia.com/package/react-native-input-tag) [![Expo Snack](https://img.shields.io/badge/Expo-Snack%20Demo-4630EB.svg?style=flat&logo=expo&logoColor=white)](https://snack.expo.dev/@lekgwaraj/react-native-input-tag) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/julekgwa/react-native-input-tag/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/julekgwa/react-native-input-tag/pulls)

Versatile and user-friendly component designed to simplify the process of entering and managing tags within a React Native application.

## Installation

```sh
bun add react-native-input-tag
```

## Demo

<p align="center">
  <img src="./misc/demo.gif" alt="React Native Input Tags Demo" width="300"/>
</p>

> 📱 **Interactive Demo**: Check out the [example app](./example) to see all features in action!

### 🚀 Try it online

**[📱 Live Demo on Expo Snack](https://snack.expo.dev/@lekgwaraj/react-native-input-tag)**

Try the component directly in your browser or on your device with Expo Go!

> 💡 **Snack Example**: Check out [`example/SnackExample.js`](./example/SnackExample.js) for a complete React Navigation-based demo that works perfectly in Snack with all features showcased across 8 different screens.

### 🎮 Example App with All Features

The example app showcases all TagInput features with expo-router navigation:

```bash
cd example
npm install --legacy-peer-deps
expo start
```

**Example App Features:**
- 📝 Basic Usage
- 🎨 Advanced Customization
- 💡 Custom Suggestion Rendering
- 🏷️ Custom Tag Rendering
- 🗑️ Custom Delete Button
- 📋 Formik + Yup Integration
- 🎣 React Hook Form Integration
- ⚙️ Advanced Form Validation

Each example is on a separate screen with detailed explanations and interactive demos.

## Table of Contents

- [react-native-input-tag](#react-native-input-tag)
  - [Installation](#installation)
  - [Demo](#demo)
    - [🚀 Try it online](#-try-it-online)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [Features](#features)
    - [🎯 Core Features](#-core-features)
    - [🎨 Customization \& Styling](#-customization--styling)
    - [🚀 Developer Experience](#-developer-experience)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Advanced Customization](#advanced-customization)
    - [Custom Suggestion Rendering](#custom-suggestion-rendering)
    - [Custom Tag Rendering](#custom-tag-rendering)
    - [Custom Delete Button](#custom-delete-button)
  - [Form Integration Examples](#form-integration-examples)
    - [Using with Formik + Yup](#using-with-formik--yup)
    - [Using with React Hook Form](#using-with-react-hook-form)
    - [Advanced Form Integration with Custom Validation](#advanced-form-integration-with-custom-validation)
  - [API](#api)
    - [Props](#props)
      - [Core Props](#core-props)
      - [Styling Props](#styling-props)
      - [Autocomplete Customization Props](#autocomplete-customization-props)
      - [Element Props](#element-props)
    - [Methods](#methods)
  - [Contributing](#contributing)
    - [Development Setup](#development-setup)
    - [Code of Conduct](#code-of-conduct)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)
  - [Stats](#stats)

## Quick Start

Get up and running in under 2 minutes:

```bash
# Install the package
bun add react-native-input-tag

# Import and use in your component
import { TagInput } from 'react-native-input-tag';
```

```tsx
const [tags, updateState] = useState({ tag: '', tagsArray: [] });

<TagInput
  tags={tags}
  updateState={updateState}
  suggestions={['React', 'TypeScript', 'Mobile']}
/>
```

**🎮 Want to try it first?** → **[Open Interactive Demo](https://snack.expo.dev/@lekgwaraj/react-native-input-tag)**

## Features

### 🎯 Core Features
- 📝 **Easy tag input and management** - Simple and intuitive API
- 🔍 **Fully customizable autocomplete** - Advanced filtering with highlighting
- 🎨 **Complete custom rendering** - Support for suggestions, tags, and delete buttons
- ⌨️ **Customizable key separators** - Space, comma, semicolon, or any character
- ♿ **Full accessibility support** - Screen reader friendly with proper ARIA labels

### 🎨 Customization & Styling
- 🎯 **Extensive styling options** - Style every component independently
- 💡 **Text highlighting** - Highlight matched text in suggestions
- 📊 **Configurable suggestion limits** - Control autocomplete behavior
- 🔤 **Case-sensitive/insensitive** - Flexible filtering options

### 🚀 Developer Experience
- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🚀 **Complete TypeScript support** - Full type safety and IntelliSense
- 📖 **Comprehensive documentation** - Detailed examples and API reference
- 🧪 **Well tested** - Extensive test coverage for reliability


## Usage

### Basic Usage

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function App() {
  const [tags, updateState] = useState<ITags>({ tag: '', tagsArray: [] });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TagInput
        label="Enter Tags"
        tags={tags}
        updateState={updateState}
        keysForTag=";" // Use semicolon to separate tags
        suggestions={['React', 'Native', 'JavaScript', 'TypeScript']}
        inputStyle={{ backgroundColor: '#f0f0f0', borderRadius: 8 }}
        tagStyle={{ backgroundColor: '#007bff', borderRadius: 12 }}
        tagTextStyle={{ color: 'white' }}
      />
    </View>
  );
}
```

### Advanced Customization

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function AdvancedExample() {
  const [tags, updateState] = useState<ITags>({ tag: '', tagsArray: [] });

  return (
    <View style={styles.container}>
      <TagInput
        label="Skills & Technologies"
        tags={tags}
        updateState={updateState}
        keysForTag=","
        suggestions={[
          'React Native', 'JavaScript', 'TypeScript', 'Node.js',
          'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API',
          'iOS', 'Android', 'React', 'Vue.js'
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
});
```

### Custom Suggestion Rendering

For maximum flexibility, you can provide a custom render function for suggestion items. The `renderSuggestion` function receives the `onPress` callback, giving you complete control over how and when the suggestion is selected:

```tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function CustomRenderExample() {
  const [tags, updateState] = useState<ITags>({ tag: '', tagsArray: [] });

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
          isHighlighted && styles.highlighted,
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
    <TagInput
      tags={tags}
      updateState={updateState}
      suggestions={['React', 'JavaScript', 'TypeScript']}
      renderSuggestion={renderCustomSuggestion}
      autocompleteContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
  },
  customSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  highlighted: {
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
});
```

**Key Benefits:**
- ✅ **Complete control**: Render any React component structure
- ✅ **Avoid nested touchables**: You handle the touch events directly
- ✅ **Custom interactions**: Add buttons, swipe actions, or complex gestures
- ✅ **Type safety**: Full TypeScript support with proper parameter types
- ✅ **Accessibility**: Add custom accessibility props as needed

### Custom Tag Rendering

You can also customize how individual tags are rendered using the `renderTag` prop:

```tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function CustomTagExample() {
  const [tags, updateState] = useState<ITags>({
    tag: '',
    tagsArray: ['Design', 'Development']
  });

  const renderCustomTag = (
    tag: string,
    index: number,
    onDelete: () => void
  ) => (
    <View style={styles.customTag}>
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
    <TagInput
      tags={tags}
      updateState={updateState}
      renderTag={renderCustomTag}
    />
  );
}

const styles = StyleSheet.create({
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
});
```

**Custom Tag Benefits:**
- 🎨 **Unique styling**: Create tags that match your app's design
- 🔧 **Custom actions**: Add multiple buttons or gestures to each tag
- 📊 **Dynamic content**: Show additional information like counts or status
- ♿ **Enhanced accessibility**: Custom accessibility labels and roles

### Custom Delete Button

For even more granular control, you can customize just the delete button while keeping the default tag styling:

```tsx
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TagInput, type ITags } from 'react-native-input-tag';

export default function CustomDeleteExample() {
  const [tags, updateState] = useState<ITags>({
    tag: '',
    tagsArray: ['Design', 'Development']
  });

  const renderCustomDeleteButton = (
    onDelete: () => void,
    tag: string,
    index: number
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
    <TagInput
      tags={tags}
      updateState={updateState}
      renderDeleteButton={renderCustomDeleteButton}
      tagStyle={styles.tag}
    />
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  deleteIcon: {
    fontSize: 10,
  },
});
```

**Custom Delete Button Benefits:**
- 🎯 **Targeted customization**: Change only the delete button, keep tag styling
- 🔄 **Easy integration**: Works with existing tag styles
- 📱 **Consistent UX**: Maintain app-wide delete button patterns
- ⚡ **Performance**: Lighter than full custom tag rendering

## Form Integration Examples

### Using with Formik + Yup

Here's how to integrate TagInput with Formik for form validation:

```tsx
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TagInput, type ITags } from 'react-native-input-tag';

// Validation schema
const validationSchema = Yup.object().shape({
  skills: Yup.array()
    .of(Yup.string().required())
    .min(1, 'At least one skill is required')
    .max(10, 'Maximum 10 skills allowed'),
  interests: Yup.array()
    .of(Yup.string().required())
    .min(2, 'At least two interests are required'),
});

const FormikExample = () => {
  const skillSuggestions = [
    'React Native', 'JavaScript', 'TypeScript', 'Node.js',
    'Python', 'Java', 'Swift', 'Kotlin', 'Flutter', 'React'
  ];

  const interestSuggestions = [
    'Mobile Development', 'Web Development', 'AI/ML', 'Blockchain',
    'Game Development', 'DevOps', 'UI/UX Design', 'Data Science'
  ];

  return (
    <Formik
      initialValues={{
        skills: { tag: '', tagsArray: [] },
        interests: { tag: '', tagsArray: [] },
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', {
          skills: values.skills.tagsArray,
          interests: values.interests.tagsArray,
        });
      }}
    >
      {({ values, setFieldValue, errors, touched, handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Profile Setup</Text>

          {/* Skills Input */}
          <View style={styles.fieldContainer}>
            <TagInput
              label="Skills *"
              tags={values.skills}
              updateState={(newTags) => setFieldValue('skills', newTags)}
              suggestions={skillSuggestions}
              keysForTag=" "
              maxSuggestions={5}
              highlightMatchedText={true}
              containerStyle={[
                styles.tagInput,
                errors.skills && touched.skills && styles.errorBorder
              ]}
              labelStyle={styles.label}
              placeholder="Type your skills and press space"
            />
            {errors.skills && touched.skills && (
              <Text style={styles.errorText}>
                {Array.isArray(errors.skills) ? errors.skills[0] : errors.skills}
              </Text>
            )}
          </View>

          {/* Interests Input */}
          <View style={styles.fieldContainer}>
            <TagInput
              label="Interests *"
              tags={values.interests}
              updateState={(newTags) => setFieldValue('interests', newTags)}
              suggestions={interestSuggestions}
              keysForTag=","
              maxSuggestions={4}
              caseSensitive={false}
              containerStyle={[
                styles.tagInput,
                errors.interests && touched.interests && styles.errorBorder
              ]}
              labelStyle={styles.label}
              placeholder="Type your interests and press comma"
            />
            {errors.interests && touched.interests && (
              <Text style={styles.errorText}>
                {Array.isArray(errors.interests) ? errors.interests[0] : errors.interests}
              </Text>
            )}
          </View>

          <Button title="Submit Profile" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
```

### Using with React Hook Form

Here's how to integrate TagInput with React Hook Form:

```tsx
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TagInput, type ITags } from 'react-native-input-tag';

// Validation schema
const schema = Yup.object().shape({
  technologies: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one technology')
    .max(8, 'Maximum 8 technologies allowed'),
  frameworks: Yup.array()
    .of(Yup.string().required())
    .min(1, 'Please select at least one framework'),
});

type FormData = {
  technologies: string[];
  frameworks: string[];
};

const ReactHookFormExample = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      technologies: [],
      frameworks: [],
    },
  });

  const techSuggestions = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Swift',
    'Kotlin', 'Dart', 'Go', 'Rust', 'C++', 'PHP', 'Ruby'
  ];

  const frameworkSuggestions = [
    'React Native', 'React', 'Vue.js', 'Angular', 'Flutter',
    'Ionic', 'Xamarin', 'Cordova', 'NativeScript', 'Expo'
  ];

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tech Stack Survey</Text>

      {/* Technologies Field */}
      <View style={styles.fieldContainer}>
        <Controller
          control={control}
          name="technologies"
          render={({ field: { onChange, value } }) => (
            <TagInput
              label="Programming Languages *"
              tags={{
                tag: '',
                tagsArray: value || [],
              }}
              updateState={(newTags) => onChange(newTags.tagsArray)}
              suggestions={techSuggestions}
              keysForTag=" "
              maxSuggestions={6}
              highlightMatchedText={true}
              caseSensitive={false}
              containerStyle={[
                styles.tagInput,
                errors.technologies && styles.errorBorder
              ]}
              labelStyle={styles.label}
              tagStyle={styles.techTag}
              placeholder="Type languages and press space"
            />
          )}
        />
        {errors.technologies && (
          <Text style={styles.errorText}>{errors.technologies.message}</Text>
        )}
      </View>

      {/* Frameworks Field */}
      <View style={styles.fieldContainer}>
        <Controller
          control={control}
          name="frameworks"
          render={({ field: { onChange, value } }) => (
            <TagInput
              label="Frameworks & Libraries *"
              tags={{
                tag: '',
                tagsArray: value || [],
              }}
              updateState={(newTags) => onChange(newTags.tagsArray)}
              suggestions={frameworkSuggestions}
              keysForTag=","
              maxSuggestions={5}
              highlightMatchedText={true}
              containerStyle={[
                styles.tagInput,
                errors.frameworks && styles.errorBorder
              ]}
              labelStyle={styles.label}
              tagStyle={styles.frameworkTag}
              placeholder="Type frameworks and press comma"
            />
          )}
        />
        {errors.frameworks && (
          <Text style={styles.errorText}>{errors.frameworks.message}</Text>
        )}
      </View>

      <Button title="Submit Survey" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  tagInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  errorBorder: {
    borderColor: '#ff4444',
    borderWidth: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  errorText: {
    color: '#ff4444',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  techTag: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
  },
  frameworkTag: {
    backgroundColor: '#2196F3',
    borderRadius: 16,
  },
});
```

### Advanced Form Integration with Custom Validation

Here's an example with custom validation logic and conditional rendering:

```tsx
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TagInput, type ITags } from 'react-native-input-tag';

type ProjectFormData = {
  projectTags: string[];
  requiredSkills: string[];
  optionalSkills: string[];
};

const AdvancedFormExample = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm<ProjectFormData>({
    defaultValues: {
      projectTags: [],
      requiredSkills: [],
      optionalSkills: [],
    },
  });

  const watchedRequiredSkills = watch('requiredSkills');

  // Custom validation function
  const validateSkillsOverlap = (optionalSkills: string[], requiredSkills: string[]) => {
    const overlap = optionalSkills.filter(skill => requiredSkills.includes(skill));
    return overlap.length === 0;
  };

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);

    // Custom validation
    if (!validateSkillsOverlap(data.optionalSkills, data.requiredSkills)) {
      setError('optionalSkills', {
        type: 'manual',
        message: 'Optional skills cannot overlap with required skills'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('Success', 'Project created successfully!');
      console.log('Project Data:', data);
    } catch (error) {
      Alert.alert('Error', 'Failed to create project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectSuggestions = [
    'mobile-app', 'web-app', 'api', 'database', 'frontend',
    'backend', 'fullstack', 'mvp', 'prototype', 'production'
  ];

  const skillSuggestions = [
    'React Native', 'React', 'Node.js', 'TypeScript', 'JavaScript',
    'Python', 'Java', 'Swift', 'Kotlin', 'Flutter', 'Vue.js',
    'Angular', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Project</Text>

      <Controller
        control={control}
        name="projectTags"
        rules={{
          validate: (value) =>
            value.length >= 2 || 'Please add at least 2 project tags'
        }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.fieldContainer}>
            <TagInput
              label="Project Tags"
              tags={{ tag: '', tagsArray: value }}
              updateState={(newTags) => onChange(newTags.tagsArray)}
              suggestions={projectSuggestions}
              keysForTag=" "
              maxSuggestions={4}
              containerStyle={[
                styles.tagInput,
                errors.projectTags && styles.errorBorder
              ]}
              placeholder="Add project tags..."
            />
            {errors.projectTags && (
              <Text style={styles.errorText}>{errors.projectTags.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="requiredSkills"
        rules={{
          validate: (value) =>
            value.length >= 1 || 'Please specify at least 1 required skill'
        }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.fieldContainer}>
            <TagInput
              label="Required Skills"
              tags={{ tag: '', tagsArray: value }}
              updateState={(newTags) => {
                onChange(newTags.tagsArray);
                clearErrors('optionalSkills'); // Clear overlap error when required skills change
              }}
              suggestions={skillSuggestions}
              keysForTag=","
              maxSuggestions={5}
              containerStyle={[
                styles.tagInput,
                errors.requiredSkills && styles.errorBorder
              ]}
              tagStyle={styles.requiredTag}
              placeholder="Add required skills..."
            />
            {errors.requiredSkills && (
              <Text style={styles.errorText}>{errors.requiredSkills.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="optionalSkills"
        render={({ field: { onChange, value } }) => (
          <View style={styles.fieldContainer}>
            <TagInput
              label="Optional Skills"
              tags={{ tag: '', tagsArray: value }}
              updateState={(newTags) => {
                onChange(newTags.tagsArray);
                // Clear error when user modifies optional skills
                if (errors.optionalSkills) {
                  clearErrors('optionalSkills');
                }
              }}
              suggestions={skillSuggestions.filter(skill => !watchedRequiredSkills.includes(skill))}
              keysForTag=","
              maxSuggestions={5}
              containerStyle={[
                styles.tagInput,
                errors.optionalSkills && styles.errorBorder
              ]}
              tagStyle={styles.optionalTag}
              placeholder="Add optional skills..."
            />
            {errors.optionalSkills && (
              <Text style={styles.errorText}>{errors.optionalSkills.message}</Text>
            )}
          </View>
        )}
      />

      <Button
        title={isSubmitting ? "Creating..." : "Create Project"}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#212529',
  },
  fieldContainer: {
    marginBottom: 25,
  },
  tagInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dee2e6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  errorBorder: {
    borderColor: '#dc3545',
    borderWidth: 2,
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 8,
    marginLeft: 4,
    fontWeight: '500',
  },
  requiredTag: {
    backgroundColor: '#dc3545',
    borderRadius: 20,
  },
  optionalTag: {
    backgroundColor: '#6c757d',
    borderRadius: 20,
  },
});

export { FormikExample, ReactHookFormExample, AdvancedFormExample };
```

**Form Integration Benefits:**
- ✅ **Seamless validation**: Works with popular validation libraries
- ✅ **Error handling**: Proper error states and messaging
- ✅ **Type safety**: Full TypeScript support with form libraries
- ✅ **Custom validation**: Support for complex validation logic
- ✅ **Real-time feedback**: Immediate validation and suggestions

## API

### Props

#### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tags` | `ITags` | required | Current tags state object |
| `updateState` | `(tags: ITags) => void` | required | Function to update tags state |
| `label` | `string` | optional | Label text displayed above input |
| `keysForTag` | `string` | `' '` | Character(s) used to separate tags |
| `suggestions` | `string[]` | optional | Array of suggestion strings for autocomplete |
| `disabled` | `boolean` | `false` | Whether the input is disabled |

#### Styling Props

| Prop | Type | Description |
|------|------|-------------|
| `containerStyle` | `StyleProp<ViewStyle>` | Style for the main container |
| `inputContainerStyle` | `StyleProp<ViewStyle>` | Style for the input container |
| `inputStyle` | `StyleProp<TextStyle>` | Style for the text input |
| `labelStyle` | `StyleProp<TextStyle>` | Style for the label text |
| `tagStyle` | `StyleProp<ViewStyle>` | Style for individual tag containers |
| `tagTextStyle` | `StyleProp<TextStyle>` | Style for tag text |
| `tagsViewStyle` | `StyleProp<ViewStyle>` | Style for the tags container |
| `deleteIconStyles` | `StyleProp<ImageStyle>` | Style for delete icons |

#### Autocomplete Customization Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxSuggestions` | `number` | `5` | Maximum number of suggestions to show |
| `caseSensitive` | `boolean` | `false` | Whether suggestion filtering is case sensitive |
| `highlightMatchedText` | `boolean` | `false` | Whether to highlight matched text in suggestions |
| `showAutocompleteBorder` | `boolean` | `true` | Whether to show borders between suggestions |
| `autocompleteContainerStyle` | `StyleProp<ViewStyle>` | Style for autocomplete dropdown container |
| `autocompleteSuggestionItemStyle` | `StyleProp<ViewStyle>` | Style for individual suggestion items |
| `autocompleteSuggestionTextStyle` | `StyleProp<TextStyle>` | Style for suggestion text |
| `renderSuggestion` | `(suggestion: string, index: number, isHighlighted: boolean, onPress: () => void) => ReactNode` | Custom render function for suggestion items |
| `renderTag` | `(tag: string, index: number, onDelete: () => void) => ReactNode` | Custom render function for tag items |
| `renderDeleteButton` | `(onDelete: () => void, tag: string, index: number) => ReactNode` | Custom render function for delete button only |

#### Element Props

| Prop | Type | Description |
|------|------|-------------|
| `leftElement` | `React.ReactElement` | Custom element to show on the left side |
| `rightElement` | `React.ReactElement` | Custom element to show on the right side |
| `customElement` | `React.ReactElement` | Custom element to show below input |
| `leftElementContainerStyle` | `StyleProp<ViewStyle>` | Style for left element container |
| `rightElementContainerStyle` | `StyleProp<ViewStyle>` | Style for right element container |

### Methods

The TagInput component provides several methods that can be accessed via ref:

- `focus()` - Focus the input
- `blur()` - Blur the input
- `clear()` - Clear the input text
- `isFocused()` - Check if input is focused
- `setNativeProps(props)` - Set native props on input

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/julekgwa/react-native-input-tag.git
cd react-native-input-tag

# Install dependencies
yarn install

# Run the example app
yarn example ios
# or
yarn example android

# Run tests
yarn test

# Run linting
yarn lint

# Build the package
yarn prepare
```

### Code of Conduct

This project adheres to the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Acknowledgments

This project was inspired by [react-native-input-tag](https://github.com/jimmybengtsson/react-native-input-tag) by Jimmy Bengtsson. We've built upon the foundational concept to create a more feature-rich and customizable tag input solution.

## License

MIT © [Junius Lekgwara](https://github.com/julekgwa)

## Stats

![GitHub Repo stars](https://img.shields.io/github/stars/julekgwa/react-native-input-tag?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/julekgwa/react-native-input-tag?style=social)
![GitHub followers](https://img.shields.io/github/followers/julekgwa?style=social)

---
<p align="center">
  <sub>Built with <a href="https://github.com/callstack/react-native-builder-bob">create-react-native-library</a></sub>
</p>
