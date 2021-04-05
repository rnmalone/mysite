import {gql} from 'apollo-server'

const typeDefs = gql`
    type Todo {
        name: String
    }
    
    type Query {
        Todos: [Todo]
    }
`

export default typeDefs;
