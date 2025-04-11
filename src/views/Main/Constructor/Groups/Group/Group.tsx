import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, App as AntApp } from "antd";
import { useGetArticleGroup, useCreateArticleGroup, useUpdateArticleGroup } from "@/hooks/api/constructor";
import { useEffect } from "react";
import { CONSTRUCTOR } from "@/constants/links/constructor";

export const Group = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { data: group } = useGetArticleGroup({ id: id || '' }, [], {
    enabled: !!id,
  });
  const { notification } = AntApp.useApp();
  const { mutate: updateGroup } = useUpdateArticleGroup();
  const { mutate: createGroup } = useCreateArticleGroup();

  useEffect(() => {
    if (group) {
      form.setFieldsValue(group);
    }
  }, [group, form]);

  const handleFinish = () => {
    if (id) {
      updateGroup({ id, requestBody: form.getFieldsValue() }, {
        onSuccess: () => {
          notification.success({
            message: 'Группа успешно обновлена',
          });
          navigate(CONSTRUCTOR.GROUP.fullPath);
        },
      });
    } else {
      createGroup({ requestBody: form.getFieldsValue() }, {
        onSuccess: () => {
          notification.success({
            message: 'Группа успешно создана',
          });
          navigate(CONSTRUCTOR.GROUP.fullPath);
        },
      });
    }
  };

  return <Form form={form} layout="vertical" onFinish={handleFinish}>
    <Form.Item required={true} label="Название" name="name">
      <Input />
    </Form.Item>
    <Form.Item required={true} label="Описание" name="description">
      <Input />
    </Form.Item>
    <Form.Item
      name="isActive"
      valuePropName="checked"
      initialValue={false}
    >
      <Checkbox>Активный</Checkbox>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
    </Form.Item>
  </Form>;
};