import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TagInput } from 'react-native-input-tag';

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

export default function ReactHookFormExample() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      technologies: [],
      frameworks: [],
    },
  });

  const techSuggestions = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'Swift',
    'Kotlin',
    'Dart',
    'Go',
    'Rust',
    'C++',
    'PHP',
    'Ruby',
  ];

  const frameworkSuggestions = [
    'React Native',
    'React',
    'Vue.js',
    'Angular',
    'Flutter',
    'Ionic',
    'Xamarin',
    'Cordova',
    'NativeScript',
    'Expo',
  ];

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>React Hook Form Integration</Text>
          <Text style={styles.description}>
            Using Controller component with React Hook Form and Yup validation.
          </Text>

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
                    errors.technologies && styles.errorBorder,
                  ]}
                  labelStyle={styles.label}
                  tagStyle={styles.techTag}
                  tagTextStyle={styles.tagText}
                  inputStyle={styles.input}
                  placeholder="Type languages and press space"
                />
              )}
            />
            {errors.technologies && (
              <Text style={styles.errorText}>
                {errors.technologies.message}
              </Text>
            )}
          </View>

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
                    errors.frameworks && styles.errorBorder,
                  ]}
                  labelStyle={styles.label}
                  tagStyle={styles.frameworkTag}
                  tagTextStyle={styles.tagText}
                  inputStyle={styles.input}
                  placeholder="Type frameworks and press comma"
                />
              )}
            />
            {errors.frameworks && (
              <Text style={styles.errorText}>{errors.frameworks.message}</Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Submit Survey" onPress={handleSubmit(onSubmit)} />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>React Hook Form Features:</Text>
            <Text style={styles.infoText}>🎣 Minimal re-renders</Text>
            <Text style={styles.infoText}>⚡ High performance</Text>
            <Text style={styles.infoText}>🔧 Easy integration</Text>
            <Text style={styles.infoText}>📝 TypeScript support</Text>
            <Text style={styles.infoText}>🎯 Field-level validation</Text>
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
    marginBottom: 20,
  },
  tagInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  techTag: {
    backgroundColor: '#6f42c1',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  frameworkTag: {
    backgroundColor: '#fd7e14',
    borderRadius: 16,
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
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#e7f3ff',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#004085',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#004085',
    marginBottom: 4,
  },
});
