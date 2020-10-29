const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateSignUpInput = (data) => {
  let errors = {};

  let { first_name, last_name, bio, email, password } = data;
  //Converting empty fields to an empty string so that we can use validator function as it works only with strings
  first_name = !isEmpty(first_name) ? first_name : "";
  last_name = !isEmpty(last_name) ? last_name : "";
  bio = !isEmpty(bio) ? bio : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  if (Validator.isEmpty(first_name)) {
    errors.first_name = "Fisrtname is required";
  }
  if (Validator.isEmpty(last_name)) {
    errors.last_name = "Lastname is required";
  }
  if (Validator.isEmpty(bio)) {
    errors.bio = "bio is required";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Email is required";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Enter a valid email id";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Password is required";
  } else if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
