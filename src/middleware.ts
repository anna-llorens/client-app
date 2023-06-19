import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Routes } from "./router";
import router from "next/router";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;
  // if (!currentUser) {
  //   request.cookies.delete("currentUser");
  //   const response = NextResponse.redirect(new URL(Routes.Logout, request.url));
  //   response.cookies.delete("currentUser");
  //   return response;
  // }
  //   if (currentUser) {
  //     router.push("/home");
  //   }
}
