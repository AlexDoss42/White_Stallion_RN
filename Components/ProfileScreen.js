import React from 'react'

import { Button } from 'react-native'

class ProfileScreen extends React.Component {
    // static navigationOptions = {
    //   title: `Your Profile`,
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="THE WHITE STALLION"
          onPress={() => navigate('Vehicle')}
        />
      );
    }
  }

  export default ProfileScreen