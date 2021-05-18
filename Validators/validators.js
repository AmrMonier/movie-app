class Validator {
  async sizeValidator(value, min, max) {
    return value.length <= max && value.length >= min;
  }
  async emailValidator(email) {
    const mailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailRegex.test(email);
  }
}
export default new Validator();
