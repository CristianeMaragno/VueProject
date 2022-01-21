<template>
  <div>
    <b-navbar class="container-topbar" type="light" variant="light">
      <b-navbar-nav>
        <b-nav-item href="#">Início</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Língua" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Usuário" right>
          <b-dropdown-item href="#">Minha conta</b-dropdown-item>
          <b-dropdown-item href="#">Configurações</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-topbar{
  padding-left:15px;
}
</style>
