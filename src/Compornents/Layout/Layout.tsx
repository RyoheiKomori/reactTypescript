import { FC, memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  Button,
  useDisclosure
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mr={8}
      >
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon _hover={{ cursor: "pointer" }} />}
          size="sm"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerOverlay>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">ダッシュボード</Button>
              <Button w="100%">商品カタログ</Button>
              <Button w="100%">製造</Button>
            </DrawerBody>
          </DrawerOverlay>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
