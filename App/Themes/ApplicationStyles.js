import {Colors} from './Colors';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
    },
  },
};

export default ApplicationStyles;
export {width, height};
