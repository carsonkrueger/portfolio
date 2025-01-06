import { ANGULAR_ENV, Environment } from "./environments";

export const PORT: number =
  ANGULAR_ENV.ENVIRONMENT === Environment.DEVELOPEMENT ? 5000 : 5000;

export const BASE_URL: string =
  ANGULAR_ENV.ENVIRONMENT === Environment.DEVELOPEMENT
    ? `http://localhost:${PORT}`
    : `http://kruegs-portfolio.us-east-1.elasticbeanstalk.com`;
// : `http://portfolio-krueger.us-east-1.elasticbeanstalk.com`;
// : `http://krueger-portfolio.us-east-1.elasticbeanstalk.com`;
// : `http://localhost:${PORT}`
