import { NextRequest, NextResponse } from "next/server";

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */
export const config = {
  matcher: ["/post"],
};

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/post") {
    const basicAuth = req.headers.get("Authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, password] = atob(authValue).split(":");

      if (
        user === process.env.NEXT_PUBLIC_BASIC_AUTH_USER &&
        password === process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
      ) {
        return NextResponse.next();
      }

      return NextResponse.json(
        { error: "Invalid credentials" },
        {
          headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
          status: 401,
        }
      );
    } else {
      return NextResponse.json(
        {
          ユーザー名とパスワードを入力してください:
            "Please enter your username and password",
        },
        {
          headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
          status: 401,
        }
      );
    }
  }
  return NextResponse.next();
}
