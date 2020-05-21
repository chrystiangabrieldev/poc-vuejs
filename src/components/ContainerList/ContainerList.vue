<template>
   <lg-aa-fieldset legenda="Atividades"
                   informacaoTexto="Total:"
                   :informacaoNumero="quantidadeElementos"
                   class="lg-aa-container-list">

       <div class="lg-aa-field__container">
           <slot></slot>
       </div>
   </lg-aa-fieldset>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContainerList extends Vue {
    @Prop() legenda: string;

    @Prop() itens: Array;

    get quantidadeElementos() {
      return this.itens.length;
    }
}
</script>

<style lang="scss">
.lg-aa-container-list {
    border: 1px solid #CFCFCF;
}
.lg-aa-field__container {
  padding: 0px 45px;
}
</style>
