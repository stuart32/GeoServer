import mongoose from 'mongoose';
import { PointSchema } from './geometry'

const PropertyDetailsSchema = mongoose.Schema({
      bedrooms: Number,
      reception_rooms: {type: String, default: ''},
      feature_class: {type: String, default: 'Property'},
      address:   {
            display_address: {type: String, default: ''},
            lines: {type: [String], default: ['','']},
            town: {type: String}, default: '',
            postcode: {type: String, default: ''},
      },         
      home_pages_address: {type: String, default: ''},
      image: {type: String, default: 'Property'},
      sources: {type: [String], defualt: [''] },          
      primary_district: {type: String, default: ''},
      secondary_district: {type: String, default: ''},
      listed_status: {type: String, default: ''},          
      type: {
            super_type: {type: String, default: ''},
            type_name: {type: String, default: ''},    
      },
      url: {type: String, default: ''},
      imid: {type: String, default: ''},
})

const PropertyAddressSchema = mongoose.Schema({
      
})

const PropertyTypeSchema = mongoose.Schema({
      
})

const PropertySaleHistorySchema = mongoose.Schema({
      date: {type: String, default: ''},
      precentage_increase: {type: String, default: ''},
      refrence: {type: String, default: ''},
      price: {type: String, default: ''},
      source: {type: String, default: ''},
})

const PropertySchema = mongoose.Schema({
      geometry: PointSchema,
      details: PropertyDetailsSchema,
      sale_history: [PropertySaleHistorySchema],
});

export const Property = mongoose.model('properties', PropertySchema);