import { Link } from "react-router-dom";
import { NotAllowedWrapper } from "./style";

export const NotAllowed = () => {
    return (
        <>
            <NotAllowedWrapper
                message="Доступ запрещен"
                description="Извините, но вечеринка только для VIP-гостей."
                type="error"
                action={
                <Link to={"/auth/"}>
                    Войти в другой аккаунт
                </Link>
                }
            />
        </>
    );
};