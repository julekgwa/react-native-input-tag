import { useState } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TagInput } from 'react-native-input-tag';

type ProjectFormData = {
  projectTags: string[];
  requiredSkills: string[];
  optionalSkills: string[];
};

export default function AdvancedFormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Local state to manage current input text for each field
  const [projectTagText, setProjectTagText] = useState('');
  const [requiredSkillText, setRequiredSkillText] = useState('');
  const [optionalSkillText, setOptionalSkillText] = useState('');

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<ProjectFormData>({
    defaultValues: {
      projectTags: [],
      requiredSkills: [],
      optionalSkills: [],
    },
  });

  const watchedRequiredSkills = watch('requiredSkills');

  const validateSkillsOverlap = (
    optionalSkills: string[],
    requiredSkills: string[]
  ) => {
    const overlap = optionalSkills.filter((skill) =>
      requiredSkills.includes(skill)
    );
    return overlap.length === 0;
  };

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);

    if (!validateSkillsOverlap(data.optionalSkills, data.requiredSkills)) {
      setError('optionalSkills', {
        type: 'manual',
        message: 'Optional skills cannot overlap with required skills',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      Alert.alert('Success', 'Project created successfully!');
      console.log('Project Data:', data);
    } catch (err) {
      console.error('Project creation failed:', err);
      Alert.alert('Error', 'Failed to create project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectSuggestions = [
    'mobile-app',
    'web-app',
    'api',
    'database',
    'frontend',
    'backend',
    'fullstack',
    'mvp',
    'prototype',
    'production',
  ];

  const skillSuggestions = [
    'React Native',
    'React',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'Swift',
    'Kotlin',
    'Flutter',
    'Vue.js',
    'Angular',
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'AWS',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Advanced Form Integration</Text>
          <Text style={styles.description}>
            Complex form with custom validation logic and conditional rendering.
          </Text>

          <Controller
            control={control}
            name="projectTags"
            rules={{
              validate: (value) =>
                value.length >= 2 || 'Please add at least 2 project tags',
            }}
            render={({ field: { onChange, value } }) => (
              <View style={styles.fieldContainer}>
                <TagInput
                  label="Project Tags"
                  tags={{ tag: projectTagText, tagsArray: value }}
                  updateState={(newTags) => {
                    setProjectTagText(newTags.tag);
                    onChange(newTags.tagsArray);
                  }}
                  suggestions={projectSuggestions}
                  keysForTag=" "
                  maxSuggestions={4}
                  containerStyle={[
                    styles.tagInput,
                    errors.projectTags && styles.errorBorder,
                  ]}
                  labelStyle={styles.label}
                  tagStyle={styles.projectTag}
                  tagTextStyle={styles.tagText}
                  inputStyle={styles.input}
                  placeholder="Add project tags..."
                />
                {errors.projectTags && (
                  <Text style={styles.errorText}>
                    {errors.projectTags.message}
                  </Text>
                )}
              </View>
            )}
          />

          <Controller
            control={control}
            name="requiredSkills"
            rules={{
              validate: (value) =>
                value.length >= 1 || 'Please specify at least 1 required skill',
            }}
            render={({ field: { onChange, value } }) => (
              <View style={styles.fieldContainer}>
                <TagInput
                  label="Required Skills"
                  tags={{ tag: requiredSkillText, tagsArray: value }}
                  updateState={(newTags) => {
                    setRequiredSkillText(newTags.tag);
                    onChange(newTags.tagsArray);
                    clearErrors('optionalSkills');
                  }}
                  suggestions={skillSuggestions}
                  keysForTag=","
                  maxSuggestions={5}
                  containerStyle={[
                    styles.tagInput,
                    errors.requiredSkills && styles.errorBorder,
                  ]}
                  labelStyle={styles.label}
                  tagStyle={styles.requiredTag}
                  tagTextStyle={styles.tagText}
                  inputStyle={styles.input}
                  placeholder="Add required skills..."
                />
                {errors.requiredSkills && (
                  <Text style={styles.errorText}>
                    {errors.requiredSkills.message}
                  </Text>
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
                  tags={{ tag: optionalSkillText, tagsArray: value }}
                  updateState={(newTags) => {
                    setOptionalSkillText(newTags.tag);
                    onChange(newTags.tagsArray);
                    if (errors.optionalSkills) {
                      clearErrors('optionalSkills');
                    }
                  }}
                  suggestions={skillSuggestions.filter(
                    (skill) => !watchedRequiredSkills.includes(skill)
                  )}
                  keysForTag=","
                  maxSuggestions={5}
                  containerStyle={[
                    styles.tagInput,
                    errors.optionalSkills && styles.errorBorder,
                  ]}
                  labelStyle={styles.label}
                  tagStyle={styles.optionalTag}
                  tagTextStyle={styles.tagText}
                  inputStyle={styles.input}
                  placeholder="Add optional skills..."
                />
                {errors.optionalSkills && (
                  <Text style={styles.errorText}>
                    {errors.optionalSkills.message}
                  </Text>
                )}
              </View>
            )}
          />

          <View style={styles.buttonContainer}>
            <Button
              title={isSubmitting ? 'Creating...' : 'Create Project'}
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Advanced Features:</Text>
            <Text style={styles.infoText}>🔄 Custom validation logic</Text>
            <Text style={styles.infoText}>🎯 Conditional suggestions</Text>
            <Text style={styles.infoText}>⚡ Real-time error clearing</Text>
            <Text style={styles.infoText}>📊 Loading states</Text>
            <Text style={styles.infoText}>🔗 Field interdependencies</Text>
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
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
  projectTag: {
    backgroundColor: '#17a2b8',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  requiredTag: {
    backgroundColor: '#dc3545',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  optionalTag: {
    backgroundColor: '#6c757d',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    marginTop: 8,
    marginLeft: 4,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#856404',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 4,
  },
});
