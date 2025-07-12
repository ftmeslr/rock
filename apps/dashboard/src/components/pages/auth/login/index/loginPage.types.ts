export interface LoginInputs {
  username: string;
  password: string;
}

export interface LoginResponseProps {
  data: { auth_key: string };
  message: string;
}
