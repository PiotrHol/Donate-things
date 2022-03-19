const actionsType = {
  pageChange: "form/pageChange",
  thingsSet: "form/thingsSet",
  bagsSet: "form/bagsSet",
  locationSet: "form/locationSet",
  whoIsAssistanceSet: "form/whoIsAssistanceSet",
  organizationSet: "form/organizationSet",
  pickUpAddressSet: "form/pickUpAddressSet",
  pickUpDateSet: "form/pickUpDateSet",
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

const setPickUpAddress = ({ street, city, postCode, phone }) => {
  return {
    type: actionsType.pickUpAddressSet,
    payload: {
      street,
      city,
      postCode,
      phone,
    },
  };
};

const setPickUpDate = ({ date, time, note }) => {
  return {
    type: actionsType.pickUpDateSet,
    payload: {
      date,
      time,
      note,
    },
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
  setPickUpAddress,
  setPickUpDate,
};
