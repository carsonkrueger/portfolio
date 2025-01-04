import { ANGULAR_ENV, Environment } from "./environments";

export const PORT: number =
  ANGULAR_ENV.ENVIRONMENT === Environment.DEVELOPEMENT ? 3000 : 80;

export const BASE_URL: string =
  ANGULAR_ENV.ENVIRONMENT === Environment.DEVELOPEMENT
    ? `http://localhost:${PORT}`
    : `https://krueger-portfolio.us-east-1.elasticbeanstalk.com`;
