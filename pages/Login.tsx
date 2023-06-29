import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <>
      <div>login page</div>
      <button type="button" onClick={() => signIn("kakao")}>
        SignIn
      </button>
    </>
  );
}
