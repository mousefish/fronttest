import cities from "../Data/cities";

const validate = values => {
  const errors = {};
  const names = [
    "theme",
    "location",
    "departdate",
    "finishdate",
    "budget",
    "services",
    "story",
    "email",
    "password",
    "username",
    "sex",
    "age",
    "city",
    "yearOfLiving",
    "hometown",
    "school",
    "major",
    "language",
    "hobby",
    "personality",
    "note"
  ];

  names.forEach(name => {
    if (!values[name]) {
      errors[name] = "值不能为空！";
    }
  });
  if (
    values.email &&
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "请输入有效邮箱";
  }

  if (values.password && values.password.length != 6) {
    errors.password = "密码长度为六位";
  }

  if (
    values.email &&
    values.password &&
    values.email.indexOf(values.password) !== -1
  ) {
    errors.password = "密码不能含有邮箱地址";
  }

  if (Number.isNaN(Number(values.age)) || Number(values.age) <= 0) {
    errors.age = "请输入有效年龄";
  } else if (Number(values.age) < 18) {
    errors.age = "您必须满18岁";
  }

  if (Number.isNaN(parseInt(values.budget)) || parseInt(values.budget) <= 0) {
    errors.budget = "请输入有效数字";
  }


  if (
    Number.isNaN(Number(values.yearOfLiving)) ||
    Number(values.yearOfLiving) <= 0
  ) {
    errors.yearOfLiving = "请输入有效年限";
  }

  if (values.story && values.story.length >= 300) {
    errors.story = "字数不能超过300";
  }

  return errors;
};

export default validate;