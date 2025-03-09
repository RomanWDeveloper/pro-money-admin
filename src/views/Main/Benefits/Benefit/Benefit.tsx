import { useParams } from "react-router-dom";
import { Button, Flex, Form, FormProps, Input, DatePicker, Upload, GetProp, UploadProps, UploadFile } from "antd";
import ImgCrop from 'antd-img-crop';
import { PostContent } from "./style";
import { BenefitType, fakeBenefitsData } from "../Benefits";
import { useState } from "react";

export const Benefit = () => {
    const { id } = useParams();

    let benefit: BenefitType = {
      id: '',
      title: '',
      description: '',
    };

    if (id) {
        const foundBenefit = fakeBenefitsData.find(benefit => benefit.id === id);
        benefit = foundBenefit || benefit;
    }

    const [fileList, setFileList] = useState<UploadFile[]>([    ]);

    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

    const onChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };

      const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


    type FieldType = {
      title?: string;
      image?: string;
      description?: string;
      start_date?: string;
      end_date?: string;
      enabled?: boolean;
    };

    const normFile = (e: any) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    return (
        <PostContent>
            <Form
              name="benefit"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Название"
                name="title"
                initialValue={benefit.title}
                rules={[{ required: true, message: 'Пожалуйста, введите название' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Описание" name="description" initialValue={benefit.description}>
                <TextArea rows={10} />
              </Form.Item>

              <Form.Item label="Срок действия">
                <RangePicker />
              </Form.Item>

              <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
                <ImgCrop rotationSlider>
                   <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChangeImage}
                    onPreview={onPreview}
                    maxCount={1}
                  >
                    {fileList.length < 1 && 'Загрузить изображение'}
                  </Upload>
                </ImgCrop>
              </Form.Item>
               
            <Flex className="user-actions">
                <Flex gap={16}>
                      <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                          Сохранить
                        </Button>
                    </Form.Item>
                  <Button type="primary" danger>Удалить</Button>
                </Flex>
            </Flex>
             </Form>
        </PostContent>
    )
}