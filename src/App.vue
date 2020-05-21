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
    <lg-aa-container-toggle>
        <lg-aa-container-list slot="primeiro-container"
                              :itens="atividades">

          <lg-aa-card v-for="atividade in atividades"
                      :informacoes="atividade.informacoes"
                      :acoes="atividade.acoes"
                      :key="atividade.Id"
                      :status="atividade.status"
                      :nome="atividade.colaborador.nome"
                      :cargo="atividade.colaborador.cargo"
                      :avatar="atividade.colaborador.avatar">
          </lg-aa-card>

        </lg-aa-container-list>

        <lg-aa-container-grid slot="segundo-container"
                              :itens="atividades">

          <li v-for="atividade in atividades" :key="atividade.Id">
            <lg-aa-card :informacoes="atividade.informacoes"
                        :acoes="atividade.acoes"
                        tamanho="430"
                        :status="atividade.status"
                        :nome="atividade.colaborador.nome"
                        :cargo="atividade.colaborador.cargo"
                        :avatar="atividade.colaborador.avatar">
            </lg-aa-card>
          </li>
        </lg-aa-container-grid>
    </lg-aa-container-toggle>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AtividadesMock from './mock/mock';

@Component
export default class App extends Vue {
  @Prop() atividades: any;

  async created() {
    this.atividades = await AtividadesMock.obtenhaAtividades();
  }
}
</script>

<style lang="scss">
  @import url('https://cdn1.lg.com.br/autoatendimento/1.0.0/css/lg.build.min.css');
</style>
