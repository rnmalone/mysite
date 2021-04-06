import { SOCIALS } from "../data";
import {logger} from "../lib";


const socialResolver = {
    Query: {
        socials: () => {
            logger.info('Processed request for query - socials')

            return SOCIALS
        }
    }
}

export default socialResolver;