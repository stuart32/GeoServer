import mongoose from 'mongoose';

const PropertyDetailsSchema = mongoose.Schema({

})

const PropertySchema = mongoose.Schema({
      geometry: {
            type: {type: String, default: 'Point'},
            coordinates: {type: [Number], default: [0,0]}
      },

      details: {
            bedrooms: {type: Number, default: 0},
            reception_rooms: {type: String, default: ''},
            feature_class: {type: String, default: 'Property'},
            address: {
                  display_address: {type: String, default: ''},
                  lines:{type:[String], default: ['','']},
                  town: {type: String, default: ''},
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
                  type_name: {type: String, default: ''}
            },
            url: {type: String, default: ''},
            imid: {type: String, default: ''},
      },

      sale_history: [{
            date: {type: String, default: ''},
            precentage_increase: {type: String, default: ''},
            refrence: {type: String, default: ''},
            price: {type: String, default: ''},
            source: {type: String, default: ''},
      }],
});

export const Property = mongoose.model('properties', PropertySchema);