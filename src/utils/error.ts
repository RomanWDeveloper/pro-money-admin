import { AxiosError } from 'axios';
import { isRouteErrorResponse } from 'react-router-dom';
import { isDevMode } from '@/configs/mode';
import { ApiError } from '@/generated-api/requests';

type ApiErrorType = {
    message: string;
    name?: string;
    status?: number;
    statusText?: string;
};

type ErrorBodyType = {
    message: string;
    statusCode: number;
};

const isErrorBody = (body: unknown): body is ErrorBodyType => {
    return (
        !!body &&
        typeof body === 'object' &&
        'message' in body &&
        typeof body.message === 'string' &&
        'statusCode' in body &&
        typeof body.statusCode === 'number'
    );
};

export const errorNormalize = (error: unknown): ApiErrorType => {
    if (isRouteErrorResponse(error)) {
        isDevMode &&
            // eslint-disable-next-line no-console
            console.error('Ошибка RouteErrorResponse: ', error.data);

        return {
            message: error.data,
            status: error.status,
            statusText: error.statusText,
        };
    }

    if (error instanceof ApiError) {
        isDevMode &&
            // eslint-disable-next-line no-console
            console.error('Ошибка instanceof ApiError: ', error.message ?? error.message);

        if (isErrorBody(error.body)) {
            
            return {
                message: error.body.message,
                status: error.body.statusCode,
                // statusText: error.body.status,
            };
        }

        return {
            message: error.message,
            status: error.status,
            statusText: error.message,
        };
    }

    if (error instanceof AxiosError) {
        isDevMode &&
            // eslint-disable-next-line no-console
            console.error(
                'Ошибка instanceof AxiosError: ',
                // (error.response?.data as BaseResponse).message ?? error.message,
            );

        if (error.response?.status === 500) {
            return {
                message: 'Внутренняя ошибка сервера. Код ошибки: 500',
                status: error.response?.status,
                statusText: error.message,
            };
        }

        return {
            message:  error.message,
            status: error.response?.status,
            statusText: error.message,
        };
    }

    if (error instanceof Error) {
        // eslint-disable-next-line no-console
        isDevMode && console.error('Ошибка instanceof Error: ', error.message);

        return {
            name: error.name,
            message: error.message,
        };
    }

    // eslint-disable-next-line no-console
    isDevMode && console.error('Ошибка instanceof unknown: ', error);

    return {
        message: error as string,
    };
};
