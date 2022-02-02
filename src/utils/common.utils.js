const checkValidateJson = (Jsontext) => {
  return true;
};

export const checkParams = (
  formData,
  Jsontext,
  paramsData,
  headerData,
  seterrorMessage
) => {
  if (!formData.url) {
    seterrorMessage("Invalid URl");
    return false;
  }
  if (!checkValidateJson(Jsontext)) {
    seterrorMessage("Invalid json");
    return false;
  }
  return true;
};

export const getHandersAndparams = (objectOfArr) => {
  let newObj = {};

  objectOfArr.forEach((data) => {
    if (data.hasOwnProperty("checked") && data.checked) {
      newObj = { ...newObj, [data.key]: data.value };
    }
  });
  return newObj;
};
