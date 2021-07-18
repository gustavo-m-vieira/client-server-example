import { gql } from "apollo-server-express";
import { typeDefs as ClientTypeDefs } from "./Client/Client";
import { typeDefs as DemandTypeDefs } from "./Demand/Demand";
import { typeDefs as ListTypeDefs } from "./List/List";
import { typeDefs as NodeTypeDefs } from "./Node/Node";

const typeDefs = gql`
  type Query {
    _root: String
  }

  type Mutation {
    _root: String
  }

  ${ListTypeDefs}
  ${NodeTypeDefs}
  ${ClientTypeDefs}
  ${DemandTypeDefs}
`;

export default typeDefs;