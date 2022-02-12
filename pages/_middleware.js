import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token exists, if user loggedIn.
    // To check accessToken with Jwt_secret, whether it is right or wrong..
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    
    const { pathname } = req.nextUrl;

    // Allow the requests, if the following is true..
    // 1) when there is a request for next-auth session & provider fetching..
    // 2) the token Exists

    if (pathname.includes("/api/auth") || token) {
        return NextResponse.next();
    }

    // Redirect them to login page, if they dont have token AND are requesting a protected route!
    // Only unprotected route => /login
    if (!token && pathname !== "/login") {
        return NextResponse.redirect("/login");
    }
}