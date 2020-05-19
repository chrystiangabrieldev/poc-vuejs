<template>
  <div id="app">
    <lg-aa-navbar>
      <lg-aa-navbar-header textoLogo="LG lugar de Gente"
                           logo="https://www.lg.com.br/site2017/uploads/logo.png"></lg-aa-navbar-header>
    </lg-aa-navbar>
    <div class="container"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
  @import url('https://cdn1.lg.com.br/autoatendimento/1.0.0/css/lg.build.min.css')
</style>
