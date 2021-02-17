import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import Link from "next/link";

interface HeaderProp {
  title: string;
  logged: boolean;
}

const Header = ({ title, logged }: HeaderProp) => {
  return (
    <header style={{ height: 70 }}>
      <AppBar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: 10,
          }}
        >
          <Toolbar>{title}</Toolbar>
          <Link href="/login">
            <Button title="LOGIN">{logged ? "LOGOUT" : "LOGIN"}</Button>
          </Link>
        </div>
      </AppBar>
    </header>
  );
};

export default Header;
