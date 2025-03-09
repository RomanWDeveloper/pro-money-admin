import { Button, Divider, Flex, Form, Input } from "antd";
import { FC } from "react";

interface EmailFormProps {
  buttonLoading: boolean;
  onEmailFormFinish: (email: string) => void;
}

export const EmailForm: FC<EmailFormProps> = ({
  onEmailFormFinish,
  buttonLoading,
}) => {
  const [emailForm] = Form.useForm();
  return (
    <Form
      form={emailForm}
      name="login"
      onFinish={(values) => onEmailFormFinish(values.email)}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        style={{ marginBottom: 25 }}
        name="email"
        rules={[
          {
            type: "email",
            message: "Некорректная почта E-mail!",
          },
          {
            required: true,
            message: "Пожалуйста, введите E-mail!",
          },
        ]}
      >
        <Input placeholder="E-mail" />
      </Form.Item>

      <Flex
        style={{ width: "100%" }}
        gap={10}
        vertical={true}
        justify="space-between"
      >
        <Button
          loading={buttonLoading}
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
        >
          Продолжить
        </Button>

        <Divider />

        {/* <Button variant="outlined"icon={<GoogleIconFilled />}>
                    Войти с помощью Google
                </Button> */}
      </Flex>
    </Form>
  );
};
