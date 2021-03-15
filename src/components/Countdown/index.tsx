import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, ContainerMaster, CountdownButton, CountdownButtonActive } from './styles';

const Countdown: React.FC = () => {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <ContainerMaster>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      { hasFinished ? (
        <CountdownButton disabled>
          Ciclo encerrado
        </CountdownButton>
      ) : (
          <>
            { isActive ? (
              <CountdownButtonActive onClick={resetCountdown}>
                Abandonar ciclo
              </CountdownButtonActive>
            ) : (
                <CountdownButton onClick={startCountdown}>
                  Iniciar um ciclo
                </CountdownButton>
              )}
          </>
        )}
    </ContainerMaster>
  );
};

export default Countdown;
