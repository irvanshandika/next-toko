import Image from "next/image";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 mb-8">Jika Ada Yang Ingin Ditanyakan? Hubungi Kami</p>
          <a href="https://api.whatsapp.com/send?phone=6285174306926" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
            {" "}
            {/* Added flex and items-center to the <a> tag */}
            Chat on
            <span className="ml-2">
              {" "}
              {/* Added margin for spacing */}
              <Image src="https://api.iconify.design/logos:whatsapp.svg" alt="Whatsapp" width={100} height={100} />
            </span>
          </a>
          <h2 className="text-3xl font-bold my-4">Atau</h2>
          <p className="text-gray-600 mb-8">Kunjungi Toko Online Kami</p>
          <a href="https://shopee.co.id/maybeauty.skin" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded flex items-center">
            {" "}
            {/* Added flex and items-center to the <a> tag */}
            Kunjungi Toko Kami
            <span className="ml-2">
              {" "}
              {/* Added margin for spacing */}
              <Image src="https://api.iconify.design/simple-icons:shopee.svg" alt="Whatsapp" width={20} height={20} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
