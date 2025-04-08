import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Flex, Form, Input, Select, App as AntApp, } from "antd";
import { UserContent } from "./style";
import { useCreateUser, useGetUser, useUpdateUser } from "@/utils/api/users";
import { useEffect } from "react";
import { ROLES } from "@/constants/roles";
import { LINKS } from "@/constants/links";

export const User = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { notification } = AntApp.useApp();
    const navigate = useNavigate();
    const { data: user } = useGetUser({ id: id || '' }, [], {
      enabled: !!id,
    });

    const { mutate: updateUser } = useUpdateUser();
    const { mutate: createUser } = useCreateUser();

    useEffect(() => {
      if (!id) {
        form.resetFields();
      } else if (user) {
        form.setFieldsValue(user);
      }
    }, [user, form, id]);


    const handleFinish = () => {
      if (id) {
        updateUser({ id, requestBody: form.getFieldsValue() },
          {
            onSuccess: () => {
              notification.success({
                message: 'Пользователь успешно обновлен',
                duration: 4,
              });
              navigate(LINKS.USERS.path);
            }
          }
        );
      } else {
        createUser({ requestBody: form.getFieldsValue() },
          {
            onSuccess: () => {
              notification.success({
                message: 'Пользователь успешно создан',
                duration: 4,
              });
              navigate(LINKS.USERS.path);
            }
          }
        );
      }
    };

    return (
        <UserContent>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
          >
            <Flex className="user-form-fields">
            <Form.Item
              className="half-width"
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Пожалуйста, введите email' },
                { type: 'email', message: 'Некорректный формат email' }
              ]}
            >
              <Input placeholder="email@example.com" />
            </Form.Item>
            
            <Form.Item
              className="half-width"
              name="name"
              label="Имя"
            >
              <Input placeholder="Имя пользователя" />
            </Form.Item>
            
            <Form.Item
              className="half-width"
              name="login"
              label="Логин"
              rules={[{ required: true, message: 'Пожалуйста, введите логин' }]}
            >
              <Input placeholder="Логин пользователя" />
            </Form.Item>
            
            <Form.Item
              name="roles"
              label="Роль"
              className="half-width"
              rules={[{ required: true, message: 'Пожалуйста, выберите роль' }]}
            >
              <Select
                mode="multiple"
                placeholder="Выберите роли пользователя"
                options={Object.values(ROLES).map((role) => ({
                  value: role,
                  label: role
                }))}
              />
            </Form.Item>
            
            <Form.Item
              name="isVerified"
              valuePropName="checked"
            >
              <Checkbox>Верифицирован</Checkbox>
            </Form.Item>
            </Flex>
            <Flex className="user-actions">
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
              
              {id && (
                <Flex gap={16}>
                  <Button type="primary" danger>Заблокировать</Button>
                  <Button type="primary" danger>Удалить</Button>
                </Flex>
              )}
            </Flex>
          </Form>
        </UserContent>
    );
}