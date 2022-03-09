const actionsType = {
  pageChange: "form/pageChange",
  thingsSet: "form/thingsSet",
  bagsSet: "form/bagsSet",
  locationSet: "form/locationSet",
  whoIsAssistanceSet: "form/whoIsAssistanceSet",
  organizationSet: "form/organizationSet",
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

const setLocation = (payload) => {
  return {
    type: actionsType.locationSet,
    payload,
  };
};

const setWhoIsAssistance = (payload) => {
  return {
    type: actionsType.whoIsAssistanceSet,
    payload,
  };
};

const setOrganization = (payload) => {
  return {
    type: actionsType.organizationSet,
    payload,
  };
};

export {
  actionsType,
  changePage,
  setThings,
  setBags,
  setLocation,
  setWhoIsAssistance,
  setOrganization,
};
