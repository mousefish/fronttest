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
