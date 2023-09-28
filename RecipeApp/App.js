import { StyleSheet} from 'react-native';
import AppStack from './src/navigation/ScreenNavigation';

/**
 * Main app entrance point the AppStack contains all the navaigation
 */
export default function App() {

  return (
    <AppStack />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
