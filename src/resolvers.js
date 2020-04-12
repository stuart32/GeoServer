import { Property } from "./models/property";

export const resolvers = {
      Query: {
            hello: () => "hi",

            properties: () =>  Property.find()

      }
};