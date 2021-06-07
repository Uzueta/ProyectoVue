<template>
  <div>
    <h1>Estatus</h1>
    <b-form @submit.prevent="cambiarEstatus()">

      <select
        class="form-select"
        aria-label="Default select example"
        v-model="tickets.Estatus"
      >
        <option value="" disabled hidden>Seleccione el estatus</option>
        <option value="ABT">ABT</option>
        <option value="ESP">ESP</option>
        <option value="FIN">FIN</option>
      </select>

      <span v-if="erroresValidacion && !validacionEstatus" class="text-danger"
        >{{ "Es necesario seleccionar el estatus" }}<br
      /></span>


      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";

export default {
  name: "EditarTickets",
  components: {
  },
  data() {
    return {
      tickets: {
        Estatus: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionEstatus() {
      return (
        this.tickets.Estatus>'A'
      );
    },
  },
  methods: {
    ...mapActions([
      "obtenerTicket",
      "editarTicket",
    ]),
    cambiarEstatus() {
      if (this.validacionEstatus) {
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
        Vue.set(this, "ticket", response.data.data);
      },
    });
  },
  mounted() {
  },
};
</script>

<style>
</style>