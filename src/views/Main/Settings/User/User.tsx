import { useExit } from "@/hooks/useExit";
import { Flex, Button, Modal } from "antd"

export const User = () => {
    const exit = useExit(true);
    const [modal, contextHolder] = Modal.useModal();

    return (
        <Flex style={{ height: '100%' }} vertical>
            <Button 
                style={{ marginTop: 'auto', margin: 'auto auto 0', width: '150px' }} 
                type="primary" 
                danger 
                onClick={() => {
                    modal.confirm({
                    title: 'Выход из системы',
                    content: 'Вы действительно хотите выйти?',
                    okText: 'Да, выйти',
                    cancelText: 'Отмена',
                    onOk: exit
                    });
                }}
                >
                Выйти
            </Button>
            {contextHolder}
        </Flex>
    )
}