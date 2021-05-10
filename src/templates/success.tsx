import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Success from "../components/success"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IpY1nBH875LZID8M0nacoAqaWhAVv28QSmrEBjqeFCg96jEAdvSNuzvXiqy5OKTOiSuY5VBPSPsqFhLUs9VB79d000E0uQxjv');

const SuccessPage = () => (
  <Elements stripe={stripePromise}>
    <Layout>
      <Parallax pages={1}>
        <Success offset={0} factor={1} />
      </Parallax>
    </Layout>
  </Elements>
)

export default SuccessPage
