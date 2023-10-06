import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/point">about</Link>
    </nav>
    // <nav>
    //     <a href="/">home</a>
    //     <a href="/about">about</a>
    // </nav>
  );
}
