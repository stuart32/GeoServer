import { Property } from "./models/property";

export const resolvers = {
      Query: {
            propertyById: (_,{id}) =>  Property.findOne({_id: id }),
            properties: () => Property.find(),
            propertyCount: () => Property.find().count(),


            propertiesByBedrooms: (_,{bedrooms}) => Property.find({'details.bedrooms': bedrooms}),

            propertiesByPriceGt: (_,{price}) => Property.find({'sale_history.price': price}, {'sale_history.$': 0}),

            propertiesByPostcode: (_,{postcode}) => {
                  Property.find({'details.address.postcode': /postcode/})
            }
      }
};