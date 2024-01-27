export const state = () => ({
  isOpenSelect: [],
  itemsArr: [
    {
      id: "af1",
      label: "header",
      title: "Обязательные для всех",
      description:
        "Документы, обязательные для всех сотрудников без исключения",
      itemsChild: [
        {
          id: "af30",
          label: "Паспорт",
          prior: "Обязательный",
          type: "Для всех",
        },

        {
          id: "af31",
          label: "ИНН",
          prior: "Обязательный",
          type: "Для всех",
        },
      ],
      tint: 1,
    },
    {
      id: "af2",
      label: "body",
      title: "Обязательные для трудоустройства",
      description:
        "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",
      items: [
        {
          id: "af21",
          label: "ИНН",
          prior: "Обязательный",
          type: "Для всех",
        },
      ],
      tint: 2,
    },
    {
      id: "af3",
      label: "Foot",
      title: "Специальные",
      description:
        "Документы, обязательные для всех сотрудников без исключения",
      items: [
        {
          id: "af41",
          label: "ИНН",
          prior: "Обязательный",
          type: "Для всех",
        },
      ],
      tint: 3,
    },
  ],
});

export const mutations = {
  openSelectFunc(state, index) {
    const idx = state.isOpenSelect.indexOf(index);
    if (idx > -1) {
      state.isOpenSelect.splice(idx,1)
    } else {
      state.isOpenSelect.push(index);
    }
  },
};

export const actions = {
  openSelectAction({ commit }) {
    commit("openSelect");
  },
};

// export const getters = {
//   myGetter(state) {
//     return state.counter + 1000;
//   },
// };
