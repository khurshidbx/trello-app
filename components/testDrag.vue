<template>
  <div>
    <Container @getChildPayload="parentGetPayload" @onDrop="parentDrop">
      <Draggable v-for="(mainElement, groupIndex) in items" :key="groupIndex">
        <!-- <div :class="`holder holder--tint-${mainElement.tint}`"></div> -->
        <!-- <div class="holder__title">{{ mainElement.label }}</div> -->
        <the-box
          :index="groupIndex"
          :showSelectBox="showSelectBox"
          @openSelectBox="openSelectBoxHandler"
          @editBox="editBoxHandler"
          @deleteBox="deletBoxHandler"
          :boxItem="mainElement"
        ></the-box>

        <div class="holder__content">
          <Container
            class="list"
            @getChildPayload="
              (mainindex) => {
                return items[groupIndex].items[mainindex];
              }
            "
            @onDrop="
              (mainindex) => {
                childOnDrop(mainindex, groupIndex);
              }
            "
            groupName="LEADS_OVERVIEW"
          >
            <Draggable
              v-for="(boxItem, i) in mainElement.items"
              :key="i"
              class=""
            >
              <box-item
                :index="groupIndex"
                :showSelectBox="showSelectBox"
                :boxItem="boxItem"
              ></box-item>
            </Draggable>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "./utils/util";
import TheBox from "../components/TheBox.vue";
import BoxItem from "../components/BoxItem";
export default {
  name: "Simple",
  components: { Container, Draggable, TheBox, BoxItem },
  data() {
    return {};
  },

  props: ["items", "showSelectBox", "nameK"],

  computed: {},

  methods: {
   
    openSelectBoxHandler() {
      this.$emit("openSelectBox");
    },
    deletBoxHandler(selectedId) {
      this.$emit("deleteBox", selectedId);
    },

    editBoxHandler(slectedIdEdit) {
      this.$emit("editBox", slectedIdEdit);
    },
    parentDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);

      console.log(applyDrag(this.items, dropResult))
      // localStorage.setItem(
      //   "items",
      //   JSON.stringify(applyDrag(this.items, dropResult))
      // );
      applyDrag(this.items, dropResult);
    },
    parentGetPayload(index) {
      return this.items[index];
    },

    childGetPayload(index, groupIndex) {
      return this.items[groupIndex].items[index];
    },

    

    childOnDrop(dropResult, groupIndex) {
      const newValue = applyDrag(this.items[groupIndex].items, dropResult);
      const workValue = this.items.slice();

      workValue[groupIndex] = {
        ...this.items[groupIndex],
        items: newValue,
      };
      this.items = workValue;

      // localStorage.setItem('items',JSON.stringify(workValue))
    },
  },


  created() {
      console.log("Items", this.items);
    },
};
</script>

<style scoped>
:root {
  --border-radius-500: 8px;
  --color-on-background: #facada;
  --fonts-primary: arial, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #2a385c;
  background-image: linear-gradient(
    320deg,
    hsl(215, 10%, 12%) 0% /* down */,
    hsl(215, 19%, 24%) /* up */ 100%
  );
  font-family: var(--fonts-primary);
  font-size: 14px;
  margin: 0;
  min-height: 100vh;
}

.layout__wrapper {
  background-image: linear-gradient(
    0deg,
    hsl(215, 14%, 16%) 0%,
    hsl(215, 19%, 29%) 100%
  );
  border-radius: 3px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.25);
  margin: 3rem auto;
  max-width: 370px;
}

.app-bar {
  border-radius: 3px;
}

.app-bar__title {
  color: var(--color-on-background);
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
}

.list {
  list-style: none;
  margin: 0;
  min-height: 1.5rem;
  padding: 0;
  position: relative;
}

.list__item {
}

.card {
  background-color: red;
  border-radius: var(--border-radius-500);
  cursor: pointer;
  color: hsl(228, 19%, 98%);
  padding: 0.66rem 1rem;
  position: relative;
  height: 30px;
}

.list__item + .list__item {
  margin-top: 0.5rem;
}

.holder {
  padding: 1rem 1.5rem;
}

.holder__title {
  background-color: #1da5f9;
  background-image: linear-gradient(90deg, #028ce1 0%, #6acbe0 100%);
  border-radius: var(--border-radius-500);
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
}

.holder--tint-2 .holder__title {
  background-image: linear-gradient(90deg, #2fd4bd 0%, #66e887 100%);
}

.holder--tint-3 .holder__title {
  background-image: linear-gradient(90deg, #fe8080 33%, #fea380 100%);
}
</style>
