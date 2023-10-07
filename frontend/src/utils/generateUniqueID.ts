interface IObj {
  id: string | number;
}

const generateUniqueID = (data: Array<IObj>) => {
  return data.reduce((final, current) => {
    const id = Number(current.id);
    return id >= final ? (final = id + 1) : final;
  }, 0);
};

export { generateUniqueID };