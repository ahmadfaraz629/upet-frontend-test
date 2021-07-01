export interface IRoute {
  path: string;
  component: any;
  isPrivate: boolean;
}

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  phoneNumber: string;
}
