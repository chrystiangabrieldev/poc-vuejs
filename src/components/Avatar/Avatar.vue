<template>
    <span class="lg-aa-avatar" :style="estiloPadrao">
        <span v-show="!eImagem">{{iniciaisDoColaborador}}</span>
    </span>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {
    @Prop({ default: false }) eImagem: boolean;

    @Prop({ default: 30 }) tamanho: number;

    @Prop({ default: '#bbb' }) corDeFundo: string;

    @Prop({ default: true }) arredondar: boolean;

    @Prop() imagem: string;

    @Prop({ required: true }) nomeColabolador: string;

    get estiloPadrao() {
      const estiloPadraoImagemDeFundo = {
        background: `transparent url(${this.imagem}) no-repeat scroll 0% 0% / ${this.tamanho}px ${this.tamanho}px content-box border-box`,
      };

      const estiloPadraoSemImagemDeFundo = {
        backgroundColor: this.corDeFundo,
      };

      const estiloPadraoImagem = this.eImagem
        ? estiloPadraoImagemDeFundo
        : estiloPadraoSemImagemDeFundo;

      const estiloPadrao = {
        height: `${this.tamanho}px`,
        width: `${this.tamanho}px`,
        borderRadius: this.arredondar ? '50%' : 0,
        ...estiloPadraoImagem,
      };

      return estiloPadrao;
    }

    get iniciaisDoColaborador() {
      const resultado = this.nomeColabolador.match(/\b(\w)/g);
      return resultado.join('');
    }
}
</script>

<style scoped lang="scss">
.lg-aa-avatar {
    align-items: center;
    color:white;
    display: flex;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    margin: 0px 5px;
}
</style>
