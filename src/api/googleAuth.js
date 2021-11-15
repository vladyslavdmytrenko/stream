const googleConfig = {
  client_id:
    '418128035975-g9f1i3hrun6q1v23uq5mgd8gg3ejt9kb.apps.googleusercontent.com',
  scope: 'profile email',
};

const gapi = window.gapi;

let auth = null;

const googleLoadClientAuth = () =>
  new Promise((resolve) => gapi.load('client:auth2', resolve));

const googleAuthInit = async () => {
  await googleLoadClientAuth();
  await gapi.client.init(googleConfig);
  auth = await gapi.auth2.getAuthInstance();
};

const googleLogin = async () => {
  if (!auth) {
    await googleAuthInit();
  }
  await auth.signIn();
  const userProfile = auth.currentUser.get().getBasicProfile();
  return {
    userId: userProfile.getId(),
    name: userProfile.getName(),
    email: userProfile.getEmail(),
    imagUrl: userProfile.getImageUrl(),
  };
};

const googleLogout = async () => {
  if (!auth) {
    await googleAuthInit();
  }
  await auth.signOut();
  if (auth.currentUser.get().isSignedIn()) {
    throw new Error('something went wrong while logout');
  }
};

export { googleLogin, googleLogout };
