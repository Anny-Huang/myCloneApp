import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.topBar}>
        <Pressable onPress={() => alert('I am done with the Assignment')}>
          <Text style={styles.icon}>←</Text>
        </Pressable>
        <Text style={styles.topBarTitle}>Posts</Text>
        <Text style={styles.icon}>⋯</Text>
      </View>

      {}
      <ScrollView>
        {}
        <View style={styles.postContainer}>
          {}
          <View style={styles.postHeader}>
            <Image
              source={{ uri: '' }}
              style={styles.profilePic}
            />
            <Text style={styles.username}>Hello_There</Text>
          </View>

          {}
          <Image
            source={{ uri: '' }}
            style={styles.postImage}
          />

          {}
          <View style={styles.postActions}>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.icon}>💬</Text>
            <Text style={styles.icon}>📤</Text>
          </View>

          {}
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>
              <Text style={styles.username}>Vijay Thapa Chhetri </Text>
              Looks Beautiful
            </Text>
          </View>

          {}
          <View style={styles.commentsSection}>
            <Text style={styles.comment}>
              <Text style={styles.username}>An-Ni Huang </Text>
              Beautiful 😍
            </Text>
            <Text style={styles.comment}>
              <Text style={styles.username}>Chen Li</Text>
              Mesmerizing
            </Text>
            <Text style={styles.comment}>
              <Text style={styles.username}>Sola </Text>
              God Damn
            </Text>
          </View>
        </View>
      </ScrollView>
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
  },
  postContainer: {
    marginTop: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    padding: 10,
  },
  captionContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  commentsSection: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  comment: {
    fontSize: 14,
    marginTop: 4,
  },
});
