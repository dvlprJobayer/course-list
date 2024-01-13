import {StyleSheet, View, TextInput, Button} from 'react-native';

const CourseInput = (): JSX.Element => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Your Course Goal" />
      <View style={styles.btnContainer}>
        <Button title="Add Course" color="#5e0acc" />
        <Button title="Cancel" color="#f31282" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    padding: 8,
    width: '100%',
    marginVertical: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default CourseInput;
