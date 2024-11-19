import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import MainNavigator from './src/navigation';
// todo: add loading and error modals
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
