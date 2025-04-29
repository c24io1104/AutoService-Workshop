import 'dotenv/config';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { AuthController } from './controllers/AuthController';
import { VerificationController } from './controllers/VerificationController';

const app = express();
const PORT = process.env.PORT || 3000;

useExpressServer(app, {
  controllers: [AuthController, VerificationController],
  middlewares: [express.json()],
  defaultErrorHandler: true
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});