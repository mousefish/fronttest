import cities from "../Data/cities";

const validate = values => {
  const errors = {};
  const names = [
    "theme",
    "location",
    "departdate",
    "finishdate",
    "budget",
    "numberOfPeople",
    "services",
    "story",
    "email",
    "password",
    "username",
    "minNumOfPeople",
    "maxNumOfPeople",
    // "sex",
    // "age",
    // "city",
    // "yearOfLiving",
    // "hometown",
    // "school",
    // "major",
    // "language",
    // occupation,
    // "bio"
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

  if (
    values.password &&
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/.test(values.password)
  ) {
    errors.password = "密码长度必须在6-25位之间，且至少含有1个数字和1个字母";
  }

  if (
    values.email &&
    values.password &&
    values.email.indexOf(values.password) !== -1
  ) {
    errors.password = "密码不能含有邮箱地址";
  }
  if (values.username && values.username.length > 20) {
    errors.username = "用户名不能超过20个字";
  }
  if (
    values.minNumOfPeople &&
    values.maxNumOfPeople &&
    +values.maxNumOfPeople < +values.minNumOfPeople
  ) {
    errors.minNumOfPeople = "区间无效";
  }

  // *******************date validation

  if (values.departdate) {
    if (typeof values.departdate !== "string") {
      errors.departdate = "请在有效区域内选择日期";
    }
    let depart = new Date(values.departdate.replace(/年|月|日/g, "/"));

    if (depart && Date.now() >= Date.parse(depart)) {
      errors.departdate = "出发时间不能早于当前时间";
    }
  }

  if (values.departdate && values.finishdate) {
    if (typeof values.finishdate !== "string") {
      errors.finishdate = "请在有效区域内选择日期";
    }
    let depart = new Date(values.departdate.replace(/年|月|日/g, "/"));
    let finish = new Date(values.finishdate.replace(/年|月|日/g, "/"));
    if (finish && depart && Date.parse(finish) <= Date.parse(depart)) {
      errors.finishdate = "结束时间不能早于出发时间";
    }
  }

  // *******************date validation

  if (Number.isNaN(parseInt(values.budget)) || parseInt(values.budget) <= 0) {
    errors.budget = "请输入有效数字";
  }
  if (values.bio && values.bio.length > 100) {
    errors.bio = "字数不能多于100";
  }

  if (
    Number.isNaN(parseInt(values.numberOfPeople)) ||
    parseInt(values.numberOfPeople) <= 0
  ) {
    errors.numberOfPeople = "请输入有效数字";
  }

  if (values.theme && values.theme.length > 15) {
    errors.theme = "字数不能超过15";
  }

  if (values.note && values.note.length > 300) {
    errors.note = "字数不能超过300";
  }

  if (values.story && values.story.length > 300) {
    errors.story = "字数不能超过300";
  }

  return errors;
};

export default validate;