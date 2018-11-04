export default value =>
  value && /[^a-zA-Z]/i.test(value) ? 'Only letter characters.' : undefined;
