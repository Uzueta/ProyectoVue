<template>
    <div>
        <h1>Agregar Tickets</h1>
        <b-form @submit.prevent="guardarTicket()">
            <Input 
                v-model="Ticket.Nombre"
                id="nombre"
                titulo="Nombre"
                :maxlength=50
                placeholder="Ingrese el nombre"
                mensajeError="Es necesario ingresar el nombre"
                :error="errorValidacion && !validacionTicket"
                class="mt-2"
            />
            <Input 
                v-model="Ticket.Descripcion"
                id="descripcion"
                titulo="Descripcion"
                :maxlength=100
                placeholder="Ingrese una descripcion"
                
                class="mt-2"
            />
            <Select
                v-model="Ticket.Prioridad"
                id="prioridad"
                titulo="Prioridad"
                :items= "prioridades"
                :error="errorValidacion && !validacionTicket"
            />
            <!-- <Input 
                v-model="Ticket.Prioridad"
                id="prioridad"
                titulo="Prioridad"
                :maxlength=1
                placeholder="Ingrese la priotidad"
                mensajeError="Es necesario ingresar la prioridad"
                :error="errorValidacion && !validacionTicket"
                class="mt-2"
            /> -->
            <Input 
                v-model="Ticket.Estatus"
                id="estatus"
                titulo="Estatus"
                :maxlength=3
                placeholder="Ingrese el status"
                :error="errorValidacion && !validacionTicket"
                class="mt-2"
            />
             <b-button type="submit" variant="primary" class="mt-3">Guardar</b-button>
        </b-form>
       <notifications position="bottom right"/>
    </div>
</template>

<script>
import Input from '../components/input'
import Select from '../components/Select'
import {mapActions, mapState} from 'vuex'
export default {
name: "AgregarTickets",
    components: {
        Input,
        Select
    },
    data(){
        return{
            Ticket: {
                Nombre: "",
                Descripcion: "",
                Prioridad: "",
                PersonaID: "",
                CategoryID: "",
                Estatus: ""
            },
            errorValidacion: false
        }
    },
    computed: {
        ...mapState(["prioridades"]),
        validacionTicket() {
            console.log(this.Ticket)
            return (
                this.Ticket.Nombre !== undefined && this.Ticket.Nombre.trim() !== '' && 
                this.Ticket.Prioridad !== null &&
                this.Ticket.PersonaID !== undefined && this.Ticket.PersonaID.trim() !== '' &&
                this.Ticket.CategoryID !== undefined && this.Ticket.CategoryID.trim() !== ''
            )
        }
    },
    methods:{
        ...mapActions(['crearTicket']),
        guardarTicket(){
            if(this.validacionTicket){
                this.errorValidacion = false
                //guardar
                this.crearTicket({
                    params: this.Ticket,
                    onComplete: (response ) => {
                        console.log(response.data.mensaje)
                        this.$notify({
                            type: 'success', 
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'VisualizarTicket'
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