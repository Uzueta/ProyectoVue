<template>
  <div id="app">
  <b-navbar type="dark" variant="dark">
    <b-container fluid="sm">
    <b-navbar-nav>
      <b-nav-item>
        <b-navbar-brand to="/">Inicio</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand to="/VisualizarPersonal">Personal</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand to="/VisualizarCategorias">Categorias</b-navbar-brand> 
      </b-nav-item>

      <b-nav-item>
        <b-navbar-brand to="/VisualizarTickets">Tickets</b-navbar-brand> 
      </b-nav-item>
      <!-- Navbar dropdowns -->
      <!-- <b-nav-item-dropdown text="Tickets" right>
        <b-dropdown-item><router-link to="/VisualizarTickets">Visualizar Tickets</router-link></b-dropdown-item>
        <b-dropdown-item href="#">Agregar Tickets</b-dropdown-item>
        <b-dropdown-item><router-link to="/EditarTickets">Editar Tickets</router-link></b-dropdown-item>
        <b-dropdown-item href="#">Eliminar Tickets</b-dropdown-item>
      </b-nav-item-dropdown> -->
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
  color: #2c3e50;
}
</style>
