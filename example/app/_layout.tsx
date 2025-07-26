import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#C8A165',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'TagInput Examples',
            headerStyle: {
              backgroundColor: '#C8A165',
            },
          }}
        />
        <Stack.Screen name="basic" options={{ title: 'Basic Usage' }} />
        <Stack.Screen
          name="advanced"
          options={{ title: 'Advanced Customization' }}
        />
        <Stack.Screen
          name="custom-suggestion"
          options={{ title: 'Custom Suggestions' }}
        />
        <Stack.Screen name="custom-tag" options={{ title: 'Custom Tags' }} />
        <Stack.Screen
          name="custom-delete"
          options={{ title: 'Custom Delete Button' }}
        />
        <Stack.Screen name="formik" options={{ title: 'Formik + Yup' }} />
        <Stack.Screen
          name="react-hook-form"
          options={{ title: 'React Hook Form' }}
        />
        <Stack.Screen
          name="advanced-form"
          options={{ title: 'Advanced Form' }}
        />
      </Stack>
    </>
  );
}
