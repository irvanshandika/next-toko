/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
"use client";
import React, { useMemo } from "react";
import { ProdukPaketKecantikan } from "@data/product";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter, Button, Image, useDisclosure, Modal, ModalHeader, ModalBody, ModalFooter, ModalContent, Link } from "@nextui-org/react";
import MaterialSymbolsShoppingCartSharp from "@icons/MaterialSymbolsShoppingCartSharp";
import EpInfoFilled from "@icons/EpInfoFilled";

function PaketKecantikan() {
  const items = useMemo(() => ProdukPaketKecantikan, []);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="z-0 my-10">
        <div className="flex lg:flex-wrap flex-col justify-center items-center gap-3">
          {items.map((item) => (
            <Card className="m-4 bg-white rounded-md" key={item.id}>
              <CardHeader className="flex justify-center">
                <Image src={item.image} width={300} height={300} className="rounded-md" />
              </CardHeader>
              <CardBody>
                <h4 className="text-center text-sm">{item.title}</h4>
              </CardBody>
              <CardFooter className="flex justify-center">
                <div className="mt-2">
                  <Button onPress={onOpen} className="bg-[#F2BED1] hover:bg-[#FDCEDF] px-4 py-2 rounded-md mr-2 text-black" endContent={<EpInfoFilled className="ml-1" />}>
                    Detail
                  </Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-[#F8E8EE] rounded-md">
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">{item.title}</ModalHeader>
                          <ModalBody>
                            <p>{item.deskripsi1}</p>
                            <p>{item.deskripsi2}</p>
                          </ModalBody>
                          <ModalFooter>
                            <Button className="bg-red-200 hover:bg-red-100 text-black px-4 py-2 rounded-md" onPress={onClose}>
                              Close
                            </Button>
                            <Link href={item.url} target="_blank" className="bg-[#F2BED1] hover:bg-[#FDCEDF] px-4 py-2 rounded-md mr-2 text-black">
                              Beli Sekarang
                            </Link>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default PaketKecantikan;
