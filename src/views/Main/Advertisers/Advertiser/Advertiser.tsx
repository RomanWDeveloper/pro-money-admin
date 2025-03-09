import { useParams } from "react-router-dom";
import { Button, Flex } from "antd";
import { PostContent } from "./style";
import { fakePostsData } from "../Advertisers";

export const Advertiser = () => {
    const { id } = useParams();
    const post = fakePostsData.find(post => post.id === id);


    return (
        <PostContent>
          <Flex gap={16}>
              <Flex vertical gap={16}>
                <h1>{post?.title}</h1>
                <div className="user-info">
                  <div>
                    <span>дата создания: </span>
                    <span>12.03.2024</span>
                  </div>
                </div>
              </Flex>
            </Flex>
            <Flex vertical gap={16}>
                content
            </Flex>
            <Flex className="user-actions">
                <Flex gap={16}>
                  <Button type="primary">Скрыть</Button>
                  <Button type="primary" danger>Удалить</Button>
                </Flex>
            </Flex>
        </PostContent>
    )
}