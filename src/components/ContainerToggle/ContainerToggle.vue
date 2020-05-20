<template>
    <div class="lg-aa-container-toggle">
        <div v-if="!mudar" class="row mr-0">
            <div class="col-md-4 p-0">
                <lg-aa-container-list>
                    <lg-aa-card></lg-aa-card>
                </lg-aa-container-list>
            </div>
            <div class="col-md-8 p-0">
                <div class="container-fluid">
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>
        <div v-if="mudar" class="row mr-0">
            <div class="col-md-12 pr-0">
                <lg-aa-container-grid></lg-aa-container-grid>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContainerToggle extends Vue {
  @Prop({ required: false, default: false }) mudar: boolean;

  created() {
    this.hubDeEventos.$on('botao', (data) => {
      this.mudar = data;
      console.log(this.mudar);
    });
  }
}
</script>

<style lang="scss">
.lg-aa-container-toggle{
    border: .5px solid #CFCFCF;
}
</style>
