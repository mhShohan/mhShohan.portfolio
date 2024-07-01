export interface ITechnology {
  _id: string;
  name: string;
  image: string;
  visible?: boolean
  createAt?: string;
  updateAt?: string;
  isDeleted?: boolean;
}


export interface IEducation {
  _id: string;
  institute: string;
  certificate: string;
  startDate: Date;
  endDate: Date;
}

export interface IExperience {
  _id: string;
  title: string;
  organization: string;
  link: string;
  responsibilities: string[];
  startDate: Date;
  endDate: Date;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  category: IProjectCategory;
  featured: boolean;
  features: string[];
  technologies: ITechnology[];
  cover: string;
  repositoryLink: {
    source_code: string;
    client_side_code: string;
    server_side_code: string;
  };
  liveSiteLink: string;
}

export type IProjectCategory = 'Frontend' | 'Backend' | 'Full-stack';


export interface IBlog {
  _id: string;
  title: string;
  text: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;

}



export interface IProfile {
  _id: string;
  name: string;
  title: string;
  email: string;
  bio: string;
  description: string;
  resume: string;
  contactNo: string;
  address: string;
  viewPersonalInterest: boolean;
  socialLinks?: {
    facebook?: string;
    gitLab?: string;
    github?: string;
    leetcode?: string;
    linkedin?: string;
    twitter?: string;

  }
  techStacks: {
    languages: ITechnology[];
    databases: ITechnology[];
    backend: ITechnology[];
    frontend: ITechnology[];
    tools: ITechnology[];
  };
}