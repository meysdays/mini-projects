import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={[styles.headingContainer]}>
          <Text style={[styles.headerText]}>
            What's new in Javascript 21 - Es12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMTQa1KK-YzAcudlT8NynzQHWROcyseNfXk1rOduyDw&s',
          }}
          style={[styles.cardImage]}
        />
        <View style={[styles.bodyContainer]}>
          <Text numberOfLines={4}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            ipsum laborum culpa nisi ea qui laboriosam quisquam soluta?
            Praesentium odit molestiae minima mollitia aspernatur quo.
          </Text>
        </View>
        <View style={[styles.footerContainer]}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.w3schools.com/js/default.asp')
            }>
            <Text style={[styles.socialLinks]}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.w3schools.com/js/default.asp')
            }>
            <Text style={[styles.socialLinks]}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 380,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding:10
  },
  footerContainer: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks: {
    fontSize:16,
    color:'#000000',
    backgroundColor:'#ffff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
  },
});
