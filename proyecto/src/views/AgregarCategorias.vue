<template>
    <div>
        <h1>Agregar Categoria</h1>
        <b-form @submit.prevent="guardarCategoria()">
            <Input 
                v-model="categoria.CategoryName"
                id="nombre"
                titulo="Nombre"
                :maxlength=50
                placeholder="Ingrese el nombre"
                mensajeError="Es necesario ingresar el nombre"
                :error="errorValidacion && !validacionCategoria"
                class="mt-2"
            />
            
             <b-button type="submit" variant="primary" class="mt-3" >Guardar</b-button>
        </b-form>
        <notifications position="bottom right"/>
    </div>
</template>

<script>
import Input from '../components/input'
import {mapActions} from 'vuex'
export default {
    name: "AgregarCategorias",
    components: {
        Input
    },
    data(){
        return{
            categoria: {
                CategoryName: ""
            },
            errorValidacion: false
        }
    },
    computed: {
        validacionCategoria() {
            return (
                this.categoria.CategoryName !== undefined &&
                this.categoria.CategoryName.trim() !== ''
            )
        }
    },
    methods:{
        ...mapActions(['crearCategoria']),
        guardarCategoria(){
            if(this.validacionCategoria ){
                this.errorValidacion = false
                //guardar
                this.crearCategoria({
                    params: this.categoria,
                    onComplete: (response ) => {
                        console.log(response.data)
                        this.$notify({
                            type: 'success', 
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'VisualizarCategorias'
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