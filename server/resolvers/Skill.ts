import { SKILLS } from "../data";
import {logger} from "../lib";


export default {
    Query: {
        skills: () => {
            logger.info('Processed request for query - skills')

            return SKILLS
        }
    }
}