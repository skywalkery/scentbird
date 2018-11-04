export default (regex, msg) => value =>
  value && regex.test(value) ? msg : undefined;
