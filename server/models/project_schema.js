const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true],
    },
    projectNumber: {
      type: String,
      required: [true],
    },
    budget: {
      type: Number,
    },
    activities: [
      {
        activity: {
          name: {
            type: String,
            required: [true],
          },
          orderNumber: {
            type: Number,
            required: [true],
          },
          status: {
            type: String,
          }
        },
      },
    ],
    skills: [
      {
        skill: {
          name: {
            type: String,
            required: [true],
          },
          short: {
            type: String,
            required: [true],
          },
          price: {
            type: Number,
          },
          budget: {
            type: Number,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("projects", projectSchema);
