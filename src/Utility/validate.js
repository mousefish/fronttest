import cities from "../Data/cities";

const validate = (values, props) => {
  const { match: { params: { version } } } = props;
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
      switch (version) {
        case "CH":
          errors[name] = "值不能为空！";
          break;
        case "EN":
          errors[name] = "Value cannot be empty!";
      }
    }
  });
  if (
    values.email &&
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    switch (version) {
      case "CH":
        errors.email = "请输入有效邮箱";
        break;
      case "EN":
        errors.email = "Please type in a valid email address";
    }
  }

  if (
    values.password &&
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$/.test(values.password)
  ) {
    switch (version) {
      case "CH":
        errors.password = "密码长度必须在8-25位之间，且至少含有1个数字和1个字母";
        break;
      case "EN":
        errors.password =
          "Password must be 8 - 25 long, with at least 1 number and 1 letter.";
    }
  }

  if (
    values.email &&
    values.password &&
    values.email.indexOf(values.password) !== -1
  ) {
    switch (version) {
      case "CH":
        errors.password = "密码不能含有邮箱地址";
        break;
      case "EN":
        errors.password = "Password cannot contain email address.";
    }
  }
  if (values.username && values.username.length > 20) {
    switch (version) {
      case "CH":
        errors.username = "用户名不能超过20个字";
        break;
      case "EN":
        errors.username = "Username must be within 20 words.";
    }
  }
  if (
    values.minNumOfPeople &&
    values.maxNumOfPeople &&
    +values.maxNumOfPeople < +values.minNumOfPeople
  ) {
    switch (version) {
      case "CH":
        errors.minNumOfPeople = "区间无效";
        break;
      case "EN":
        errors.minNumOfPeople = "Invalid range";
    }
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
    switch (version) {
      case "CH":
        errors.budget = "请输入有效数字";
        break;
      case "EN":
        errors.budget = "Please type in a valid number";
    }
  }
  if (values.bio && values.bio.length > 100) {
    switch (version) {
      case "CH":
        errors.bio = "字数不能多于100";
        break;
      case "EN":
        errors.bio = "No more than 100 words.";
    }
  }

  if (
    Number.isNaN(parseInt(values.numberOfPeople)) ||
    parseInt(values.numberOfPeople) <= 0
  ) {
    switch (version) {
      case "CH":
        errors.numberOfPeople = "请输入有效数字";
        break;
      case "EN":
        errors.numberOfPeople = "Please type in a valid number.";
    }
  }

  if (values.theme && values.theme.length > 15) {
    switch (version) {
      case "CH":
        errors.theme = "字数不能超过15";
        break;
      case "EN":
        errors.theme = "No more than 15 words";
    }
  }

  if (values.note && values.note.length > 300) {
    switch (version) {
      case "CH":
        errors.note = "字数不能超过300";
        break;
      case "EN":
        errors.note = "No more than 300 words";
    }
  }

  if (values.story && values.story.length > 300) {
    switch (version) {
      case "CH":
        errors.story = "字数不能超过300";
        break;
      case "EN":
        errors.story = "No more than 300 words";
    }
  }

  return errors;
};

export default validate;