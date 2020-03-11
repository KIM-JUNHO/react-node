const defaultId = 'admin';
const defaultPwd = 'q1w2e3';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(username, password, cb) {
    if (username === defaultId && password === defaultPwd) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    }
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
