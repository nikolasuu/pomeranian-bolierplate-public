export const LoadUserDataExercise = () => {
  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 88, name: 'Tom Hands' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((userId) => {});
  }

  loadUser().then((resolve) => {
    console.log(resolve);
    return resolve;
  });

  return (
    <>
      <p>Load User Data Exercise</p>
    </>
  );
};
