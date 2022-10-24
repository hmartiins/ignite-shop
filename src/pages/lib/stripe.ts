import Stripe from "stripe";

export const stripe = new Stripe(process.env.SECRET_KEY_STRIPE, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop",
  },
});
