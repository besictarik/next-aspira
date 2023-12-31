import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./utils/supabase/middleware";

export const middleware = async (request: NextRequest) => {
  const { supabase, response } = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Here user exists, so we can continue.
  // if (
  //   user?.user_metadata?.role === "admin" &&
  //   request.nextUrl.pathname !== "/login"
  // ) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return response;
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
