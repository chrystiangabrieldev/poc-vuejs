<template>
    <div class="collapse navbar-collapse">
        <form class="navbar-form navbar-right">
            <div class="form-group row">
                <slot></slot>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBarConteudo extends Vue {
}
</script>

<style lang="scss">
</style>
