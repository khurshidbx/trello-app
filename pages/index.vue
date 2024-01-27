<template>
  <div>
    <!-- <Tutorial /> -->
    <Navbar
      @showModal="dialogFormVisible = true"
      @showModal2="dialogFormVisible2 = true"
    />
    <!-- <div class="box_container"> -->
    <div class="w-[80%] px-[2rem]">
      <TestDrag
        :nameK="nameK"
        :showSelectBox="showSelectBox"
        @openSelectBox="openSelectBoxHandler"
        @editBox="editBoxHandler"
        @deleteBox="deleteBoxHandler"
        :items="items"
      />
    </div>

    <!-- Box Modal  -->
    <el-dialog
      class="w-[100%]"
      title="Shipping address"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="Title">
          <el-input
            class="border border-[1px] rounded-[5px]"
            v-model="form.title"
          ></el-input>
        </el-form-item>
        <el-form-item label="description">
          <el-input
            class="border border-[1px] rounded-[5px]"
            v-model="form.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitFormHandler">Submit</el-button>
      </span>
    </el-dialog>

    <!-- Box Item Modal  -->
    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible2">
      <el-form :model="form2">
        <el-form-item label="Лист" :label-width="formLabelWidth">
          <el-select
            class="border border-[1px] rounded-[5px]"
            v-model="form2.region"
            placeholder="Please select a zone"
          >
            <el-option
              v-for="thBox in items"
              :label="thBox.title"
              :value="thBox.id"
            ></el-option>
            <!-- <el-option label="Zone No.2" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="Новое Задание" :label-width="formLabelWidth">
          <el-input
            class="border border-[1px] rounded-[5px]"
            v-model="form2.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">Cancel</el-button>
        <el-button type="primary" @click="submitBoxItemFormHandler"
          >Submit</el-button
        >
      </span>
    </el-dialog>

    <!-- Update Modal   -->
    <el-dialog
      class="w-[100%]"
      title="Shipping address"
      :visible.sync="dialogFormVisible3"
    >
      <el-form :model="form3">
        <el-form-item label="Title">
          <el-input
            class="border border-[1px] rounded-[5px]"
            v-model="form3.title"
          ></el-input>
        </el-form-item>
        <el-form-item label="description">
          <el-input
            class="border border-[1px] rounded-[5px]"
            v-model="form3.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible3 = false">Cancel</el-button>
        <el-button type="primary" @click="submitUpdateFormHandler"
          >Submit</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import TestDrag from "../components/testDrag";

export default {
  components: {
    TestDrag,
  },
  data() {
    return {
      nameK: "Khurshid",
      showSelectBox: false,
      selectedBoxEditId: undefined,
      items: [
        {
          id: "af1",
          label: "header",
          title: "Обязательные для всех",
          description:
            "Документы, обязательные для всех сотрудников без исключения",
          items: [
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
      showModal: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      form: {
        title: "",
        description: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },

      form2: {
        title: "",
        description: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },

      form3: {
        title: "",
        description: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  name: "IndexPage",
  created() {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    console.log('storedItems',storedItems)
    // console.log(JSON.parse(localStorage.getItem("items")));
    this.items = storedItems ? [...storedItems] : this.items;
  },
  methods: {
    openSelectBoxHandler() {
      this.showSelectBox = true;
      console.log("Indexda show " + this.showSelectBox);
    },

    showModalHandler() {
      this.showModal = !this.showModal;
    },

    deleteBoxHandler(selectedId) {
      this.items = this.items.filter((item) => item.id !== selectedId);
      localStorage.setItem("items", JSON.stringify(this.items));
    },

    editBoxHandler(slectedIdEdit) {
      this.selectedBoxEditId = slectedIdEdit;
      this.dialogFormVisible3 = true;
      // const selectedBoxIndex = this.items.findIndex(
      //   (el) => el.id === slectedIdEdit
      // );

      // const selectedBox = this.items[selectedBoxIndex];
      // console.log(selectedBox);
    },

    submitFormHandler() {
      this.dialogFormVisible = false;

      const newObj = {
        id: Math.random(),
        label: "header",
        title: this.form.title,
        description: this.form.description,
        items: [],
        tint: 1,
      };

      this.items.push(newObj);
      localStorage.setItem("items", JSON.stringify(this.items));
    },

    submitBoxItemFormHandler() {
      this.dialogFormVisible2 = true;
      const selectedListId = this.form2.region;
      // const selectedListIndex = this.items.findIndex(
      //   (el) => el.id === selectedListId
      // );
      const selectedList = this.items.find(
        (elem) => elem.id === selectedListId
      );

      const newTask = {
        id: "af31",
        label: this.form2.title,
        prior: this.form2.title,
        type: "Для всех",
      };

      selectedList.items.push(newTask);

      // this.items[selectedListIndex] = selectedList;
      // console.log(this.items[selectedListIndex]);
      // localStorage.setItem("items", JSON.stringify(this.items));
      this.dialogFormVisible2 = false;
    },

    submitUpdateFormHandler() {
      const selectedBoxIndex = this.items.findIndex(
        (el) => el.id === this.selectedBoxEditId
      );

      if (selectedBoxIndex !== -1) {
        // Create a new object with the updated properties
        const updatedBox = {
          ...this.items[selectedBoxIndex],
          title: this.form3.title,
          description: this.form3.description,
        };

        // Replace the old object with the new one
        this.$set(this.items, selectedBoxIndex, updatedBox);

        // Save to localStorage
        localStorage.setItem("items", JSON.stringify(this.items));
        this.dialogFormVisible3 = false;
      } else {
        console.error("Selected box not found");
      }
    },
  },
};
</script>

<style>
.box_container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
