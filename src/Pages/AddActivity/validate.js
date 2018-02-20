const validate = values => {
  const errors = {};
  const names = [
    "theme",
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

  let budget = parseInt(values.budget);
  if(Number.isNaN(budget)){errors.budget = "请输入数字!"}

  return errors;
};

export default validate;
