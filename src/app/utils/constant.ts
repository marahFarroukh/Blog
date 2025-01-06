const PRODUCTION_DOMAIN = "https://vica.blog/";
const DEVELOPMENT_DOMAIN = "http://localhost:3000";

export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;
