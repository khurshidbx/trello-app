<template>
  <div>
    <div class="box gap-4">
      <btn
        class="box_icon hover:bg-[#daf7e2] transition-all transition-[500ms] mr-5"
        @click="openSelect"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          class="rotate-180"
        >
          <path
            d="M3.53976 0.194049C3.28126 0.452672 3.28126 0.871984 3.53976 1.13061L6.87001 4.46243C7.12851 4.72106 7.54762 4.72106 7.80612 4.46243C8.06462 4.20381 8.06462 3.7845 7.80612 3.52588L4.47587 0.194049C4.21737 -0.0645742 3.79826 -0.0645742 3.53976 0.194049Z"
            fill="#0066FF"
          />
          <path
            d="M4.47058 0.194049C4.72908 0.452672 4.72908 0.871984 4.47058 1.13061L1.12999 4.47278C0.871489 4.7314 0.452377 4.7314 0.193876 4.47278C-0.0646252 4.21416 -0.0646252 3.79485 0.193876 3.53622L3.53447 0.194049C3.79297 -0.0645742 4.21208 -0.0645742 4.47058 0.194049Z"
            fill="#0066FF"
          />
        </svg>
      </btn>

      <h1 class="box_title">{{ boxItem.title }}</h1>
      <div class="box_colors">
        <span class="circle_color"></span>
        <span class="circle_color"></span>
        <span class="circle_color"></span>
      </div>
      <p class="box_discription">
        {{ boxItem.description }}
      </p>
      <div class="box_actions flex items-center gap-3">
        <button @click="editBoxHandler" class="edit_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7.70711 3.29289L10.7071 6.29289M9.33943 1.62805C9.53855 1.42894 9.77493 1.27099 10.0351 1.16323C10.2953 1.05546 10.5741 1 10.8557 1C11.1373 1 11.4161 1.05546 11.6763 1.16323C11.9364 1.27099 12.1728 1.42894 12.3719 1.62805C12.5711 1.82717 12.729 2.06356 12.8368 2.32372C12.9445 2.58388 13 2.86272 13 3.14431C13 3.42591 12.9445 3.70474 12.8368 3.9649C12.729 4.22506 12.5711 4.46145 12.3719 4.66057L5.16971 11.8628L1 13L2.13719 8.8303L9.33943 1.62805Z"
              stroke="#8E9CBB"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button @click="deleteBoxHandler" class="delete_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V3ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3V5ZM2.92846 3.6C2.92846 4.15228 3.37618 4.6 3.92846 4.6C4.48075 4.6 4.92846 4.15228 4.92846 3.6H2.92846ZM5.21418 1V0V1ZM7.78561 1V0V1ZM8.07132 3.6C8.07132 4.15228 8.51903 4.6 9.07132 4.6C9.6236 4.6 10.0713 4.15228 10.0713 3.6H8.07132ZM6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7H6ZM4 11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11H4ZM9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7H9ZM7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11H7ZM1 5H12V3H1V5ZM4.92846 3.6V2.3H2.92846V3.6H4.92846ZM4.92846 2.3C4.92846 2.21689 4.96122 2.13938 5.01604 2.08395L3.59404 0.677572C3.16663 1.10973 2.92846 1.69355 2.92846 2.3H4.92846ZM5.01604 2.08395C5.0705 2.02889 5.14199 2 5.21418 2V0C4.60438 0 4.02182 0.245036 3.59404 0.677572L5.01604 2.08395ZM5.21418 2H7.78561V0H5.21418V2ZM7.78561 2C7.85779 2 7.92929 2.02889 7.98374 2.08395L9.40575 0.677572C8.97796 0.245036 8.3954 0 7.78561 0V2ZM7.98374 2.08395C8.03856 2.13938 8.07132 2.21689 8.07132 2.3H10.0713C10.0713 1.69355 9.83316 1.10973 9.40575 0.677572L7.98374 2.08395ZM8.07132 2.3V3.6H10.0713V2.3H8.07132ZM4 7V11H6V7H4ZM7 7V11H9V7H7ZM10 4V12H12V4H10ZM9 13H4V15H9V13ZM3 12V4H1V12H3ZM4 13C3.44772 13 3 12.5523 3 12H1C1 13.6569 2.34315 15 4 15V13ZM10 12C10 12.5523 9.55228 13 9 13V15C10.6569 15 12 13.6569 12 12H10Z"
              fill="#FF238D"
            />
          </svg>
        </button>
        <button class="dragAndDrop_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
          >
            <path
              d="M4.69594 14.7086C4.30473 15.0991 3.67045 15.0991 3.27924 14.7086L0.293409 11.7296C-0.097803 11.339 -0.0978031 10.7059 0.293409 10.3153C0.684621 9.92482 1.3189 9.92482 1.71011 10.3153L4.69594 13.2944C5.08715 13.6849 5.08715 14.318 4.69594 14.7086Z"
              fill="#8E9CBB"
            />
            <path
              d="M3.30385 14.7086C3.69506 15.0991 4.32934 15.0991 4.72055 14.7086L7.70659 11.7296C8.0978 11.339 8.0978 10.7059 7.70659 10.3153C7.31538 9.92482 6.6811 9.92482 6.28989 10.3153L3.30385 13.2944C2.91264 13.6849 2.91264 14.318 3.30385 14.7086Z"
              fill="#8E9CBB"
            />
            <path
              d="M3.98759 14.0157C3.43433 14.0157 2.98583 13.5679 2.98583 13.0157V3C2.98583 2.44772 3.43433 2 3.98759 2C4.54085 2 4.98935 2.44772 4.98935 3V13.0157C4.98935 13.5679 4.54085 14.0157 3.98759 14.0157Z"
              fill="#8E9CBB"
            />
            <path
              d="M4.69594 0.292893C4.30473 -0.0976311 3.67045 -0.0976311 3.27924 0.292893L0.293409 3.27191C-0.097803 3.66243 -0.0978031 4.2956 0.293409 4.68612C0.684621 5.07664 1.3189 5.07664 1.71011 4.68612L4.69594 1.70711C5.08715 1.31658 5.08715 0.683417 4.69594 0.292893Z"
              fill="#8E9CBB"
            />
            <path
              d="M3.30385 0.292893C3.69506 -0.0976311 4.32934 -0.0976311 4.72055 0.292893L7.70659 3.27191C8.0978 3.66243 8.0978 4.2956 7.70659 4.68612C7.31538 5.07664 6.6811 5.07664 6.28989 4.68612L3.30385 1.70711C2.91264 1.31658 2.91264 0.683417 3.30385 0.292893Z"
              fill="#8E9CBB"
            />
          </svg>
        </button>
      </div>
    </div>
    <ul>
      <!-- <box-item /> -->
    </ul>
  </div>
</template>

<script>
// import TheBox from "../components/TheBox";
// import BoxItem from "../components/BoxItem";
export default {
  components: {
    // TheBox,
    // BoxItem,
  },

  props: ["boxItem", "showSelectBox", "index"],

  methods: {
    openSelect() {
      this.$emit("openSelectBox");
      this.$store.commit("openSelectFunc", this.index);
    },

    deleteBoxHandler() {
      this.$emit("deleteBox", this.boxItem.id);
    },

    editBoxHandler() {
      this.$emit("editBox", this.boxItem.id);
    },
  },
};
</script>

<style lang="css" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #dfe4ef;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 5px;
  margin-top: 2rem;
}

.box_icon {
  border: 2px solid #d3d8df;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
