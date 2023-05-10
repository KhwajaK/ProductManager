const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String,
        required: [true, "title is required"]
    },
    price: { type: String,
        required: [true, "price required"]
    },
    description:{ type: String,
        required: [true, "description required"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)