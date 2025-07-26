import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TagInput } from 'react-native-input-tag';

const validationSchema = Yup.object().shape({
  skills: Yup.array()
    .of(Yup.string().required())
    .min(1, 'At least one skill is required')
    .max(10, 'Maximum 10 skills allowed'),
  interests: Yup.array()
    .of(Yup.string().required())
    .min(2, 'At least two interests are required'),
});

export default function FormikExample() {
  const skillSuggestions = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Java',
    'Swift',
    'Kotlin',
    'Flutter',
    'React',
  ];

  const interestSuggestions = [
    'Mobile Development',
    'Web Development',
    'AI/ML',
    'Blockchain',
    'Game Development',
    'DevOps',
    'UI/UX Design',
    'Data Science',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Formik + Yup Integration</Text>
          <Text style={styles.description}>
            Form validation with Formik and Yup schema validation.
          </Text>

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
              <View>
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
                      errors.skills && touched.skills && styles.errorBorder,
                    ]}
                    labelStyle={styles.label}
                    tagStyle={styles.skillTag}
                    tagTextStyle={styles.tagText}
                    inputStyle={styles.input}
                    placeholder="Type your skills and press space"
                  />
                  {errors.skills && touched.skills && (
                    <Text style={styles.errorText}>
                      {Array.isArray(errors.skills)
                        ? errors.skills[0]
                        : errors.skills}
                    </Text>
                  )}
                </View>

                <View style={styles.fieldContainer}>
                  <TagInput
                    label="Interests *"
                    tags={values.interests}
                    updateState={(newTags) =>
                      setFieldValue('interests', newTags)
                    }
                    suggestions={interestSuggestions}
                    keysForTag=","
                    maxSuggestions={4}
                    caseSensitive={false}
                    containerStyle={[
                      styles.tagInput,
                      errors.interests &&
                        touched.interests &&
                        styles.errorBorder,
                    ]}
                    labelStyle={styles.label}
                    tagStyle={styles.interestTag}
                    tagTextStyle={styles.tagText}
                    inputStyle={styles.input}
                    placeholder="Type your interests and press comma"
                  />
                  {errors.interests && touched.interests && (
                    <Text style={styles.errorText}>
                      {Array.isArray(errors.interests)
                        ? errors.interests[0]
                        : errors.interests}
                    </Text>
                  )}
                </View>

                <View style={styles.buttonContainer}>
                  <Button title="Submit Profile" onPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Formik Integration Features:</Text>
            <Text style={styles.infoText}>
              📋 Complete form state management
            </Text>
            <Text style={styles.infoText}>✅ Yup schema validation</Text>
            <Text style={styles.infoText}>🎯 Field-level error handling</Text>
            <Text style={styles.infoText}>
              🔄 Real-time validation feedback
            </Text>
            <Text style={styles.infoText}>
              📱 Clean form submission handling
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
  skillTag: {
    backgroundColor: '#28a745',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  interestTag: {
    backgroundColor: '#17a2b8',
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
    backgroundColor: '#d4edda',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#155724',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#155724',
    marginBottom: 4,
  },
});
