import { THEMES } from "@/constants";
import { ROLES } from "@/constants/roles";

export type ThemeType = (typeof THEMES)[number]['id'];
export type RoleType = (typeof ROLES)[keyof typeof ROLES];

export type Project = {
    title: string;
    category: string;
    issues_count_in_category: number;
    completed_issues_in_category: number;
    deadline: string;
    priority_value: number;
    assigned: string;    
}

export type Server = {
    id: number;
    name: string;
    status: string;
    type: string;
}