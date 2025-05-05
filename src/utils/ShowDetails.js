export const HandleShowDetails = (
  data,
  DataToSet,
  IdTOSet,
  ModalToOpen,
  stateToSet
) => {
  stateToSet(true);
  DataToSet(data);
  IdTOSet(data._id);
  ModalToOpen(true);
};
