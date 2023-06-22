import { useRouter } from "next/router";
export default function Menu() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>detail</div>
    // <nav>
    //     <a href="/">home</a>
    //     <a href="/about">about</a>
    // </nav>
  );
}
