import React from 'react'

import { Button } from 'react-native'

import Header from './Header'

class ServiceLogScreen extends React.Component {
    static navigationOptions = {
      title: 'Service Log'
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <>
        <Header />
        <Button
          title="Back to Vehicle"
          onPress={() => navigate('Vehicle')}
        />
        </>
      );
    }
  }

  export default ServiceLogScreen