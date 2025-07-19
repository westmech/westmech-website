"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Slide,
  useScrollTrigger,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../button/Button";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const location = usePathname();
  const [active, setActive] = useState(`/${String(location).split("/")[1]}`);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigationItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Programs", url: "/programs" },
    { title: "Blog", url: "/blog" },
    { title: "Members Portal", url: "/members-portal" },
  ];

  useEffect(() => {
    setActive(`/${String(location).split("/")[1]}`);
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (url) => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ p: 2 }}>
        <div className="relative w-40 h-14 mx-auto">
          <Image
            src="/nav/westmech logo.svg"
            alt="western mechatronics logo"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.title}
            component="a"
            href={item.url}
            onClick={() => handleNavigation(item.url)}
            sx={{
              color: active === item.url ? "black" : "#939393",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button type="primary">
          Register Now
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <Box
          sx={{
            position: "fixed",
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1100,
            width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
            maxWidth: "1200px",
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: "rgba(244, 244, 246, 0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)",
              borderRadius: "50px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              overflow: "hidden",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between", height: 64, px: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <div className="relative w-32 h-10">
                  <Image
                    src="/nav/westmech logo.svg"
                    alt="western mechatronics logo"
                    style={{ objectFit: "contain" }}
                    fill
                  />
                </div>
              </Box>

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {navigationItems.map((item) => (
                    <Button
                      type="text"
                      key={item.title}
                      component="a"
                      href={item.url}
                      sx={{
                        color: active === item.url ? theme.palette.text.primary : theme.palette.text.secondary,
                        textTransform: "none",
                        fontSize: "0.9rem",
                        borderRadius: "20px",
                        px: 2,
                        py: 1,
                        "&:hover": {
                          backgroundColor: "rgba(1, 127, 224, 0.1)",
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Box>
              )}

              {!isMobile && (
                <Button
                  type="primary"
                  sx={{
                    fontSize: '1rem',
                    minWidth: "120px",
                  }}
                >
                  Register Now
                </Button>
              )}

              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    mr: 0, 
                    color: "black",
                    "&:hover": {
                      backgroundColor: "rgba(1, 127, 224, 0.1)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box sx={{ height: 96 }} />
    </>
  );
};

export default Navbar; 