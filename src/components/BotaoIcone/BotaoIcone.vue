<template name="component-name">
    <span>
        <button class="btn lg-aa-btn-icon">
            <i :class="icone"></i>
        </button>
    </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BotaoIcone extends Vue {
    @Prop({ required: true }) icone: string;
}
</script>

<style lang="scss">
.lg-aa-btn-icon {
    border-radius: 50%;
    margin: 0px 3px;
    background: transparent;
    border: 1px solid #CFCFCF;
}
</style>
