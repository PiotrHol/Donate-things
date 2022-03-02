const actionsType = {
  pageChange: "form/pageChange",
  thingsSet: "form/thingsSet",
  bagsSet: "form/bagsSet",
};

const changePage = (payload) => {
  return {
    type: actionsType.pageChange,
    payload,
  };
};

const setThings = (payload) => {
  return {
    type: actionsType.thingsSet,
    payload,
  };
};

const setBags = (payload) => {
  return {
    type: actionsType.bagsSet,
    payload,
  };
};

export { actionsType, changePage, setThings, setBags };
