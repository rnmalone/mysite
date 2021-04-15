import { gql } from 'apollo-server'

const typeDefs = gql`
    type Social {
        label: String
        url: String
        icon: String
    }
    
    type Icon {
        color: String
        icon: String
    }
    
    type Image {
        url: String
    }
    
    union SkillDisplay = Icon | Image
    
    type Skill {
        id: String 
        name: String
        display: SkillDisplay
    }
        
    type Occupation {
        imageSrc: String
        timeframe: String
        title: String
        text: String
        location: String
    }
    
    type Query {
        socials: [Social]
        skills: [Skill]
        occupation: [Occupation]
    }
    
`

export default typeDefs;
