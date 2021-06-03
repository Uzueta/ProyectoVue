<template>
  <div class="table">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Table",
  props: {
      items: array
  },
};
</script>