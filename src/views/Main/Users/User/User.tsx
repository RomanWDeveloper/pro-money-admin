import { useParams } from "react-router-dom";
import { fakeUsersData } from "../Users";
import { Button, Col, Flex, Image, Rate, Row, Statistic } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { UserContent } from "./style";


export const User = () => {
    const { id } = useParams();
    const user = fakeUsersData.find(user => user.id === id);


    return (
        <UserContent>
          <Flex gap={16}>
              <Image
                  width={200}
                  src={user?.picture.large}
              />
              <Flex vertical gap={16}>
                <h1>{user?.name?.first} {user?.name?.last}</h1>
                <div className="user-info">
                  <div><Rate allowHalf defaultValue={2.5} disabled /> <span>2.5</span></div>
                  <div>
                    <span>дата регистрации: </span>
                    <span>12.03.2024</span>
                  </div>
                </div>
              </Flex>
            </Flex>

            <Flex vertical gap={16}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="подписчики" value={112893}  />
                </Col>
                <Col span={12}>
                  <Statistic title="просмотры" value={112893} precision={2} />
                </Col>
              </Row>
                <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="лайки" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                  <Statistic title="количество постов" value={93} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="последний пост" value={'24.03.2025'} />
                </Col>
                <Col span={12}>
                  <Statistic title="активность" value={'высокая'} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title="статус" value={user?.status==='confirmed' ? 'подтвержден' : 'не подтвержден'} />
                </Col>
                <Col span={12}>
                  <Statistic title="наличие премиума" value={'нет'} />
                </Col>
              </Row>
            </Flex>
            <Flex className="user-actions">
               <Button type="primary">Подтвердить</Button>
                <Flex gap={16}>
                  <Button type="primary" danger>Заблокировать</Button>
                  <Button type="primary" danger>Удалить</Button>
                </Flex>
            </Flex>
        </UserContent>
    )
}