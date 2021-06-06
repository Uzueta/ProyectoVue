<template>
  <div>
    <label class="mt-2">{{ titulo }}</label>
    <!-- <b-form-select class="form-control" v-model="selected" 
    :options="options"
    ></b-form-select> -->
    <select class="form-control" v-model="selected">
        <option v-for="item in items" :value="item.val" :key="item.id">
     {{ item }}
        </option>
    </select>
  <span v-if="error"  class="text-danger">{{mensajeError}}</span>
  </div>
</template>

<script>
  export default {
    name: "Select",
    props: {
        titulo: String,
        items: Array,
        value: String, 
        mensajeError: {type: String, default: "Campo Obligatorio"},
        error: {type: Boolean, default: false}
    },
    data() {
    let aux = []
    aux.push({ value: null, text: 'Seleccione una opcion' })
    for (let index = 0; index < this.items.length; index++) {
        aux.push({
            value: this.items[index], 
            text: this.getOptions(this.items[index])
        })   
    }
      return {
        selected: null,
        input: "",
        options: aux
      }
    },
    methods: {
        getOptions(item){
            switch(item){
                case 'B': return 'Baja';
                case 'M': return 'Media';
                case 'A': return 'Alta';
                }
        }
    }
  }
</script>

<style>

</style>