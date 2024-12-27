export interface Employee {
  fullname: string;
  email: string;
  phone: string;
  sexe: string;
  adress: {
    street: string;
    city: string;
    state?: string;
    country: string;
  };
  hobbies: string[];
}
