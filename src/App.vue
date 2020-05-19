<template>
  <div id="app">
    <lg-aa-navbar>
      <lg-aa-navbar-logo textoLogo="LG lugar de Gente"
                           logo="https://www.lg.com.br/site2017/uploads/logo.png"></lg-aa-navbar-logo>

      <lg-aa-navbar-conteudo>
        <div class="col-6">
          <lg-aa-avatar nomeColabolador="Chrystian Gabriel"
                        eImagem="true"
                        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlDPRr1xSW0lukY2EmVpAx5Ye1S8H5luUVOK2IqFdcsjCDQxK&s">
          </lg-aa-avatar>
        </div>
      </lg-aa-navbar-conteudo>
    </lg-aa-navbar>

    <lg-aa-painel titulo="Minhas Atividades">
        <lg-aa-input-icone icone="glyphicon glyphicon-search"
                           placeholder="Pesquisar no Portal">
        </lg-aa-input-icone>

        <lg-aa-botao-icone icone="fa fa-cogs">
        </lg-aa-botao-icone>

        <lg-aa-botao-icone icone="fa fa-puzzle-piece">
        </lg-aa-botao-icone>

        <lg-aa-botao-icone icone="fa fa-sliders">
        </lg-aa-botao-icone>

        <lg-aa-botao-icone icone="fa fa-filter">
        </lg-aa-botao-icone>

        <lg-aa-botao-toggle iconePrimario="glyphicon glyphicon-th-large"
                            iconeSecundario="glyphicon glyphicon-th-list"
                            textoPrimario="Visualizar em Grade"
                            textoSecundario="Visualizar em Lista">
        </lg-aa-botao-toggle>
    </lg-aa-painel>
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
