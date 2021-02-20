import { User } from "./user.model";

export class Login {
  user!: User;
  payload!: Payload;
}

export class Payload {
  type!: string;
  token!: string;
  refresh_token!: string;
}
