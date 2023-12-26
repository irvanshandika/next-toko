/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { ProdukAwal } from "@data/product";
import More from "@icons/IconParkOutlineMoreThree";
import Image from "next/image";

function Product() {
  const items = useMemo(() => ProdukAwal, []);
  const router = useRouter();
  return (
    <>
      <section id="product" className="z-0 my-10">
        <h5 className="text-center text-lg">Produk</h5>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-3">
          {items.map((item) => (
            <Card key={item.id} className="m-4 bg-white rounded-md">
              <CardHeader>
                <Image alt={item.alt} src={item.image} width={250} height={250} className="rounded-md" />
              </CardHeader>
              <CardBody>
                <h4 className="text-center">{item.title}</h4>
                <div className="flex justify-center items-center mt-2">
                  <Button className="bg-[#F2BED1] hover:bg-[#FDCEDF] px-4 py-2 rounded-md text-black" onClick={() => router.push(`${item.url}`)} endContent={<More className="ml-1" />}>
                    Check Detail
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Product;
