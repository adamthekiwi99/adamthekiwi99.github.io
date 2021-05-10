import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Intro from "../components/intro"
import ProductOneInfo from "../components/product-one-info"
import ProductTwoInfo from "../components/product-two-info"
import ProductThreeInfo from "../components/product-three-info"
import Contact from "../components/contact"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51IpY1nBH875LZID8M0nacoAqaWhAVv28QSmrEBjqeFCg96jEAdvSNuzvXiqy5OKTOiSuY5VBPSPsqFhLUs9VB79d000E0uQxjv');

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <Intro offset={0} factor={1} />
      <ProductOneInfo offset={1.25} factor={1} />
      <ProductTwoInfo offset={2} factor={1} />
      <ProductThreeInfo offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default IndexPage
