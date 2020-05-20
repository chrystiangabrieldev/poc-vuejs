<template>
    <lg-aa-fieldset legenda="Atividades" class="lg-aa-container-list">
       <div class="lg-aa-container-grid">
           <ul>
                <li>
                    <lg-aa-card></lg-aa-card>
                </li>
                <li>
                    <lg-aa-card></lg-aa-card>
                </li>
                <li>
                    <lg-aa-card></lg-aa-card>
                </li>
                <li>
                    <lg-aa-card></lg-aa-card>
                </li>
            </ul>
       </div>
    </lg-aa-fieldset>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContainerGrid extends Vue {
}
</script>

<style lang="scss">
.lg-aa-container-grid {
}

.lg-aa-container-grid > ul {
    padding-left: 0;
    list-style: none;
}

.lg-aa-container-grid > ul > li {
    float: left;
    width: 25%;
    height: 100%;
    padding: 10px;
    line-height: 2;
}

</style>
