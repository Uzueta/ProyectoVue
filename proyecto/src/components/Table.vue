<template>
  <div>
      <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        items: Array,
        fields: Array
    }
}
</script>

<style>

</style>