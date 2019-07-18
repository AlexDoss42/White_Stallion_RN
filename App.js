import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Components/HomeScreen'
import ProfileScreen from './Components/ProfileScreen'
import VehicleScreen from './Components/VehicleScreen'
import ServiceLogScreen from './Components/ServiceLogScreen'
import MilesReportScreen from './Components/MilesReportScreen'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Vehicle: {screen: VehicleScreen},
  ServiceLog: {screen: ServiceLogScreen},
  MilesReport: {screen: MilesReportScreen}
});

const App = createAppContainer(MainNavigator);

export default App;