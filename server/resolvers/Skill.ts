import { SKILLS } from "../data";
import {logger} from "../lib";


export default {
    SkillDisplay: {
        __resolveType(obj: any) {
            if ('icon' in obj) return 'Icon';
            if ('url' in obj) return 'Image';

            return null;
        },
    },
    Query: {
        skills: () => {
            logger.info('Processed request for query - skills')

            return SKILLS
        }
    }
}