import React from "react";
import Logo from "@img/logo.ico";
import Image from "next/image";
import { Link } from "@nextui-org/react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#FFC5C5]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <Image src={Logo} className="lg:w-14 lg:h-14 w-12 h-12 rounded-full" alt="MayBeautySkin Logo" />
                <span className="self-center text-2xl font-semibold ml-2 whitespace-nowrap">May Beauty Skin</span>
              </a>
              <div className="grid mt-4 sm:justify-center sm:mt-0">
                <p>Jln Timoho No. 129, Gondokusuman, Kota </p>
                <p>Yogyakarta, D.I Yogyakarta 55221</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                <ul className="text-black font-medium">
                  <li className="mb-4">
                    <a href="https://ant.design/" className="hover:underline" target="_blank">
                      Ant Design
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline" target="_blank">
                      Tailwind CSS
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://nextui.org/" className="hover:underline" target="_blank">
                      Next UI
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                <ul className="text-black font-medium">
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/maybeauty.skin/" className="hover:underline" target="_blank">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline" target="_blank">
                      TikTok
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                <ul className="text-black font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline" target="_blank">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline" target="_blank">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-black sm:texblack">
              <span className="font-roboto">©</span>
              {year}
              <a href="https://www.irvanshandika.my.id/" className="hover:underline ml-1">
                Irvan Dev
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
