import { Auth0Client } from "@auth0/auth0-spa-js";

export const authClient = new Auth0Client({
  client_id: "kzdiwE054txztyLA2kkPZHW1dJ0xhu3N",
  domain: "dev-15ib7nyew5oqpx7d.us.auth0.com",
  redirect_uri: "http://localhost:3000/",
});
