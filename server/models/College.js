const mongoose = require('mongoose');

const casteCategorySchema = new mongoose.Schema({
    ST: { type: Number, required: true },
    SC: { type: Number, required: true },
    OBC: { type: Number, required: true },
    General: { type: Number, required: true }
});

const collegeSchema = new mongoose.Schema({
    collegeName: { type: String, required: true },
    address: { type: String, required: true },
    coursesAvailable: { type: String, required: true },
    cutOffSpotRound: { type: Number, required: true },
    casteCategoryCutOff: { type: casteCategorySchema, required: true },
    minStudentCriteria: { type: Number, required: true },
    maxCriteria: { type: Number, required: true },
    spotRoundDates: { type: Date, required: true },
    approvedBy: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;
