import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";

// import { useAuth } from "@/firebase/context";
// import { db, auth } from "@/config/firebase";
// import { useCart } from "hooks/cart.hook";
import { useRouter } from "next/router";
// import MenuIcon from "@/icons/menu";

export default function Header() {
  const [showHeader, setShowHeader] = useState({
    transform: "translate3d(100vw, 0, 0)",
  });
  const [input, setInput] = useState(null);
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">home</Link>
        <Link href="/HomePage">HomePage</Link>
        <Link href="/Login">Login</Link>
        <Link href="/Join">Join</Link>
        <Link href="/Example">Example</Link>
        <div className={styles.rightContentMobile}>
          <div className={styles.profileContainer}></div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}></div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
          }
        />
      </div>
      <div className={styles.searchContainer}>
        <form
          onSubmit={() =>
            input &&
            typeof window !== "undefined" &&
            router.push(`/search/${input}`)
          }
        ></form>
      </div>
      <div className={styles.rightContent}></div>
    </nav>
  );
}
