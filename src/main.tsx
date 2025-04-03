import { StyleProvider } from "@ant-design/cssinjs";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { setupAxiosParams } from "./configs/axios";
import { queryClient } from "./configs/queryClient";
import router from "./routes/router";
import "@/styles/index.css";
import { store } from "./store";
import { Provider } from "react-redux";

setupAxiosParams();
createRoot(document.getElementById("root")!).render(
	<StrictMode>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<StyleProvider layer>
					<RouterProvider router={router} />
				</StyleProvider>
			</QueryClientProvider>
		</Provider>
	</StrictMode>
);
