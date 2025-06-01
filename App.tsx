import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
// To run this code, you need to have React Native linear gradient set up.
//Run: npx expo install expo-linear-gradient
import {LinearGradient} from 'expo-linear-gradient';
//Run: npx expo install @expo/vector-icons
import { Feather } from '@expo/vector-icons';
export default function Index() {
  return (
    <LinearGradient
      colors={['#ff6a00', '#ee0979']}
      style={styles.BoarderRadius}>
      <View style={styles.container}>
        {}
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Pressable onPress={() => alert('Assignment 1 Completed')}>
            <Feather name="chevron-left" size={28} color="black" />
        </Pressable>
        {/* Text Area */}
        <View style={styles.topBarTextContainer}>
          {/* Hashtag-like text above "Posts" */}
          <Text style={styles.hashtagtext}>Hello_There</Text>
          {/* Title */}
          <Text style={styles.topBarTitle}>Posts</Text>
        </View>
          {/* <Text style={styles.icon}>⋯</Text> */}
        </View>

      {}
      {/* Post Section */}
      <ScrollView>
        {}
        <View style={styles.postContainer}>
          {}
          <View style={styles.postHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./assets/SleepBeauty.jpg')}
                style={styles.profilePic}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.username}>Hello_There</Text>
                {/* subUsername */}
                <Text>via frenchie_fry39</Text>
              </View>
            </View>
            <Feather name="more-horizontal" size={24} color="black" />
          </View>
          </View>

          {}
          <Image
            source={require('./assets/PostMaterial.jpg')}
            style={styles.postImage}
          />

          {}
          {/* Post Actions */}
          <View style={styles.postActions}>
            <View style={styles.leftAction}>
              <Feather name="heart" size={24} color="black" style={styles.iconSpacing}/>
              <Feather name="message-circle" size={24} color="black" style={styles.iconSpacing}/>
              <Feather name="mail" size={24} color="black" />
            </View>
            <Feather name="bookmark" size={24} color="black" />
          </View>

          {}
          <View style={styles.captionContainer}>
              <View style={styles.likesRow}>
                <View style={styles.avatarStack}>
                  <Image source={require('./assets/SleepBeauty.jpg')} style={styles.likeAvatar} />
                  <Image source={require('./assets/SleepBeauty.jpg')} style={styles.likeAvatarOverlap} />
                  <Image source={require('./assets/SleepBeauty.jpg')} style={styles.likeAvatarOverlap} />
                </View>
            <Text style={styles.caption}>
              Liked by
              <Text style={styles.username}> paisley.print.48 </Text>
              and
              <Text style={styles.username}> 7 others </Text>
            </Text>
          </View>

          {}
          <View style={styles.commentsSection}>
            <Text style={styles.comment}>
              <Text style={styles.username}>Vijay Thapa Chhetri </Text>
              Looks Beautiful
            </Text>
            <Text style={styles.unfoldComments}>
              View all 12 comments
            </Text>
            <Text style={styles.comment}>
              <Text style={styles.username}>An-Ni Huang </Text>
              Beautiful 😍
            </Text>
            <Text style={styles.comment}>
              <Text style={styles.username}>Chen Li </Text>
              Mesmerizing
            </Text>
            {/* <Text style={styles.comment}>
              <Text style={styles.username}>Sola </Text>
              God Damn
            </Text> */}
            {/* Time Stamp Section */}
            <Text style={styles.timeStamp}>1 hour ago</Text>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        {/* <Text style={styles.icon}>⋯</Text> */}
        <Feather name="home" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <Feather name="plus-square" size={24} color="black" />
        <Feather name="heart" size={24} color="black" />
        <Feather name="user" size={24} color="black" />
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 35,
    overflow: 'hidden',
  },
  BoarderRadius: {
    flex: 1,
    // borderRadius: 25,
    overflow: 'hidden',
    padding: 4,
  },
  topBarTextContainer: {
    position: 'absolute',
    left:0,
    right:0,
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginTop: 30,
    borderColor: 'lightgray',
    position: 'relative',
  },
  hashtagtext:{
    fontSize:12,
    textAlign: 'center',
    color:"gray",
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
  },
  postContainer: {
    marginVertical:4,
  },
  captionProfilePic:{
    width:14,
    height:14,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginRight: 10,
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
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  leftAction:{
    flexDirection: 'row',
    
  },
  iconSpacing: {
  marginRight: 15,
},
  captionContainer: {
    paddingHorizontal: 15,
    paddingBottom: 3,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
  commentsSection: {
    // paddingHorizontal: 15,
    paddingBottom: 20,
  },
  comment: {
    fontSize: 14,
    marginTop: 4,
  },
  unfoldComments: {
    fontSize: 14,
    marginTop: 4,
    color: 'gray',
  },
  timeStamp: {
    paddingTop: 5,
    fontSize: 10,
    color: 'gray',
  },
    bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 40,
    borderTopWidth: 1,
    // marginTop: 10,
    borderColor: 'lightgray',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatarStack: {
    flexDirection: 'row',
    marginRight: 10,
  },
  likeAvatar:{
    width: 18,
    height: 18,
    borderRadius: 10,
  },
  likeAvatarOverlap: {
    width: 18,
    height: 18,
    borderRadius: 10,
    marginLeft: -5, // Overlap effect
  },
});
