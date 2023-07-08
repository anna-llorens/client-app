export enum Routes {
  About = "./about",
  ClientSide = "/client-side",
  Home = "/home",
  Logout = "./",
  Profile = "./profile",
  ServerSide = "/server-side",
  StaticRendering = "/static-rendering",
  Orders = "/orders",
}

export const protectedRoutes = [
  Routes.Profile,
  Routes.ClientSide,
  Routes.ServerSide,
  Routes.StaticRendering,
];
export const authRoutes = [Routes.Logout];
export const publicRoutes = [
  Routes.About,
  Routes.Logout,
  Routes.StaticRendering,
];
