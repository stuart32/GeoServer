import { gql } from "apollo-server-express";
import { Property } from "./models/property";
import { PointObject } from 'graphql-geojson'


export const typeDefs = gql `
      type Query {
            propertyById(id: ID!): Property
            propertiesByPostcode(postcode: String): [Property]
            propertiesByBedrooms(bedrooms: Int!): [Property]
            propertiesByPriceGt(price: Int!): [Property]
            properties: [Property],
            propertyCount: Int
      }

      type PropertyType {
            super_type: String
            type_name: String
      }

      type PropertyAddress {
            display_address: String
            lines: [String]
            town: String!
            postcode: String!
      }

      type PropertySaleHistory {
            date: String! #TODO - keep an eye on this, we may need to chagne the date time to some form of datetime
            precentage_increase: Float
            refrence: String
            price: Float
            source: String
      }

      type PropertyDetails {
            bedrooms: Int
            reception_rooms: Int 
            feature_class: String
            address: PropertyAddress!        
            home_pages_address: String
            image: String
            sources: [String]
            primary_district: String      #TODO Add these in DB
            secondary_district: String    #TODO Add these in DB
            listed_status: String         #TODO Add these in DB
            type: PropertyType
            url: String
            imid: String                  #TODO Add these in DB
      }

      scalar Coordinates

      type PointGeometry {
            type: String!
            coordinates: Coordinates!
      }

      type Property {
            id: ID!
            geometry: PointGeometry
            details: PropertyDetails
            sale_history: [PropertySaleHistory]

            
      }
`;