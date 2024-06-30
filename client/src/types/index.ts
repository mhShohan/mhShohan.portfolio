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

// "liveSiteLink": "Path `liveSiteLink` is required.",
// "cover": "Path `cover` is required.",
// "featured": "Path `featured` is required.",
// "category": "Path `category` is required.",
// "description": "Path `description` is required.",
// "name": "Path `name` is required."

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