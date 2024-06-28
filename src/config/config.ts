import "dotenv/config";

interface Config {
  port: string | number;
  db: {
    host: string;
    username: string;
    password: string;
    name: string;
  };
}

const config: Config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST ?? '',
    username: process.env.DB_USERNAME ?? '',
    password: process.env.DB_PASSWORD ?? '',
    name: process.env.DB_NAME ?? ''
  },
};

export default config;
