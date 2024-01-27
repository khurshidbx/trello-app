<template>
  <li v-show="isOpenSel" class="box_item">
    <h3 class="boxitem_title">
      {{ boxItem.prior }}
    </h3>
    <span class="boxitem_">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <circle cx="4" cy="4" r="4" fill="#00C2FF" />
      </svg>
    </span>
    <p class="boxitem_text1">{{ boxItem.prior }}</p>
    <p class="boxitem_text2">{{ boxItem.prior }}х</p>
  </li>
</template>

<script>
export default {
  props: ["boxItem", 'index'],
  computed: {
    isOpenSel() {
      return this.$store.state.isOpenSelect.includes(this.index);
    },
  },
  mounted() {
    // console.log("Hello Item", this.$store.state.isOpenSelect);
  },
};
</script>

<style lang="css" scoped>
.box_item {
  padding: 9px 15px;
  display: flex;
  gap: 2rem;
  align-items: center;
  border: 1px solid #dfe4ef;
  background: #fff;
  margin-left: 2rem;
}

.boxitem_title {
  color: #000;
  font-family: "Fira Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 108%; /* 14.04px */
}
.boxitem_text1 {
  color: #ff238d;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Fira Sans";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 108%; /* 11.88px */
}
.boxitem_text2 {
  color: #8e9cbb;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Fira Sans";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 108%; /* 11.88px */
}
</style>
