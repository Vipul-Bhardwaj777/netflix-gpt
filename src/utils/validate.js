export const checkValidateSignin = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "Please enter a valid email address";
  if (!isValidPassword) return "Please enter a valid password";

  return null;
};

export const checkValidateSingup = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isValidEmail) return "Please enter a valid email address";
  if (!isValidPassword) return "Please enter a valid password";
  if (!isValidName) return "Please enter a valid name";

  return null;
};
