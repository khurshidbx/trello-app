<template>
  <div class="navbar">
    <div class="trello_app">Trello App</div>
    <div class="nav_left_btns">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        class="saved_icon"
      >
        <rect
          x="0.5"
          y="0.5"
          width="29"
          height="29"
          rx="14.5"
          fill="white"
          stroke="#D3D8DF"
        />
        <path
          d="M20 21.8571L15 18.2857L10 21.8571V10.4286C10 10.0497 10.1505 9.68633 10.4184 9.41842C10.6863 9.15051 11.0497 9 11.4286 9H18.5714C18.9503 9 19.3137 9.15051 19.5816 9.41842C19.8495 9.68633 20 10.0497 20 10.4286V21.8571Z"
          stroke="#8E9CBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <button @click="showModal" class="addBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.99697 14.0083C6.44681 14.0083 6.00082 13.5595 6.00082 13.0059L5.99983 1.01071C5.99983 0.457096 6.44582 0.00830078 6.99599 0.00830078C7.54615 0.00830078 7.99215 0.457097 7.99215 1.01071L7.99313 13.0059C7.99313 13.5595 7.54714 14.0083 6.99697 14.0083Z"
            fill="#0066FF"
          />
          <path
            d="M14 7.01688C14 6.46326 13.554 6.01447 13.0038 6.01447L0.996158 6.01448C0.445995 6.01448 0 6.46327 0 7.01689C0 7.57051 0.445995 8.0193 0.996159 8.0193L13.0038 8.0193C13.554 8.0193 14 7.5705 14 7.01688Z"
            fill="#0066FF"
          />
        </svg>
        Новый Лист
      </button>
      <button @click="showModal2" class="addBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.99697 14.0083C6.44681 14.0083 6.00082 13.5595 6.00082 13.0059L5.99983 1.01071C5.99983 0.457096 6.44582 0.00830078 6.99599 0.00830078C7.54615 0.00830078 7.99215 0.457097 7.99215 1.01071L7.99313 13.0059C7.99313 13.5595 7.54714 14.0083 6.99697 14.0083Z"
            fill="#0066FF"
          />
          <path
            d="M14 7.01688C14 6.46326 13.554 6.01447 13.0038 6.01447L0.996158 6.01448C0.445995 6.01448 0 6.46327 0 7.01689C0 7.57051 0.445995 8.0193 0.996159 8.0193L13.0038 8.0193C13.554 8.0193 14 7.5705 14 7.01688Z"
            fill="#0066FF"
          />
        </svg>
        Новое Задание
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit("showModal");
    },

    showModal2() {
      this.$emit("showModal2");
    },
  },
};
</script>

<style lang="css" scoped>
.trello_app {
  font-size: 1.5rem;
  font-family: "Fira Sans";
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.addBtn {
  border-radius: 50px;
  border: 1px solid #d3d8df;
  color: #000;
  font-family: "Fira Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 108%; /* 12.96px */
  display: flex;
  justify-content: space-between;
  padding: 9px 20px;
  gap: 10px;
  cursor: pointer;
  background: #fff;
}

.addBtn:hover {
  background-color: #d3d8df;
  transition: 600ms;
}

.nav_left_btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.saved_icon {
  cursor: pointer;
}
</style>
