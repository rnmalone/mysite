import {EDUCATION, EMPLOYMENT} from "../data";
import {logger} from "../lib";


export default {
    Query: {
        occupation: () => {
            logger.info('Processed request for query - occupation')

            return {
                education: EDUCATION,
                employment: EMPLOYMENT
            }
        }
    }
}