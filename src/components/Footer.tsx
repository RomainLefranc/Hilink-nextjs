import { COMMUNITY_LINKS, CONTACT_INFOS, LEARN_MORE_LINKS, SOCIAL_LINKS } from "@/src/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/hilink-logo.svg";

function Footer() {
  return (
    <footer className="mx-auto mb-24 flex w-full h-full max-w-[1440px] flex-col gap-14 px-6 lg:px-20 3xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-[30px]">
        <Link href="/" className="sm:col-span-2 md:col-span-4 lg:col-span-1">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">Learn More</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {LEARN_MORE_LINKS.map((link) => (
              <li key={link.text}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">Our Community</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.text}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">Contact Us</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {CONTACT_INFOS.map((link) => (
              <li key={link.label}>
                <div className="flex gap-4 md:flex-col lg:flex-row">
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="font-semibold whitespace-nowrap text-blue-70">{link.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">Social</h4>
          <ul className="regular-14 flex gap-4 text-gray-30">
            {SOCIAL_LINKS.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <Image src={link.icon} alt={link.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border bg-gray-20" />
      <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
    </footer>
  );
}

export default Footer;
