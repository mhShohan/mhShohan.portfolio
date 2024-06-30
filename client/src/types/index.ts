export interface ITechnology {
  _id: string;
  name: string;
  image: string;
  createAt?: string;
  updateAt?: string;
  isDeleted?: string;
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

// "techStacks": {
//             "languages": [],
//             "databases": [],
//             "backend": [],
//             "frontend": [],
//             "tools": []
//         },
//         "_id": "667efc3a0f83a8bcab31e3dc",
//         "name": "Mehdi Hasan Shohan",
//         "title": "Full-stack Developer",
//         "email": "mehdihasanshohan25@gmail.com",
//         "password": "$2b$10$BS38yY5rgfdljxruZsU3z.bHT3OyJTXW3tdmm6r62ikwyU4WJk.LO",
//         "bio": "bio",
//         "description": "description",
//         "resume": "resume",
//         "contactNo": "+8801721146655",
//         "address": "shohan123",
//         "viewPersonalInterest": true,


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
  techStacks: {
    languages: ITechnology[];
    databases: ITechnology[];
    backend: ITechnology[];
    frontend: ITechnology[];
    tools: ITechnology[];
  };
}