import { Flex, Button } from "antd"


export const User = () => {
    return (
        <Flex style={{ height: '100%' }} vertical>
            <Button style={{ marginTop: 'auto', margin: 'auto auto 0', width: '150px' }} type="primary" danger>Выйти</Button>
        </Flex>
    )
}