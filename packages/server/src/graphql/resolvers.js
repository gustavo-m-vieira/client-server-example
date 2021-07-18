import { resolvers as DemandResolvers } from "./Demand/Demand";
import { resolvers as ClientResolvers } from "./Client/Client";
import { resolvers as ListResolvers } from "./List/List";
import { resolvers as NodeResolvers } from "./Node/Node";

const resolvers = {
  ...ListResolvers,
  ...NodeResolvers,
  ...ClientResolvers,
  ...DemandResolvers,

  Query: {
    ...ClientResolvers.Query,
    ...DemandResolvers.Query,
  },

  Mutation: {
    ...ClientResolvers.Mutation,
  }
};

export default resolvers;
