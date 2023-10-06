import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // NaverProvider({
    //   clientId: process.env.NAVER_CLIENT_ID,
    //   clientSecret: process.env.NAVER_SECRET,
    // }),
    KakaoProvider({
      clientId: process.env.REACT_APP_KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.REACT_APP_KAKAO_SECRET ?? "",
    }),
  ],
  //pages에, 로그인 화면의 경로를 지정
  pages: {
    signIn: "/Login",
  },
};

export default NextAuth(authOptions);
