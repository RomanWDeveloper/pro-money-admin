import { Button, Flex, Input, Statistic, theme } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import Text from "antd/es/typography/Text";
import { FC, useState } from "react";

export interface CodeFormProps {
  resendCode: (params: { requestBody: { email: string } }) => void;
  sharedProps: OTPProps;
  onGoBack: () => void;
  email: string;
  delay: number;
}

export const CodeForm: FC<CodeFormProps> = ({
  resendCode,
  sharedProps,
  onGoBack,
  email,
  delay,
}) => {
  const { Countdown } = Statistic;
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const { token } = theme.useToken();

    const currentTimestamp = Date.now();
    const deadline = currentTimestamp + delay;


  const onFinish = () => {
    setIsTimerEnd(true);
  };

  return (
    <Flex vertical={true}>
      <Text style={{ marginBottom: 20 }} type="secondary">
        Введите код, отправленный на&nbsp;
        <Text style={{ color: token.colorPrimary }}>{email}</Text>
      </Text>

      <Input.OTP
        style={{ textTransform: "uppercase" }}
        autoFocus={true}
        length={6}
        {...sharedProps}
      />

      <Flex>
        <Button
          type="link"
          disabled={!isTimerEnd}
          onClick={() => {resendCode({ requestBody: { email } })}}
          style={{
            color: isTimerEnd ? token.colorPrimary : "#76767A",
            marginBottom: 20,
            paddingLeft: 0,
          }}
        >
          Отправить код повторно
          {!isTimerEnd && (
            <Countdown format="mm:ss" value={deadline} onFinish={onFinish} />
          )}
        </Button>
      </Flex>

      <Button onClick={onGoBack} type="primary">
        Назад
      </Button>
    </Flex>
  );
};
