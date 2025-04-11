import { Flex as AntFlex, Button, Flex, Modal, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeForm } from "./CodeForm";
import { EmailForm } from "./EmailForm";
import { useSignInEmail, useVerifySignInEmail } from "@/hooks/api/auth";
import { CodeFormProps } from "./CodeForm/CodeForm";
import { useExit } from "@/hooks/useExit";
const { Title, Text } = Typography;
export const Login = () => {
	const navigate = useNavigate();

	const [showCodeForm, setshowCodeForm] = useState(false);
	const [email, setEmail] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const exit = useExit(false);

	const { mutate: registration, data: registrationData } = useSignInEmail({
		onMutate: () => {
			setIsLoading(true); 
		},
		onSuccess: () => {
			setshowCodeForm(true);
			setIsLoading(false); 	
		},
		onError: () => {
			setIsLoading(false);
		},
	});

	// подтверждение кода
	const { mutate: confirmCode } = useVerifySignInEmail({
		onSuccess: (data) => {
			if (data && data.appType === "MANAGEMENT") {
				localStorage.setItem("auth-token", data.accessToken);
				navigate("/");
			} else {
				exit();
				navigate("/auth/not-allowed/");
			}
		},
	});

	const emailFormonFinish = async (email: string) => {
		setEmail(email);
		registration({ requestBody: { email } });
	};

	const onChangeSendCodeForm: OTPProps["onChange"] = (text) => {
		confirmCode({ requestBody: { email, code: text } });
	};

	const sharedPropsSendCodeForm: OTPProps = {
		onChange: onChangeSendCodeForm,
	};

	const handleGoBack = () => {
		setshowCodeForm(false);
	};

	const codeFormProps: CodeFormProps = {
		resendCode: registration,
		sharedProps: sharedPropsSendCodeForm,
		onGoBack: handleGoBack,
		email: email,
		delay: registrationData?.delay || 20000,
	};

	return (
		<>
			<AntFlex vertical={true} style={{ padding: 0, margin: 0, width: "100%", maxWidth: "400px" }}>
				<Title level={1}>Админ-панель</Title>
				<Flex vertical={true}>
					<Title level={3} style={{ margin: "0 0 20px" }}>
						Войти или зарегистрироваться
					</Title>
					{showCodeForm ? (
						<CodeForm {...codeFormProps} />
					) : (
						<EmailForm onEmailFormFinish={emailFormonFinish} buttonLoading={isLoading} />
					)}
				</Flex>
				<Text style={{ marginTop: 20, textAlign: "center", fontSize: 12 }} type="secondary">
					Продолжая вход или регистрацию, вы соглашаетесь на обработку своих персональных данных в соответствии с нашей
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
					<Button key="submit" type="primary" onClick={() => setIsModalOpen(false)}>
						Закрыть
					</Button>,
				]}
			>
				<div>Политика конфиденциальности</div>
			</Modal>
		</>
	);
};
