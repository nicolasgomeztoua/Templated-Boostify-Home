import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";

import Theme, { theme } from "@pagerland/themes/src/RealEstate";
import {
  Location,
  Navbar,
  Welcome,
} from "@pagerland/themes/src/RealEstate/containers";
import {
  About,
  FAQ,
  Features,
  Screenshots,
} from "@pagerland/themes/src/MobileApp/containers";
import preview from "@pagerland/themes/src/RealEstate/assets/preview.jpg";

import Team from "@pagerland/themes/src/Corporate/containers/Team";
import SEO from "../components/SEO";
import Offer from "@pagerland/themes/src/Corporate/containers/Offer";

const RealEstate = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Real Estate" />

    <Navbar />
    <Welcome name="welcome" />
    <About name="about" />

    <Features name="features" />
    <Screenshots name="screenshots" />
    <Location name="location" />
    <Team name="team" />
    <FAQ name="faq" />
    <Offer name="offer" />
  </Theme>
);

RealEstate.propTypes = {
  url: PropTypes.string,
};

RealEstate.defaultProps = {
  url: "https://pager.land/next/",
};

export default RealEstate;
