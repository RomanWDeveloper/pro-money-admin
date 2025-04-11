import { THEMES } from "@/constants/themes";

export type ThemeType = (typeof THEMES)[number]['id'];

// users
export type UserSortOption = 'email' | 'createdAt' | 'login' | 'name';
export type UserSortDirection = 'asc' | 'desc';
export type UserSortOptions = { label: string; value: UserSortOption }[];