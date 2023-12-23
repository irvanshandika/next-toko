/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ProdukAwal } from "@data/product";

function Product() {
  const items = useMemo(() => ProdukAwal, []);
  
  return (
    <>
      <section id="product" className="z-0 mt-4 my-10">
        <div className="flex flex-col items-center justify-center w-full h-full py-10">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold text-center text-gray-800">Produk Kami</h1>
              <div className="flex flex-col items-center justify-center w-full h-full mt-5">
                <div className="flex gap-3 md:grid-cols-1">
                  {items.map((item) => (
                    <Card key={item.id} className="w-full h-full bg-white">
                      <CardHeader>
                        <Image src={item.image} width={200} height={200} />
                      </CardHeader>
                      <CardBody>
                        <h4 className="text-lg font-bold text-center text-gray-800">{item.title}</h4>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
