import { WebAuth } from "auth0-js";
export const webAuth = new WebAuth({
  clientID: "kzdiwE054txztyLA2kkPZHW1dJ0xhu3N",
  domain: "dev-15ib7nyew5oqpx7d.us.auth0.com",
  redirectUri: "http://localhost:3000", //replace with your codesandbox url
  responseType: "token",
});
