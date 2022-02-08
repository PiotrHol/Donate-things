const actionsType = {
  setUser: "auth/setUser",
  outUser: "auth/removeUser",
};

const setUserData = (payload) => {
  return {
    type: actionsType.setUser,
    payload,
  };
};

const removeUserData = () => {
  return {
    type: actionsType.outUser,
  };
};

export { actionsType, setUserData, removeUserData };
