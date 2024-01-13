import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';

type GoalListProps = {
  courses: Array<{id: string; text: string}>;
  onSetCourse: Function;
};

const CourseList = ({courses, onSetCourse}: GoalListProps) => {
  const deleteCourseHandler = (id: string) => {
    onSetCourse((prevCourses: Array<{id: string; text: string}>) =>
      prevCourses.filter(course => course.id !== id),
    );
  };

  return (
    <View style={styles.courseContainer}>
      <FlatList
        data={courses}
        renderItem={renderItem => (
          <View style={styles.courseItem}>
            <Pressable
              android_ripple={{color: '#ddd'}}
              onPress={() => deleteCourseHandler(renderItem.item.id)}>
              <Text style={styles.courseText}>{renderItem.item.text}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    flex: 5,
    marginTop: 8,
  },
  courseItem: {
    backgroundColor: '#5e0acc',
    marginTop: 8,
    borderRadius: 6,
  },
  courseText: {
    padding: 8,
    color: 'white',
  },
});

export default CourseList;
