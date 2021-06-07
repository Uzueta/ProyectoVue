<template>
    <div>
        <h1>Agregar Personal</h1>
        <b-form @submit.prevent="guardarPersonal()">
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
             <b-button type="submit" variant="primary" class="mt-3">Guardar</b-button>
        </b-form>
       <notifications position="bottom right"/>
    </div>
</template>

<script>
import Input from '../components/input'
import {mapActions} from 'vuex'
export default {
name: "AgregarPersonal",
    components: {
        Input
    },
    data(){
        return{
            Personal: {
                Nombre: "",
                Apellidos: "",
                Telefono: "",
                Direccion: ""
            },
            errorValidacion: false
        }
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
    methods:{
        ...mapActions(['crearPersonal']),
        guardarPersonal(){
            if(this.validacionNombre && this.validacionApellidos ){
                this.errorValidacion = false
                //guardar
                this.crearPersonal({
                    params: this.Personal,
                    onComplete: (response ) => {
                        console.log(response.data.mensaje)
                        this.$notify({
                            type: 'success', 
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'VisualizarPersonal'
                        });
                    },
                    onError: (error) => {
                        console.log(error.response.data.mensaje)
                        this.$notify({
                            type: 'error', 
                            title: error.response.data.mensaje,
                        });
                    }
                })
            }else{
                this.errorValidacion = true
            }
        },
    }
}
</script>

<style>

</style>