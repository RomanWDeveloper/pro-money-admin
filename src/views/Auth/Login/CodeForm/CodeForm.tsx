import { Statistic, theme } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { FC, useState } from "react";
import {
  BackButton,
  ButtonsContainer,
  Container,
  EmailText,
  InfoText,
  OTPInput,
  ResendButton,
} from "./style";

export interface CodeFormProps {
  resendCode: (params: { requestBody: { email: string } }) => void;
  sharedProps: OTPProps;
  onGoBack: () => void;
  email: string;
  delay: number;
}

export const CodeForm: FC<CodeFormProps> = (props) => {
  const { resendCode, sharedProps, onGoBack, email, delay } = props;
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const { token } = theme.useToken();
  const { Countdown } = Statistic;

  const currentTimestamp = Date.now();
  const deadline = currentTimestamp + delay;

  const onFinish = () => setIsTimerEnd(true);

  return (
    <Container vertical={true}>
      <InfoText type="secondary">
        Введите код, отправленный на&nbsp;
        <EmailText $colorPrimary={token.colorPrimary}>{email}</EmailText>
      </InfoText>

      <OTPInput
        autoFocus={true}
        length={6}
        {...sharedProps}
      />

      <ButtonsContainer>
        <ResendButton
          type="link"
          disabled={!isTimerEnd}
          onClick={() => {resendCode({ requestBody: { email } })}}
          $isTimerEnd={isTimerEnd}
          $colorPrimary={token.colorPrimary}
        >
          Отправить код повторно
          {!isTimerEnd && (
            <Countdown format="mm:ss" value={deadline} onFinish={onFinish} />
          )}
        </ResendButton>
      </ButtonsContainer>

      <BackButton onClick={onGoBack} type="primary">
        Назад
      </BackButton>
    </Container>
  );
};
