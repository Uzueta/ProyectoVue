<template>
  <div class="Inicio">
      <h1>Inicio<h1>
      <Table :items="tickets"/>
  </div>
</template>

<script>
import Table from "../components/Table";
import {mapState,mapActions} from 'vuex'

export default {
  name: "Inicio",
  components: {
    Table
  },
  computed: {
    ...mapState(['tickets'])
  },
  methods: {
    ...mapActions(['setTickets'])
  },
  created(){
    this.setTickets();
  }
};
</script>