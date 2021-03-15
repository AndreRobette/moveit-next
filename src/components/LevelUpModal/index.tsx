import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Button, Container, Header, Overlay, Strong, Text } from './styles';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  
  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>
        <Strong>Parabéns</Strong>
        <Text>Você alcançou um novo level</Text>
        <Button onClick={closeLevelUpModal} >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
