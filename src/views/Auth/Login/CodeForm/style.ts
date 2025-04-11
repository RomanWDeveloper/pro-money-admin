import styled from 'styled-components';
import { Button, Flex, Input, Statistic } from 'antd';
import Text from 'antd/es/typography/Text';

export const Container = styled(Flex)`
  /* Вертикальное расположение контента уже задается через props */
`;

export const InfoText = styled(Text)`
  margin-bottom: 20px;
`;

export const EmailText = styled(Text)<{ $colorPrimary: string }>`
  color: ${props => props.$colorPrimary};
`;

export const OTPInput = styled(Input.OTP)`
  text-transform: uppercase;
`;

export const ResendButton = styled(Button)<{ $isTimerEnd: boolean, $colorPrimary: string }>`
  margin-bottom: 20px;
  padding-left: 0;
  color: ${props => props.$isTimerEnd ? props.$colorPrimary : "#76767A"};
`;

export const ButtonsContainer = styled(Flex)`
  /* Контейнер для кнопок */
`;

export const StyledCountdown = styled(Statistic.Countdown)`
  /* Стили для компонента Countdown, если понадобятся */
`;

export const BackButton = styled(Button)`
  /* Стили для кнопки "Назад", если понадобятся */
`; 