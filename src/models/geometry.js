import mongoose from 'mongoose';


export const PointSchema = new mongoose.Schema({
      type: {
        type: String,
      },
      coordinates: {
        type: [Number],
      }
    });

export const MultiPolygonSchema = new mongoose.Schema({
type: {
      type: String,
      enum: ['MultiPolygon'],
      required: true
},
coordinates: {
      type: [[[[Number]]]], // Array of arrays of arrays of numbers
      required: true
}
});

