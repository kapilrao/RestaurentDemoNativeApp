import { createAppContainer } from "react-navigation";
import Home from "../home";
import SelectedRestro from "../selectedRestro";
import RestroMapView from "../restroMapView";

import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Restaurant List",
      },
    },
    SelectedRestro: {
      screen: SelectedRestro,
      navigationOptions: {
        headerTitle: '',
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "black",
      },
    },
    RestroMapView: {
      screen: RestroMapView,
      navigationOptions: {
        headerTitle: "Map View",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00dea5",
      },
      headerTintColor: "white",
      headerTitle: "Restaurant List",
    },
    screenOptions: {
      gestureEnabled: true,
    },
    headerLayoutPreset: "center",
    initialRouteName: "Home",
  }
);

const RootNavigationStack = createAppContainer(Stack);
export default RootNavigationStack;
