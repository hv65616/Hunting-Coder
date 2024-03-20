import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${styles.grid} ${inter.className}`}>
      <Link href="/">
        <h2 className={styles.card}>
          Home <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/about">
        <h2 className={styles.card}>
          About <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/blogs">
        <h2 className={styles.card}>
          Blogs <span>-&gt;</span>
        </h2>
      </Link>

      <Link href="/contact">
        <h2 className={styles.card}>
          Contact <span>-&gt;</span>
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
