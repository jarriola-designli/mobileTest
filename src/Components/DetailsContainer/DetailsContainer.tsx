import * as S from './styles';

interface DetailsContainerProps {
  children?: React.ReactNode;
}

const DetailsContainer = ({children}: DetailsContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default DetailsContainer;
