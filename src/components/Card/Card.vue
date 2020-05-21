<template>
    <div class="lg-aa-card panel panel-default">
        <div class="panel-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1 pr-0">
                        <input type="checkbox" class="pt-2">
                    </div>
                    <div class="col-md-7 p-0">
                        <span class="col-md-2 p-0">
                            <lg-aa-avatar class="pt-2" :nomeColabolador="nome"
                                    tamanho="45"
                                    eImagem="true"
                                    :imagem="avatar">
                            </lg-aa-avatar>
                        </span>

                        <span class="col-md-10">
                            <span class="lg-aa-card__titulo pt-2">
                                {{nome}}
                                <div class="lg-aa-card__subtitulo">Gestor</div>
                            </span>
                        </span>
                    </div>

                    <div class="col-md-4">
                        <span class="lg-aa-card__status" :style="corStatus">{{textoStatus}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel-body lg-aa-card__body" :style="estiloPadrao">
            <div class="row m-0 p-0">
                 <a v-for="info in informacoes" :key="info.Id"
                    class="lg-aa-card__informacoes">
                    <span style="width:45px">{{info.label}}</span>
                    <p>
                        {{info.valor}}
                    </p>
                </a>
            </div>

            <div class="row m-0 pb-2">
                <button v-for="acao in acoes" :key="acao.Id"
                        class="btn lg-aa-botao lg-aa-botao--primario
                                lg-aa-card__acoes">
                    {{acao.label}}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    @Prop() informacoes: any;

    @Prop() acoes: any;

    @Prop({ default: 450 }) tamanho: number;

    @Prop({ default: 0 }) status: string;

    @Prop({ required: true }) nome: string;

    @Prop({ require: true }) avatar: string;

    get estiloPadrao() {
      const estiloPadrao = {
        width: `${this.tamanho}px`,
      };

      return estiloPadrao;
    }

    get corStatus() {
      let corStatus: string;

      if (this.status === '0') {
        corStatus = '#0FB847';
      } else if (this.status === '1') {
        corStatus = '#F18B00';
      } else {
        corStatus = '#EF5758';
      }

      return {
        backgroundColor: corStatus,
      };
    }

    get textoStatus() {
      let textoStatus: string;

      if (this.status === '0') {
        textoStatus = 'Dentro do Prazo';
      } else if (this.status === '1') {
        textoStatus = 'Prazo Encerrado';
      } else {
        textoStatus = 'Em Atraso';
      }

      return textoStatus;
    }
}
</script>

<style lang="scss">
.lg-aa-card__body {
    padding: 0px 0px 0px 25px;
}
.lg-aa-card__status {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 14px;
  background-color: #399CD6;
  color: #FFF;
  padding: 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  min-width: 150px;
  text-align: center;
}

.lg-aa-card__informacoes {
    width: auto;
    margin: 0px 10px;
    font-size: 12px;
    float: left;
    color: #5DA4D4;
}

.lg-aa-card__informacoes > p {
    color: #333333;
}

.lg-aa-card__informacoes:hover {
    text-decoration:none;
    color: #5DA4D4;
}

.lg-aa-card__acoes {
    float: left;
    margin: 5px;
    max-width: 80%;
}

.lg-aa-card__acoes:nth-child(1) {
    background: #0070BC;
    color: white;
}

.lg-aa-card__titulo {
    font-weight: bold;
    font-size: 16px;
    margin: 5px 0px;
}

.lg-aa-card__subtitulo {
    font-weight: normal;
    font-size: 12px;
    margin-bottom: 10px;
    color: #0070BC;
}

.lg-aa-card__subtitulo {
    text-decoration:none;
}
</style>
