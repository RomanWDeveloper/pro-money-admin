export const BASE_URL = import.meta.env.VITE_API_URL;
const METRIC_URL = import.meta.env.VITE_METRIC_URL;
const FOLDER_ID = import.meta.env.VITE_YANDEX_FOLDER_ID;
export const API = {
    projects: `${BASE_URL}/projects/`,
};

export const METRIC_API = {
    hostslist: `${METRIC_URL}/metrics/labels/hosts/values?folderId=${FOLDER_ID}`,
    datalist: `${METRIC_URL}/data/read?folderId=${FOLDER_ID}`,
};