const actionsType = {
  getPaginateData: "pagination/fetch",
  setPaginatePage: "pagination/setCurrentPage",
  setOrgList: "pagination/setListAsOrg",
  setFundList: "pagination/setListAsFun",
  setCollList: "pagination/setListAsColl",
};

const getData = (payload) => {
  return {
    type: actionsType.getPaginateData,
    payload,
  };
};

const setPage = (payload) => {
  return {
    type: actionsType.setPaginatePage,
    payload,
  };
};

const setOrganizations = () => {
  return {
    type: actionsType.setOrgList,
  };
};

const setFundations = () => {
  return {
    type: actionsType.setFundList,
  };
};

const setCollections = () => {
  return {
    type: actionsType.setCollList,
  };
};

export {
  actionsType,
  getData,
  setPage,
  setOrganizations,
  setFundations,
  setCollections,
};
