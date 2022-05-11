const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { isEmail, isMobilePhone } = require("validator");
const prescriptionSchema = require("./prescription");
const res = require("express/lib/response");

const patientSchema = new mongoose.Schema({
  healthID: {
    type: String,
  },
  name: {
    firstName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
    middleName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
    surName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
  },
  dob: {
    type: Date,
    required: [true, "Please enter Date of Birth"],
  },
  mobile: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    validate: [isEmail, "Please Enter a valid Email"],
  },
  adharCard: {
    type: Number,
    min: [100000000000, "Please enter an valid AdharCard Number"],
    max: [999999999999, "Please enter an valid AdharCard Number"],
    unique: [true, "This AdharCard is already Registerd on System."],
    required: [true, "Please enter AdharCard Number"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Please enter Blood Group"],
  },
  address: {
    building: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    taluka: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    district: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    state: {
      type: String,
      required: [true, "Please enter complete Address"],
    },
    pincode: {
      type: Number,
      min: [100000, "Please enter a valid pincode"],
      max: [999999, "Please enter a valid pincode"],
      required: [true, "Please enter complete Address"],
    },
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [8, "Minimum length of password should must be 8 characters"],
  },
  diseases: [
    {
      disease: {
        type: String,
      },
      yrs: {
        type: Number,
      },
    },
  ],
  contactPerson: {
    name: {
      firstName: {
        type: String,
        required: [true, "Name of contact person is required"],
      },
      surName: {
        type: String,
        required: [true, "Name of contact person is required"],
      },
    },
    mobile: {
      type: String,
      required: [true, "Mobile Number of contact person is required"],
      minlength: [10, "Please Enter a valid Mobile Phone"],
    },
    email: {
      type: String,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email."],
    },
    relation: {
      type: String,
    },
    address: {
      building: {
        type: String,
        required: [true, "Please enter complete Address of contact person"],
      },
      city: {
        type: String,
        required: [true, "Please enter complete Address of contact person"],
      },
      taluka: {
        type: String,
        required: [true, "Please enter complete Address of contact person"],
      },
      district: {
        type: String,
        required: [true, "Please enter complete Address of contact person"],
      },
      state: {
        type: String,
        required: [true, "Please enter complete Address of contact person"],
      },
      pincode: {
        type: Number,
        min: [100000, "Please enter a valid pincode"],
        max: [999999, "Please enter a valid pincode"],
        required: [true, "Please Enter complete Address of contact person"],
      },
    },
  },
  prescriptions: [prescriptionSchema],
});

patientSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

patientSchema.statics.login = async function (healthID, password) {
  const patient = await this.findOne({ healthID });
  if (!healthID) {
    throw Error("Please enter HealthId");
  }
  if (patient) {
    const auth = await bcrypt.compare(password, patient.password);
    if (auth) {
      return patient;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Invalid HealthID");
};

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
