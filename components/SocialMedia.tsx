import React, { Component } from 'react';

import {
  Image,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';

import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

class SocialMedia extends Component {
  state = {
    socialMediaList: [
      {
        name: "Linkedin",
        icon: linkedin,
        url: "https://www.linkedin.com/in/aryadians/",
      },
      {
        name: "twitter",
        icon: twitter,
        url: "https://twitter.com/extukangcopet",
      },
      {
        name: "instagram",
        icon: instagram,
        url: "https://www.instagram.com/aransptr_/",
      },
    ],
  };

  render() {
    return (
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        {this.state.socialMediaList.map((social) => (
          <TouchableOpacity
            key={social.name}
            onPress={() => Linking.openURL(social.url)}
          >
            <Image
              source={social.icon}
              style={{ width: 20, height: 20, marginRight: 17 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default SocialMedia;
