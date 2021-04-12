import { Occupation, Skill, Social } from './graph';

export type SkillsResponse = {
    skills: Required<Skill>[]
}

export type SocialsResponse = {
    socials: Required<Social>[]
}

export type OccupationResponse = {
    occupation: Required<Occupation>[]
}