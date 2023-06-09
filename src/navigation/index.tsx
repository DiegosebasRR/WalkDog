import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

const AppContainer = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#fff",
        },
      }}
    >ñlñlñlñlñlñlñlñlñlñl_____
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;
