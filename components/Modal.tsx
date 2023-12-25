import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import MaterialSymbolsShoppingCartSharp from "@icons/MaterialSymbolsShoppingCartSharp";
import EpInfoFilled from "@icons/EpInfoFilled";
import { useRouter } from "next/navigation";

const ModalComponents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Button onPress={onOpen} className="bg-[#F2BED1] hover:bg-[#FDCEDF] px-4 py-2 rounded-md mr-2 text-black" endContent={<EpInfoFilled className="ml-1" />}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-[#F8E8EE] rounded-md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.</p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={() => router.push("")} className="bg-[#F2BED1] hover:bg-[#FDCEDF] px-4 py-2 rounded-md mr-2 text-black" endContent={<MaterialSymbolsShoppingCartSharp className="" />}>
                  Beli Sekarang
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponents;
