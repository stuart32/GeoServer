import mongoose from 'mongoose';

const PropertySchema = mongoose.Schema({
      geometry: {
            type: {type: String, default: 'Point'},
            coordinates: {type: [Number], default: [0,0]}
      },

      detials: {
            bedrooms: {type: Number, default: 0},
            display_address: {type: String, default: ''},
            featurclass: {type: String, default: 'Property'},
            home_pages_address: {type: String, default: ''},
            image: {type: String, default: 'Property'},
            lines:{type:[String], default: ['','']},
            postcode: {type: String, default: ''},
            primary_district: {type: String, default: ''},
            reception_rooms: {type: String, default: ''},
            town: {type: String, default: ''},
            type: {
                  super_type: {type: String, default: ''},
                  type_id: {type: Number, default: 0},
                  type_name: {type: String, default: ''}
            },
            url: {type: String, default: ''}

      },

      sale_history: {type: [String], default: ['','']},
});

export const Property = mongoose.model('properties', PropertySchema);