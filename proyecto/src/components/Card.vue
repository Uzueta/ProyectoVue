<template>
    <div id="card">
       <b-card :border-variant=color :header-bg-variant=color header-text-variant="white"  :header=nombre class="text-center" id="titulo" v-b-hover="handleHover">
        <b-card-text id="content">{{descripcion}}</b-card-text>
        <b-card-text id="content">{{estatus}}</b-card-text>
        <b-card-text id="content">{{prioridad}}</b-card-text>
      </b-card>
    </div>        
</template>

<script>
export default({
    name: 'Card',
    props:{        
        id: Number,
        nombre: String,
        descripcion: String,
        estatus: String,
        prioridad: String,
        color : String
    },
    methods: {
      handleHover(hovered){
        this.isHovered = hovered
      }
    }
   
})
</script>

<style scoped>
    #card{
        width: 300px;
        margin: 20px;
    }

    #titulo{
      font-weight: 600;
      font-size:24px
    }

    #content{
      color: black;
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      padding: 0;

    }
</style>