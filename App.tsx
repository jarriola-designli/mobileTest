import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import MainNavigator from './src/navigation';
import {LoadingModal, ErrorModal} from './src/Components';
import {useNetworkingStore} from './src/store';
// todo: add error modal
const App = () => {
  const loading = useNetworkingStore(state => state.loading);
  const error = useNetworkingStore(state => state.errorMsgAndShowup.showError);
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <MainNavigator />
        <LoadingModal visible={loading} />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
