import { Flex as AntFlex, Button, Flex, Modal, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeForm } from "./CodeForm";
import { EmailForm } from "./EmailForm";

const { Title, Text } = Typography;
export const Login = () => {
  const [showCodeForm, setshowCodeForm] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // добавлено состояние загрузки

  // Фейковая проверка на существование email
  const refetch = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { is_exists: Math.random() > 0.5 } }); // случайное значение для существования email
      }, 1000);
    });
  };

  // Фейковая регистрация
  const registration = async () => {
    console.log("registration");
    await sendCode();
  };

  // Фейковая отправка кода
  const sendCode = async () => {
    setIsLoading(true); // установка состояния загрузки в true перед отправкой
    console.log("sendCode");
    setshowCodeForm(true);
    setIsLoading(false); // сброс состояния загрузки после успешной отправки
  };

  // Фейковое подтверждение кода
  const confirmCode = async (code: string) => {
    console.log("confirmCode", code, { token: "fake-token" });
    localStorage.setItem("auth-token", "fake-token");
    navigate("/");
  };

  // проверка на существование email и отправка кода или регистрация
  useEffect(() => {
    if (email) {
      refetch().then((result) => {
        const typedResult = result as { data: { is_exists: boolean } }; // Приведение типа
        if (typedResult.data?.is_exists) {
          console.log("Отправка кода существующему пользователю");
          sendCode();
        } else {
          console.log("Регистрация нового пользователя");
          registration();
        }
      });
    }
  }, [email]);

  const emailFormonFinish = async (email: string) => {
    setEmail(email);
  };

  const onChangeSendCodeForm: OTPProps["onChange"] = (text) => {
    confirmCode(text);
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
