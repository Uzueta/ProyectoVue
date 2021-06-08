<template>
  <div>
    <h1>Editar</h1>
    <b-form @submit.prevent="guardarTickets()">
      <Input
        v-model="tickets.Descripcion"
        id="Descripcion"
        titulo="Descripcion"
        placeholder="Ingrese la descripción"
        :maxlength="100"
        class="mb-2"
      />

      <label class="mt-2">Prioridad</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="tickets.Prioridad"
      >
        <option value="" disabled hidden>Seleccione la prioridad</option>
        <option value="B">Baja</option>
        <option value="M">Media</option>
        <option value="A">Alta</option>
      </select>

      <span v-if="erroresValidacion && !validacionPrioridad" class="text-danger"
        >{{ "Es necesario seleccionar la prioridad" }}<br
      /></span>

      <label class="mt-2">Categoría</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="tickets.CategoryID"
      >
        <option value="" disabled hidden>Seleccione la categoria</option>
        <option
          v-for="item in categorias"
          :value="item.CategoryID"
          :key="item.id"
        >
          {{ item.CategoryName }}
        </option>
      </select>
      <span v-if="erroresValidacion && !validacionCategoria" class="text-danger"
        >{{ "Es necesario seleccionar la categoría" }}<br
      /></span>

      <label class="mt-2">Personal</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="tickets.PersonaID"
      >
        <option value="" disabled hidden>Seleccione el personal</option>
        <option v-for="item in personas" :value="item.PersonaID" :key="item.id">
          {{ item.Nombre + " " + item.Apellidos }}
        </option>
      </select>
      <span v-if="erroresValidacion && !validacionPersonal" class="text-danger"
        >{{ "Es necesario seleccionar al personal" }}<br
      /></span>

      <b-button type="submit" class="m-2" variant="primary">Guardar</b-button>
      <b-button type="submit" class="m-2" variant="secondary" to="/VisualizarTickets">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import Input from "../components/input";

export default {
  name: "EditarTickets",
  components: {
    Input,
  },
  data() {
    return {
      tickets: {
        Descripcion: "",
        Prioridad: "",
        PersonaID: "",
        CategoryID: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    ...mapState(["personas", "categorias"]),
    validacionPrioridad() {
      return (
        this.tickets.Prioridad !== undefined &&
        this.tickets.Prioridad.trim() !== ""
      );
    },
    validacionPersonal() {
      return (
        this.tickets.PersonaID>0
      );
    },
    validacionCategoria() {
      return (
        this.tickets.CategoryID>0
      );
    },
  },
  methods: {
    ...mapActions([
      "obtenerTicket",
      "editarTicket",
      "setPersonas",
      "setCategorias",
    ]),
    guardarTickets() {
      if (this.validacionPrioridad && this.validacionPersonal && this.validacionCategoria) {
        this.erroresValidacion = false;

        this.editarTicket({
          id: this.$route.params.id,
          params: this.tickets,
          onComplete: (response) => {
            console.log(response.data);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "VisualizarTickets",
            });
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
    this.obtenerTicket({
      id: this.$route.params.id,
      onComplete: (response) => {
        Vue.set(this, "tickets", response.data.data);
      },
    });
  },
  mounted() {
    this.setPersonas();
    this.setCategorias();
  },
};
</script>

<style>
</style>