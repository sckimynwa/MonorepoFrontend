/* eslint-disable no-restricted-imports */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import next from 'next';
import express from 'express';

const {
  NODE_ENV,
  NEXT_PUBLIC_APP_ENV: APP_ENV,
  NEXT_PUBLIC_PORT: PORT = '3000',
  NEXT_PUBLIC_HOST = '',
} = process.env;

const dev = NODE_ENV === 'development';
const hostname = NODE_ENV === 'production' ? NEXT_PUBLIC_HOST : 'localhost';
const port = parseInt(PORT, 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  server.use(express.json());

  // Respond to ELB Health Checker
  // eslint-disable-next-line consistent-return
  server.get('/', (req, res, next) => {
    const ua = req.headers['user-agent'] || '';

    if (ua.includes('ELB-HealthChecker') || ua.includes('kube-probe/')) {
      console.log(`Request from ${ua}`);

      return res.status(200).send('OK');
    }

    next();
  });

  /**
   * Handle Routes without Authorization
   */
  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.statusCode = 500;
      res.end();
    }
  );

  server.listen(port, () => {
    console.log(
      `> Ready on http://${hostname}:${port} as ${NODE_ENV}:${APP_ENV}`
    );
  });
});
