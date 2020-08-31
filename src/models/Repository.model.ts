export interface OwnerModel {
    login: string;
    avatar_url: string;
}

export interface RepositoryModel {
    full_name: string;
    description: string;
    stargazers_count?: number;
    forks_count?: number;
    open_issues_count?: number;
    owner: OwnerModel;
}  