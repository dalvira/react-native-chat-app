import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import ImageSlider from 'react-native-image-slider';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./img/girlphoto2.jpg'),
        require('./img/girlphoto.jpg'),
        require('./img/girlphoto3.jpg')
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageSlider
          //   images={[
          //     'https://placeimg.com/640/640/nature',
          //     'https://placeimg.com/640/640/people',
          //     'https://placeimg.com/640/640/animals'
          //   ]}
          images={this.state.images}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.photoContainer]}>
              <Image
                style={styles.photoStyle}
                resizeMode="cover"
                source={item}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  photoContainer: {
    alignSelf: 'stretch',
    flex: 7
  },
  photoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});

export default PhotoGallery;