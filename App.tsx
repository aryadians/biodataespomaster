import { Component } from 'react';

import * as Font from 'expo-font';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import me from './assets/me.jpg';
import vector1 from './assets/vector-1.png';
import vector2 from './assets/vector-2.png';
import vector3 from './assets/vector-3.png';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import { customFonts } from './utils/customFonts';

type AppState = {
  fontsLoaded: boolean;
  name: string;
  photo: ImageSourcePropType;
};

class App extends Component {
  state: AppState = {
    fontsLoaded: false,
    name: "Arya Dian Saputra",
    photo: me,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <ScrollView>
        <View style={{ height: 240 }}>
          <Image
            source={vector1}
            style={{ width: "100%", height: 200, position: "absolute" }}
          />
          <Image
            source={vector2}
            style={{ width: "100%", height: 200, position: "absolute" }}
          />
          <Image
            source={vector3}
            style={{ width: "100%", height: 200, position: "absolute" }}
          />
        </View>

        <View style={[styles.layout, { position: "relative", top: -100 }]}>
          <Image
            source={this.state.photo}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              borderWidth: 4,
              borderColor: "white",
            }}
          />
          <Text
            style={{ fontSize: 18, marginTop: 10, fontFamily: "Roboto-Medium" }}
          >
            {this.state.name}
          </Text>
          <Text
            style={{
              color: "#706C6C",
              marginTop: 10,
              fontSize: 15,
              fontFamily: "Roboto-Regular",
            }}
          >
            Software engineer Student at Unikama University , Front-end
            Developer , Available for freelance work and receive your requests.
          </Text>

          <SocialMedia />

          <View style={{ marginVertical: 50 }}>
            <View
              style={{
                borderBottomColor: "#00000035",
                borderBottomWidth: 1,
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Roboto-Regular" }}>
                Projects
              </Text>
            </View>

            <Projects />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  layout: { width: "85%", alignSelf: "center" },
});

export default App;
