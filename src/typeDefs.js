import { gql } from "apollo-server-express";
import { Property } from "./models/property";
import { PointObject } from 'graphql-geojson'


export const typeDefs = gql `
      type Query {
            hello: String!, 
            properties: [ Property ]
      }

      type PropertyType {
            super_type: String
            type_id: Int
            type_name: String
      }

      type PropertyDetails {
            bedrooms: Int
            display_address: String!
            featureclass: String
            home_page_address: String
            image: String
            lines: [String!]
            postcode: String
            primary_district: String
            reception_rooms: Int 
            town: String 
            type: PropertyType
            url: String
      }

      scalar Coordinates

      type PointGeometry {
            type: String!
            coordinates: Coordinates!
      }

      # TODO
      # type PropertyHistory{
            
      # }

      type Property {
            id: ID!
            geometry: PointGeometry
            detials: PropertyDetails
            sale_history: [String] #Change to PropertyHistory

            
      }
`;