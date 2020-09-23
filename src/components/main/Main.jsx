import React from "react";

import "./styles.css";
import Head from "../../components/head/Head";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import Contacts from "../../components/contacts/Contacts";
import Intro from "../../components/intro/Intro";
import Faq from "../../components/faq/Faq";
import Booking from "../../components/booking/Booking";

function Main() {
  return (
    <>
      <Head />
      <Intro />
      <About />
      <Work />
      <Faq />
      <Booking />
      <Contacts />
    </>
  );
}

export default Main;
