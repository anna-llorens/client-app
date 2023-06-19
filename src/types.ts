export enum Routes {
  Home = "/home",
  ClientSide = "/client-side",
  ServerSide = "/server-side",
  StaticRendering = "/static-rendering",
  Logout = "./",
}

export type Country = {
  code: string;
  name: string;
  emoji: string;
};

export type User = {
  username: string;
  expiredAt: number;
  accessToken: string;
  avatar?: string;
  id: string;
};
