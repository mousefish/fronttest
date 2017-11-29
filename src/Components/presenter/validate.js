
const validate = values => {
  // console.log(values);

  const errors = {};

  const names = [
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
  "personality"
];

  names.forEach(name => {
    if (!values[name]) {
      errors[name] = "值不能为空！";
    }
  });

  if (
    values.email && !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "请输入有效邮箱";
  }

  if (values.password && values.password.length != 6) {
    errors.password = "密码长度为六位";
  }

  if (Number.isNaN(values.age) || Number(values.age) <= 0) {
    errors.age = "请输入有效年龄";
  }else if(Number(values.age) < 18){
    errors.age = '您必须满18岁';
  }

  if(Number(values.yearOfLiving) <= 0){
    errors.yearOfLiving = "请输入有效年限";
  }

  return errors;
};

export default validate;