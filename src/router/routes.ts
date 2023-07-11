export enum Routes {
  Logout = "./",
  About = "./about",
  Home = "/home",
  Profile = "/profile",
  Orders = "/orders",
  ClientSide = "/dev/client-side",
  ServerSide = "/dev/server-side",
  StaticRendering = "/dev/static-rendering",
  Grid = "/dev/grid",
}

export const protectedRoutes = [
  Routes.Profile,
  Routes.ClientSide,
  Routes.ServerSide,
  Routes.StaticRendering,
  Routes.Grid,
];
export const authRoutes = [Routes.Logout];
export const publicRoutes = [
  Routes.About,
  Routes.Logout,
  Routes.StaticRendering,
];
