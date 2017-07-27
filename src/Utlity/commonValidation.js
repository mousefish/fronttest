//only authenticate null values
//
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export function commonValidation(data)
{
  let errors = {}
  if(Validator.isEmpty(data))
  {
    errors.data = 'this filed is required';
  }
  return{
    errors,
    isValid : isEmpty(errors)
  }
}


export function sinUpValidation(data)
{
  let errors={};

 if(Validator.isEmpty(data.email))
 {
   errors.email = "this field is required";
 }
 if(!Validator.isEmail(data.email))
 {
   errors.email = "email must be a real email";
 }
 if(Validator.isEmpty(data.username))
 {
   errors.username = "this field is required";
 }
 if(Validator.isEmpty(data.password))
 {
   errors.password = "this field is required";
 }
 if(Validator.isEmpty(data.password_confirm))
 {
   errors.password_confirm = "this field is required";
 }
 if(!Validator.equals(data.password,data.password_confirm))
 {
   errors.password_confirm = "password does not match";
 }
 if(data.password.length<6)
 {
   errors.password = "password at least have 6 characters"
 }

 return{
   errors,
   isValid : isEmpty(errors)
 }
}
