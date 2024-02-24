"use client";
import { LinkList } from "@components";
import styles from "./Footer.module.scss";
import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {FOOTER_LINKS.map((data, i) => (
        <LinkList key={`LINK_LIST_${i}`} data={data} />
      ))}
      <div className={styles.countryMenu}>
        United States
        <Image
          width={15}
          height={10}
          src={require("@images/chevron-down-right.png")}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
