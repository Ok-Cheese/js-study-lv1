const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

export const pushItem = (state, e) => {
  state.todoItems.push({
    id: uuid(),
    createAt: Date.now(),
    content: e.target.querySelector('input').value,
    isComplete: false
  });
  // fetch('/items')
  //   .then((res) => res.json())
  //   .then((items) => console.log(items));
};
