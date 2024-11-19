/* import {Spinner, Text} from '@ui-kitten/components';
import * as S from './styles';

interface LoadingModalProps {
  visible: boolean;
}

const LoadingModal = ({visible}: LoadingModalProps) => {
  return (
    <S.ModalContainer visible={visible}>
      <Spinner size="giant" />
      <Text style={{color: '#FFF'}}>Loading...</Text>
    </S.ModalContainer>
  );
};

export default LoadingModal;
 */

// there's a problem with @ui-kitten/component modal, so I'll use react-native instead

import {Modal, ActivityIndicator} from 'react-native';
import * as S from './styles';

const LoadingModal = ({visible}: {visible: boolean}) => {
  return (
    <Modal transparent visible={visible}>
      <S.ModalContainer>
        <ActivityIndicator size="large" color="#FFF" />
        <S.Text >Loading...</S.Text>
      </S.ModalContainer>
    </Modal>
  );
};

export default LoadingModal;
