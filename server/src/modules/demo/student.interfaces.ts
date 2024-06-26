import { Types } from 'mongoose';
import { TStudentStatus } from '../interfaces';

export interface IStudent {
  studentId: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth?: string;
  fatherName?: string;
  motherName?: string;
  avatar?: string;
  session?: string;
  phone?: string;
  hallId?: Types.ObjectId;
  facultyId?: Types.ObjectId;
  departmentId?: Types.ObjectId;
  educationalQualifications?: Array<IEducationalQualification>;
  presentAddress?: IAddress;
  permanentAddress?: IAddress;
  nationality?: string;
  religion?: string;
  status: TStudentStatus;
  isVerified: boolean;
}

export interface IEducationalQualification {
  name: string;
  passingYear: string;
  institute: string;
  board: string;
  roll: string;
  GPA: number;
  isDelete?: boolean;
}

export interface IAddress {
  village: string;
  subDistrict: string;
  postOffice: string;
  district: string;
  zipCode: string;
}
