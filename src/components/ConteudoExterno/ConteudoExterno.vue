<template name="component-name">
    <div class="lg-aa-conteudo-externo">
        <h1>Conteudo Externo</h1>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ConteudoExterno extends Vue {
}
</script>

<style scopped lang="scss">
.lg-aa-conteudo-externo {
    height: 80vh;
    width: 55vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
