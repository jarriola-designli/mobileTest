import styled from 'styled-components/native';
import {Modal} from 'react-native';

export const ModalContainer = styled(Modal)`
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: white;

  border-radius: 10px;
`;
