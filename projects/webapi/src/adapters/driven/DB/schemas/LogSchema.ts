import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    code: 'string',
    name: 'string'
})

const LogSchema = new mongoose.Schema({
    dateTime: { type: Date, required: true},
    text:  { type: String, required: true}, 
    category:  {type: CategorySchema},
    processId: { type: String, required: true},
    type: { type: String, enum: ['Critical', 'Info', 'Warning'], required: true}
}, {
    collection: 'logs'
})

LogSchema.index({category: 1, dateTime: 1})

const model = mongoose.model('Log', LogSchema)

export default {
    model
}