import { OpenAPI } from "../generated-api/requests/core/OpenAPI";

export function configureApi() {
	// Применение настроек из переменных окружения
	if (import.meta.env.VITE_API_BASE_URL) {
		OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;
	}

	// Преобразуем строку в boolean
	const withCredentials = import.meta.env.VITE_API_WITH_CREDENTIALS === "true";
	OpenAPI.WITH_CREDENTIALS = withCredentials;

	console.log("API настроен с параметрами:", {
		BASE: OpenAPI.BASE,
		WITH_CREDENTIALS: OpenAPI.WITH_CREDENTIALS,
	});
}
