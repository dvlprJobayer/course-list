import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useState} from 'react';

import CourseInput from './components/CourseInput';
import CourseList from './components/CourseList';

function App(): React.JSX.Element {
  const [courses, setCourses] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e085a" />
      <CourseInput onSetCourse={setCourses} />
      <CourseList courses={courses} onSetCourse={setCourses} />
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
