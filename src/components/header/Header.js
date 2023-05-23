import './header.css';
import {
  Box,
  Container,
  MenuItem,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  Link,
  IconButton,
  HStack,
  Flex,
  MenuDivider,
  Stack,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../../assets/images/logo.jpg";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Links = ["Dashboard", "Projects", "Team"];



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Box as="header">
      <Container maxW={"container.xl"}>
      <HStack
          px={0}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
<NavLink to = "/">
            {<img className="logo-img" src = { Logo } alt="Little Lemon logo" />}
        </NavLink>
        <nav className='nav'>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
            </ul>

         
        </nav>

        <IconButton className='IconButton'
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                onClick={isOpen ? onClose : onOpen}
              />
            </HStack>
        <div style={{display:'none'}}>
          <Box px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              
              <HStack spacing={8} alignItems={"space-between"} style={{flex:1}}>
                <Box>Logo</Box>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </HStack>
              </HStack>
            
            </Flex>

            {isOpen ? (
              <Box pb={4} display={{ md: "none" }}>
                <Stack as={"nav"} spacing={4}>
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Box>

          <Box p={4}>Main Content Here</Box>
        </div>
      </Container>
    </Box>
  );
};

export default Header;
