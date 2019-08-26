import React from 'react'

import { Button } from 'react-native'

import Header from './Header'

class HomeScreen extends React.Component {
    // static navigationOptions = {
    //   title: 'White Stallion'
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <>
        <Header />
        <Button
          title="Go to your profile"
          onPress={() => navigate('Profile')}
        />
        </>
      );
    }
  }

  export default HomeScreen