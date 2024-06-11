"use client";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../public/icons8-facebook-50.png";
import Instagram from "../../../public/icons8-instagram-50.png";
import Linkedin from "../../../public/icons8-linked-in-50.png";
import Twitter from "../../../public/icons8-twitterx-50.png";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="socialContainer">
      <Link href="https://www.facebook.com" className="single-link">
        <Image
          src={Facebook}
          alt="Facebook"
          width={30}
          height={30}
          className="single-link"
        />
      </Link>
      <Link href="https://www.twitter.com">
        <Image
          src={Twitter}
          alt="Twitter"
          width={30}
          height={30}
          className="single-link"
        />
      </Link>
      <Link href="https://www.linkedin.com">
        <Image
          src={Linkedin}
          alt="LinkedIn"
          width={30}
          height={30}
          className="single-link"
        />
      </Link>
      <Link href="https://www.instagram.com">
        <Image
          src={Instagram}
          alt="Instagram"
          width={30}
          height={30}
          className="single-link"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
