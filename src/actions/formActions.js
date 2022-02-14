const actionsType = {
  pageChange: "form/pageChange",
  thingsSet: "form/thingsSet",
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

export { actionsType, changePage, setThings };
