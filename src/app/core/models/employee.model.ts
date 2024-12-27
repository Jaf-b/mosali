export interface Employee {
  id?: string;
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
