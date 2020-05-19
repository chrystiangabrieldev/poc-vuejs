<template name="component-name">
    <div class="input-group lg-aa-control lg-aa-control--com-icone">
        <span class="input-group-addon lg-aa-control-icone">
            <i :class="icone"></i>
        </span>

        <input class="form-control lg-aa-control lg-aa-control-input"
               :placeholder="placeholder" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class InputIcone extends Vue {
    @Prop({ required: true }) icone: string;

    @Prop({ retuired: true }) placeholder: string;
}
</script>

<style lang="scss">
</style>
