"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between items-center h-[80px] bg-white shadow-md px-[50px]">
      <h1 className="text-3xl font-bold">LOGO</h1>
      <div>
        <Button
          className="text-black font-normal text-xl bg-gray-200 py-2 px-4 rounded-l"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Login
        </Button>
        <Menu
          className=""
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link href="/auth/sign-in/user">
            <MenuItem onClick={handleClose}>User Login</MenuItem>
          </Link>
          <Link href="/auth/sign-in/admin">
            <MenuItem onClick={handleClose}>Admin login</MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}