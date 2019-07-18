import React from 'react'

import { Button } from 'react-native'

import Header from './Header'

class VehicleScreen extends React.Component {
    static navigationOptions = {
      title: 'White Stallion'
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <>
        <Header />
        <Button
          title="Miles Breakdown Report"
          onPress={() => navigate('MilesReport')}
        />
        <Button
          title="Service Log"
          onPress={() => navigate('ServiceLog')}
        />
        </>
      );
    }
  }

  export default VehicleScreen