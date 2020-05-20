<template>
   <lg-aa-fieldset legenda="Atividades" class="lg-aa-container-list">
       <slot v-for="item in itens">{{item}}</slot>
   </lg-aa-fieldset>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ContainerList extends Vue {
    @Prop() legenda: string;

    @Prop() itens = [1, 2, 3, 4, 5, 6, 7, 8];
}
</script>

<style lang="scss">
.lg-aa-container-list {
    border: 1px solid #CFCFCF;
}
</style>
