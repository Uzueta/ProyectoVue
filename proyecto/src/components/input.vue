<template>
  <div>
    <label :for="id">{{titulo}}</label>
    <input class="form-control" 
        :id="id" 
        :value="value" 
        :type="tipo" 
        :maxlength="maxlength" 
        :disabled="disabled" 
        :placeholder="placeholder"
        @input="$emit('input',$event.target.value)"
    />
   <span v-if="error"  class="text-danger">{{mensajeError}}</span>
  </div>
</template>

<script>
export default {
    name: 'Input',
    props:{
        id: {type:[String,Number], require: true},
        titulo: String,
        value: [String,Number], 
        tipo:{type: String, default: 'text'},
        maxlength: {type: Number, default: 150},
        disabled: {type: Boolean, default: false},
        placeholder: {type: String, default: "Ingrese la información"},
        mensajeError: {type: String, default: "Campo Obligatorio"},
        error: {type: Boolean, default: false}
    }
}
</script>

<style>

</style>