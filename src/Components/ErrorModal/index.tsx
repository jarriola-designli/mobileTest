import {Modal} from 'react-native';
import {Text} from '@ui-kitten/components';
import * as S from './styles';
import {useNetworkingStore} from '../../store';

interface ErrorModalProps {
  visible: boolean;
}

const ErrorModal = ({visible}: ErrorModalProps) => {
  const setErrorMsgAndShowup = useNetworkingStore(
    state => state.setErrorMsgAndShowup,
  );

  return (
    <S.ModalContainer
        
      visible={true}
    
      >
      <S.ContentContainer>
        <Text>Ups! there was an error.</Text>
        <Text>Please try again later</Text>
      </S.ContentContainer>
    </S.ModalContainer>
  );
};

export default ErrorModal;
