const mongoose = require("mongoose");

const validator = require("validator");

const Schema = mongoose.Schema;

const SchoolSchema = new Schema(
  {
    school_name: {
      type: String,
      required: [true, "You must provide a name"],
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address",
      },
      select: false,
    },
    description: {
        type: String,
    },
    moto: {
        type: String,
        required: true,
    },
    phone: {
      type: Number,
      unique: [true, "This phone number already exists"],
      select: false,
    },
    state: {
      type: String,
      required: true,
    },
    lg: {
      type: Array,
      required: true,
    },
    ownership: {
        type: String,
        default: "Private",
        enum: ["Private", "Public"],
    },
    type: {
      type: String,
      default: "Nursery",
      enum: ["Primary", "Nursery", "Secondary"],
    },
    mgt_no: {
        type: Number,
        required: true,
    },
    owner_name: {
        type: String,
        required: true,
    },
    has_activated: {
      type: Boolean,
      default: false,
    },
    logo: {
      public_id: { type: String, required: true },
      url: {
        type: String,
        required: true,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
SchoolSchema.index({ name: "name" });
let School = mongoose.model("School", SchoolSchema);

module.exports = School;