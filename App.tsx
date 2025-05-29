import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => alert('I am done with the lab')}>
          <Text style={styles.icon}>←</Text>
        </Pressable>
        <Text style={styles.topBarTitle}>Posts</Text>
        <Text style={styles.icon}>⋯</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    marginTop: 35,
    borderColor: 'gray',
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
  }
});
