import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorMode,
  IconButton,
  AvatarBadge,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { FaSun, FaMoon, FaUser, FaBell } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const Upperbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [search, setSearch] = useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toast = useToast();

  return (
    <Flex
      justifyContent={isMobile ? "" : "space-between"}
      alignItems="center"
      p={isMobile ? 2 : 4}
      position="sticky"
      top={0}
      zIndex="100"
      backgroundColor={colorMode === "light" ? "#ffffff" : "#1a202c"}
    >
      <Flex>
        <Heading
          color={colorMode === "light" ? "black" : "white"}
          size={isMobile ? "sm" : "xl"}
          fontFamily="Sansita Swashed"
        >
          vccm!!
        </Heading>
      </Flex>
      <form>
        <Tooltip label="Search projects" openDelay={400}>
          <InputGroup mx={isMobile ? 2 : 8} width={isMobile ? "40vw" : "50vw"}>
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search projects"
              variant="filled"
              value={search}
            />
          </InputGroup>
        </Tooltip>
      </form>
      {colorMode === "light" ? (
        <Tooltip label="Dark mode" openDelay={400}>
          <IconButton icon={<FaMoon />} aria-label="Dark mode" />
        </Tooltip>
      ) : (
        <Tooltip label="Light mode" openDelay={400}>
          <IconButton icon={<FaSun />} aria-label="Light mode" />
        </Tooltip>
      )}
      <Popover>
        <PopoverTrigger>
          <IconButton icon={<FaBell />} aria-label="Notification" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Notifications!</PopoverHeader>
          <PopoverBody>You have no new notifications.</PopoverBody>
        </PopoverContent>
      </Popover>
      <Tooltip label="Create new post" openDelay={400}>
        <Button
          leftIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          borderRadius={24}
          padding={6}
          display={isMobile ? "none" : "flex"}
        >
          Create
        </Button>
      </Tooltip>
      <Menu>
        <MenuButton>
          <Tooltip label="bryan" openDelay={400}>
            <Avatar cursor="pointer" src="https://ibb.co/F0PT1kC" />
          </Tooltip>
        </MenuButton>
        <MenuList>
          <MenuItem gap="0.7rem">
            <FaUserCircle size="1.4rem" />
            Your profile
          </MenuItem>
          <MenuItem gap="0.7rem">
            <AiFillStar size="1.4rem" />
            Star on github
          </MenuItem>
          <MenuItem gap="0.7rem">
            <IoLogOut size="1.4rem" />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Upperbar;
