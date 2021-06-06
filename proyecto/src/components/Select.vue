  <template>
  <div>

    <b-form-select 
    v-on:change="getSelectedItem"
    class="form-control" v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>
<script>
  export default {
    name: "Select",
    props:["items","value"],
    data() {
      return {
        selected: null,
        options: this.items
      }
    },
    methods: { 
      getSelectedItem(myarg){
        console.log(myarg)
      }
    }
  }
</script>

<style>

</style>