const validate = values => {
  const errors = {};
  const names = [
    "location",
    "departdate",
    "finishdate",
    "budget",
    "services",
    "story"
  ];

  names.forEach(name => {
    if (!values[name]) {
      errors[name] = "值不能为空！";
    }
  });

  if (values.story && values.story.length >= 300) {
    errors.story = "字数不能超过300";
  }

  return errors;
};

export default validate;
