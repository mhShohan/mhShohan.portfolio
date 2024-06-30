export interface ITechnology {
  _id: string;
  name: string;
  image: string;
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