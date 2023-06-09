import React from "react";
import { Screens } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import ChatScreen from "../screens/ChatScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs: [name: Screens, iconName: any, component: any][] = [
  [Screens.HOME, "home", HomeScreen],
  [Screens.ACTIVITIES, "dog-service", ActivitiesScreen],
  [Screens.CHAT, "chat", ChatScreen],
  [Screens.PROFILE, "account", ProfileScreen],
];

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {Tabs.map(([name, iconName, component]) => (
        <Tab.Screen
          name={name}
          key={name}
          component={component}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <MaterialCommunityIcons name={iconName} size={29} color="black" />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
