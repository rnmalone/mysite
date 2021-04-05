import {gql} from 'apollo-server'

const typeDefs = gql`
    type Social {
        label: String
        url: String
        icon: String
    }
    
    type Skill {
        id: String
        from: String
        imageName: String
        name: String
        type: String
    }
    
   type Employment {
        from: String
        to: String
        employer: String
        location: String
        description: String
        role: String
        countryCode: String
        image: String
   }
   
   type Education {
        from: String
        to: String
        location: String
        countryCode: String
        grade: String
        institution: String
        image: String 
  }
  
  type Occupation {
        employment: [Employment]
        education: [Education]
  }
    
    type Query {
        socials: [Social]
        skills: [Skill]
        occupation: Occupation
    }
    
`

export default typeDefs;
