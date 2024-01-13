import {Button, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useState} from 'react';

import CourseInput from './components/CourseInput';
import CourseList from './components/CourseList';

function App(): React.JSX.Element {
  const [courses, setCourses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e085a" />
      <Button
        title="Add New Course"
        onPress={() => setModalVisible(true)}
        color="#5e0acc"
      />
      {modalVisible && (
        <CourseInput
          onSetCourse={setCourses}
          modalVisible={modalVisible}
          onSetModal={setModalVisible}
        />
      )}
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
