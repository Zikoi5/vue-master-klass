<template>
  <div class="container mt-5">
    <div
      class="row mb-3 align-items-center"
      v-for="(item, index) in todoList"
      :key="index"
    >
      <div class="col-md-10">
        <input
          type="text"
          class="td__input"
          :class="[{ td__done__checkbox: item.checked }]"
          v-model="item.text"
          @keypress="isNumberKey"
          :disabled="item.checked"
        />
      </div>
      <div class="col" @click="item.checked = !item.checked">
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style="height: 50px"
        >
          <path
            d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0"
          />
        </svg>
      </div>
    </div>

    <div class="row my-4 mx-0">
      <div class="btn btn-primary" @click="addTodoElement">
        Qo'shish
      </div>
    </div>

    <!-- <pre>{{ todoList }}</pre> -->

    <div class="mb-4">{{ comp }}</div>
    <div>{{ compFunc() }}</div>
  </div>
</template>

<script>
const todoElement = () => {
  return {
    text: "",
    checked: false
  }
}

import { isNumberKey } from "@/utils"

export default {
  data() {
    return {
      // t,
      todoList: [todoElement()],

      a: 1
    }
  },

  computed: {
    comp() {
      console.log("c", "comp ishga tushdi")
      return this.a
    }
  },

  methods: {
    isNumberKey,

    compFunc() {
      console.log("m", "compFunc ishga tushdi")
      return this.a
    },

    addTodoElement() {
      this.todoList.push(todoElement())
    }
  }
}
</script>
