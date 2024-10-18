<template>
  <div id="app">
    <header class="app-header">
      <div class="app-header__wrapper">
        <nav class="app-navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/clients">Clientes</router-link>
          <router-link to="/register">Cadastrar</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  background-color: var(--color-background-soft);
  &__wrapper {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
}

.app-navbar {
  padding: 0 16px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
