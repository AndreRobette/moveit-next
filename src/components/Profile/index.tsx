import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/AndreRobette.png" alt="André Robette" />
      <div>
        <strong>André Robette</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
