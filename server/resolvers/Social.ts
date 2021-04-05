import { SOCIALS } from "../data";
import {logger} from "../lib";


export default {
    Query: {
        socials: () => {
            logger.info('Processed request for query - socials')

            return SOCIALS
        }
    }
}