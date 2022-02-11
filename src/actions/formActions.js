const actionsType = {
  pageChange: "form/pageChange",
};

const changePage = (payload) => {
  return {
    type: actionsType.pageChange,
    payload,
  };
};

export { actionsType, changePage };
