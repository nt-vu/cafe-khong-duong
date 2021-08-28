module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        var mongoosesrv = mongooses.reverse()
        return mongoosesrv.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
