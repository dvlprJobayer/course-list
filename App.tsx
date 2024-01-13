import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import CourseInput from './components/CourseInput';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e085a" />
      <CourseInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1e085a',
  },
});

export default App;
