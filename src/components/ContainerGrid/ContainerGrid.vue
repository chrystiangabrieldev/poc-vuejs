<template>
    <lg-aa-fieldset legenda="Atividades"
                    class="lg-aa-container-list"
                    informacaoTexto="Total:"
                    :informacaoNumero="quantidade">

       <div class="lg-aa-container-grid">
           <ul class="container-fluid">
              <slot></slot>
            </ul>
       </div>
    </lg-aa-fieldset>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContainerGrid extends Vue {
    @Prop() itens: Array;

    get quantidade() {
      return this.itens.length;
    }
}
</script>

<style lang="scss">
.lg-aa-container-grid > ul {
    padding-left: 0;
    list-style: none;
    width: 100%;
    height: 100%;
}

.lg-aa-container-grid > ul > li {
    float: left;
    height: 100%;
    margin: 2px;
}

</style>
