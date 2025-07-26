import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router';

const examples = [
  {
    title: 'Basic Usage',
    description: 'Simple tag input with basic configuration',
    route: '/basic',
    icon: '📝',
  },
  {
    title: 'Advanced Customization',
    description: 'Advanced styling and autocomplete features',
    route: '/advanced',
    icon: '🎨',
  },
  {
    title: 'Custom Suggestions',
    description: 'Custom rendering for suggestion items',
    route: '/custom-suggestion',
    icon: '💡',
  },
  {
    title: 'Custom Tags',
    description: 'Custom tag rendering with unique designs',
    route: '/custom-tag',
    icon: '🏷️',
  },
  {
    title: 'Custom Delete Button',
    description: 'Customize only the delete button component',
    route: '/custom-delete',
    icon: '🗑️',
  },
  {
    title: 'Formik + Yup',
    description: 'Form validation with Formik and Yup',
    route: '/formik',
    icon: '📋',
  },
  {
    title: 'React Hook Form',
    description: 'Integration with React Hook Form',
    route: '/react-hook-form',
    icon: '🎣',
  },
  {
    title: 'Advanced Form',
    description: 'Complex form with custom validation',
    route: '/advanced-form',
    icon: '⚙️',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>React Native Input Tag</Text>
          <Text style={styles.subtitle}>
            Explore different examples and use cases
          </Text>
        </View>

        <View style={styles.examplesContainer}>
          {examples.map((example, index) => (
            <Link key={index} href={example.route} asChild>
              <TouchableOpacity style={styles.exampleCard}>
                <View style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.icon}>{example.icon}</Text>
                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardTitle}>{example.title}</Text>
                      <Text style={styles.cardDescription}>
                        {example.description}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.arrow}>→</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Choose an example above to see TagInput in action!
          </Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  examplesContainer: {
    gap: 12,
  },
  exampleCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
  },
  arrow: {
    fontSize: 18,
    color: '#C8A165',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
