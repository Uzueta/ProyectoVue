<template>
  <div>
      <h1>Editar Personal - ID: {{this.$route.params.id}}</h1>
      <b-form @submit.prevent="guardarPersona()">
      <Input 
                v-model="Personal.Nombre"
                id="nombre"
                titulo="Nombre"
                :maxlength=50
                placeholder="Ingrese el nombre"
                mensajeError="Es necesario ingresar el nombre"
                :error="errorValidacion && !validacionNombre"
                class="mt-2"
            />
            <Input 
                v-model="Personal.Apellidos"
                id="apellidos"
                titulo="Apellidos"
                :maxlength=80
                placeholder="Ingrese los apellidos"
                mensajeError="Es necesario ingresar los apellidos"
                :error="errorValidacion && !validacionApellidos"
                class="mt-2"
            />
            <Input 
                v-model="Personal.Telefono"
                id="telefono"
                titulo="Telefono"
                :maxlength=10
                placeholder="Ingrese el telefono"
                class="mt-2"
            />
            <Input 
                v-model="Personal.Direccion"
                id="direccion"
                titulo="Direccion"
                :maxlength=150
                placeholder="Ingrese la direccion"
                class="mt-2"
            />
      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions} from 'vuex'
import Input from "../components/input";
export default {
name: 'EditarPersonal',
components: {
    Input,
  },
  data() {
    return {
            Personal: {
                Nombre: "",
                Apellidos: "",
                Telefono: "",
                Direccion: ""
            },
      errorValidacion: false,
    };
  },
computed: {
        validacionNombre() {
            return (
                this.Personal.Nombre !== undefined && this.Personal.Nombre.trim() !== ''
            )
        },
        validacionApellidos(){
            return (
                this.Personal.Apellidos !== undefined && this.Personal.Apellidos.trim() !== ''
            )
        }
},
methods: {
    ...mapActions(['obtenerPersona', 'editarPersona']),
    guardarPersona() {
      if (this.validacionNombre && this.validacionApellidos) {
        this.errorValidacion = false;
        //Guardar
         this.editarPersona({
          id: this.$route.params.id,
          params: this.Personal,
          onComplete: (response) => {
           
           console.log(response.data);
            this.$notify({
              type: 'success', 
              title: response.data.mensaje,
            });
            this.$router.push({
                name: 'VisualizarPersonal'
            })
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: 'error', 
              title: error.response.data.mensaje,
            });
          }, 
        }); 
      } else {
        this.errorValidacion = true;
      }
    }
},
created() {
    this.obtenerPersona({
        id: this.$route.params.id,
        onComplete: (response) => {
            Vue.set(this, 'persona', response.data.data)
        }
    })
}
}
</script>