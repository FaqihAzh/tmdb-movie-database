import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
