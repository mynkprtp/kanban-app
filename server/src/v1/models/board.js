const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {scemaOptions, schemaOptions} = require('./modelOptions')

const boardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    icon: {
        type: String,
        default: '📃'
    },
    title: {
        type: String,
        default: 'Untitled'
    },
    description: {
        type: String,
        default: `Add description here
        🟢 You can add multiline description
        🟢 Lets start`
    },
    position: {
        type: Number
    },
    favourites: {
        type: Boolean,
        default: false
    },
    favouritePosition: {
        type: Number,
        default: 0
    }
},schemaOptions)

module.exports = mongoose.model('Board', boardSchema)