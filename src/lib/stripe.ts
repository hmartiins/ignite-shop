import Stripe from "stripe";

if (!process.env.SECRET_KEY_STRIPE) {
  throw new Error("process.env.SECRET_KEY_STRIPE is not set");
}

export const stripe = new Stripe(process.env.SECRET_KEY_STRIPE, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop",
  },
});
