<template>
  <div id="app">
  <b-navbar style="background-color: #e6932e">
    <b-container fluid="sm">
    <b-navbar-nav>
      <b-nav-item>
        <b-navbar-brand style="color: #fff" to="/">Inicio</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand style="color: #fff" to="/VisualizarPersonal">Personal</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand style="color: #fff" to="/VisualizarCategorias">Categorias</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand style="color: #fff" to="/VisualizarTickets">Tickets</b-navbar-brand> 
      </b-nav-item>
     
    </b-navbar-nav>
    </b-container>
  </b-navbar>


   <router-view class="container  mt-3" />
    <notifications position="bottom right" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
