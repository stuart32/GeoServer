import { Property } from "./models/property";

export const resolvers = {
      Query: {
            properties: () =>  Property.find(),
            //details: () => Property.find(),
            //sales: () => Properties.find()
      }
};