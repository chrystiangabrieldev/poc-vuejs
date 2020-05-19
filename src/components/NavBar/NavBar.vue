<template name="lg-aa-navbar">
    <nav class="navbar navbar-default lg-aa-fundo--primario p-2 lg-aa-navbar">
        <div class="navbar-fluid">
            <slot></slot>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
}
</script>

<style lang="scss">
.lg-aa-navbar {
    margin: 0px;
}
</style>
