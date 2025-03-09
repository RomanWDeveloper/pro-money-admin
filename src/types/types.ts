export type ThemeType = 'dark' | 'light';



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