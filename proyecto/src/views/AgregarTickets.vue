<template>
  <div>
    <h1>Agregar Tickets</h1>
    <b-form @submit.prevent="guardarTicket()">
      <Input
        v-model="Ticket.Nombre"
        id="nombre"
        titulo="Nombre"
        :maxlength="50"
        placeholder="Ingrese el nombre"
        mensajeError="Es necesario ingresar el nombre"
        :error="errorValidacion && !validacionTicket"
        class="mt-2"
      />
      <Input
        v-model="Ticket.Descripcion"
        id="descripcion"
        titulo="Descripcion"
        :maxlength="100"
        placeholder="Ingrese una descripcion"
        class="mt-2"
        f
      />

      <label class="mt-2">Prioridad</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="Ticket.Prioridad"
      >
        <option value="" disabled hidden>Seleccione la prioridad</option>
        <option value="B">Baja</option>
        <option value="M">Media</option>
        <option value="A">Alta</option>
      </select>

      <span v-if="errorValidacion && !validacionTicket" class="text-danger"
        >{{ "Campo Obligatorio" }}<br
      /></span>

      <label class="mt-2">Personal</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="Ticket.PersonaID"
      >
        <option value="" disabled hidden>Seleccione el personal</option>
        <option v-for="item in personas" :value="item.PersonaID" :key="item.id">
          {{ item.Nombre + " " + item.Apellidos }}
        </option>
      </select>

      <span v-if="errorValidacion && !validacionTicket" class="text-danger"
        >{{ "Campo Obligatorio" }}<br
      /></span>

      <label class="mt-2">Categoria</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="Ticket.CategoryID"
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

      <span v-if="errorValidacion && !validacionTicket" class="text-danger"
        >{{ "Campo Obligatorio" }}<br
      /></span>

      <label class="mt-2">Estatus</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="Ticket.Estatus"
      >
        <option value="" disabled hidden>Seleccione el estatus</option>

        <option value="" disabled hidden>Seleccione la prioridad</option>
        <option value="ABT">Abierto</option>
        <option value="ESP">En espera</option>
        <option value="FIN">Finalizado</option>
      </select>

      <span v-if="errorValidacion && !validacionTicket" class="text-danger"
        >{{ "Campo Obligatorio" }}<br
      /></span>

      <b-button type="submit" variant="primary" class="mt-3">Guardar</b-button>
    </b-form>
    <notifications position="bottom right" />
  </div>
</template>

<script>
import Input from "../components/input";
// import Select from "../components/Select.vue"

import { mapActions, mapState } from "vuex";
export default {
  name: "AgregarTickets",
  components: {
    Input,
    // Select
  },
  data() {
    return {
      Ticket: {
        Nombre: "",
        Descripcion: "",
        Prioridad: "",
        PersonaID: "",
        CategoryID: "",
        Estatus: "",
      },
      errorValidacion: false,
    };
  },
  computed: {
    ...mapState(["prioridades", "personas", "categorias"]),
    validacionTicket() {
      console.dir(
        this.Ticket.Nombre,
        this.Ticket.Prioridad,
        this.Ticket.PersonaID,
        this.Ticket.CategoryID
      );
      return (
        this.Ticket.Nombre !== undefined &&
        this.Ticket.Nombre.trim() !== "" &&
        this.Ticket.Prioridad.length > 0 &&
        this.Ticket.PersonaID !== undefined &&
        this.Ticket.CategoryID !== undefined
      );
    },
  },
  methods: {
    ...mapActions(["crearTicket", "setPersonas", "setCategorias"]),
    guardarTicket() {
      console.log(this.validacionTicket);
      if (this.validacionTicket) {
        console.log(this.Ticket);
        this.errorValidacion = false;
        //guardar
        this.crearTicket({
          params: this.Ticket,
          onComplete: (response) => {
            console.log(response.data.mensaje);
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
        this.errorValidacion = true;
      }
    },
  },
  mounted() {
    this.setPersonas();
    this.setCategorias();
  },
};
</script>

<style>
</style>