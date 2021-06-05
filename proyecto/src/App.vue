<template>
  <div id="app">
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/">Inicio</router-link> 
      </b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Tickets" right>
        <b-dropdown-item><router-link to="/VisualizarTickets">Visualizar Tickets</router-link></b-dropdown-item>
        <b-dropdown-item href="#">Agregar Tickets</b-dropdown-item>
        <b-dropdown-item href="#">Editar Tickets</b-dropdown-item>
        <b-dropdown-item href="#">Eliminar Tickets</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Personal" right>
        <b-dropdown-item><router-link to="/VisualizarPersonal">Visualizar Personal</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/AgregarPersonal">Agregar Personal</router-link></b-dropdown-item>
        <b-dropdown-item href="#">Editar Personal</b-dropdown-item>
        <b-dropdown-item href="#">Eliminar Personal</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Categoria" right>
        <b-dropdown-item><router-link to="/VisualizarCategorias">Visualizar Categorias</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/AgregarCategorias">Agregar Categorias</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/EliminarCategorias">Elminar Categorias</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>
  </b-navbar>


    <router-view class="container mt-3"/>
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
