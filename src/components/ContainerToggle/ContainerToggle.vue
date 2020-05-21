<template>
    <div class="lg-aa-container-toggle">
        <div v-if="!mudar" class="row mr-0">
            <div class="col-md-5 p-0">
                <slot name="primeiro-container"></slot>
            </div>
            <div class="col-md-7 p-0">
                <div class="container-fluid">
                    <lg-aa-conteudo-externo></lg-aa-conteudo-externo>
                </div>
            </div>
        </div>
        <div v-if="mudar" class="row mr-0">
            <div class="col-md-12 pr-0">
                <slot name="segundo-container"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContainerToggle extends Vue {
  @Prop({ default: false }) mudar: boolean;

  created() {
    this.hubDeEventos.$on('botao-toggle-click', (data) => {
      this.mudar = data;
    });
  }
}
</script>

<style lang="scss">
.lg-aa-container-toggle{
    border: .5px solid #CFCFCF;
}
</style>
