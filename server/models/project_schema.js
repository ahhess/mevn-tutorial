const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'project name field is required'],
    },
    projectNumber: {
      type: String,
      required: [true, 'project number field is required'],
    },
    budget: {
      type: Number,
      required: [false],
    },
    activities: [
        {
            activity: {
                name: {
                    type: String,
                    required: [true, 'activity name field is required']
                },
                orderNumber: {
                    type: Number,
                    required: [true, 'order number field is required'],
                  },
            }
        }   
    ]
  },
  { timestamps: true },
);

module.exports = model('projects', projectSchema);
