import 'reflect-metadata';
import dotenv from 'dotenv';
import server from './server';
import { logger } from './lib';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const project = require('../config/project.config');

server();

logger.info(`Server is now running at http://${ project.server.host }:${ project.server.port }.`);
