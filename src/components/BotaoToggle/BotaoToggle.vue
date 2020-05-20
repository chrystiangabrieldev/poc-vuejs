<template>
    <span class="lg-aa-botao-toggle">
        <input type="checkbox" id="botao-toggle" v-on:change="clicouNoBotao" v-model="marcado"/>
        <label for="botao-toggle" class="lg-aa-botao-toggle_label">
            <i :class="iconeAtual"></i>
             {{textoAtual}}
        </label>
    </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BotaoToggle extends Vue {
    @Prop({ required: true }) iconePrimario: string;

    @Prop({ required: true }) iconeSecundario: string;

    @Prop({ required: false }) textoPrimario: string;

    @Prop({ required: false }) textoSecundario: string;

    @Prop({ default: '#0070BC' }) corIcone: string;

    @Prop({ default: false }) marcado: boolean;

    get iconeAtual() {
      if (!this.marcado) {
        return this.iconePrimario;
      }
      return this.iconeSecundario;
    }

    get textoAtual() {
      if (!this.marcado) {
        return this.textoPrimario;
      }

      return this.textoSecundario;
    }

    clicouNoBotao() {
      this.hubDeEventos.$emit('botao', this.marcado);
    }
}
</script>

<style lang="scss">
.lg-aa-botao-toggle > input[type='checkbox'] {
    display: none;
}

.lg-aa-botao-toggle_label{
    padding: 5px;
    margin: 0px 15px;
}
</style>
