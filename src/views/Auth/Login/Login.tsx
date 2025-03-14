import { Flex as AntFlex, Button, Flex, Modal, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeForm } from "./CodeForm";
import { EmailForm } from "./EmailForm";
import { useAuthServicePostV1AuthSigninEmail, useAuthServicePostV1AuthSigninEmailVerify } from "@/generated-api/queries";

const { Title, Text } = Typography;
export const Login = () => {
  const [showCodeForm, setshowCodeForm] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // добавлено состояние загрузки

  // Авторизация
  const { mutate: registration } = useAuthServicePostV1AuthSigninEmail(
    {
    onMutate: () => {
      setIsLoading(true); // установка состояния загрузки в true перед отправкой
    },
    onSuccess: () => {
      console.log("sendCode");
      setshowCodeForm(true);
      setIsLoading(false); // сброс состояния загрузки после успешной отправки
    },
    onError: () => {
      setIsLoading(false); // сброс состояния загрузки в случае ошибки
    },
    }
  );

  // подтверждение кода
  const { mutate: confirmCode } = useAuthServicePostV1AuthSigninEmailVerify({
    onSuccess: (data) => {
      console.log("confirmCode", data);
      if (data.accessToken) {
        localStorage.setItem("auth-token", data.accessToken);
        navigate("/");
      }
    },
  });

  // проверка на существование email и отправка кода или регистрация
  useEffect(() => {
    if (email) {
      registration({ requestBody: { email } });
    }
  }, [email]);

  const emailFormonFinish = async (email: string) => {
    setEmail(email);
  };

  const onChangeSendCodeForm: OTPProps["onChange"] = (text) => {
    confirmCode({ requestBody: { email, loginCode: text } });
  };

  const sharedPropsSendCodeForm: OTPProps = {
    onChange: onChangeSendCodeForm,
  };

  const handleGoBack = () => {
    setshowCodeForm(false);
  };

  return (
    <>
      <AntFlex vertical={true} style={{ padding: 0, margin: 0, width: "100%", maxWidth: "400px", }}>
        <Title level={1}>Админ-панель</Title>
        <Flex vertical={true}>
          <Title level={3} style={{ margin: "0 0 20px" }}>
            Войти или зарегистрироваться
          </Title>
          {showCodeForm ? (
            <CodeForm
              sharedProps={sharedPropsSendCodeForm}
              onGoBack={handleGoBack}
              email={email}
            />
          ) : (
            <EmailForm
              onEmailFormFinish={emailFormonFinish}
              buttonLoading={isLoading}
            />
          )}
        </Flex>
        <Text
          style={{ marginTop: 20, textAlign: "center", fontSize: 12 }}
          type="secondary"
        >
          Продолжая вход или регистрацию, вы соглашаетесь на обработку своих
          персональных данных в соответствии с нашей
          <Text onClick={() => setIsModalOpen(true)} style={{ fontSize: 12 }}>
            {" "}
            политикой конфиденциальности.{" "}
          </Text>
        </Text>
      </AntFlex>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={() => setIsModalOpen(false)}
          >
            Закрыть
          </Button>,
        ]}
      >
        <div>Политика конфиденциальности</div>
      </Modal>
    </>
  );
};
