export function applyDrag(iterable, dropResult) {
  const { addedIndex, payload, removedIndex } = dropResult;

  const workValue = iterable.slice();

  if (null !== removedIndex) {
    workValue.splice(removedIndex, 1);
  }

  if (null !== addedIndex) {
    workValue.splice(addedIndex, 0, payload);
  }

  return workValue;
}

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};
