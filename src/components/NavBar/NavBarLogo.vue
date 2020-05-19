<template name="component-name">
    <div class="navbar-header lg-aa-navbar-logo">
        <a href="#" class="lg-aa-navbar-brand" id="brand">
            <button class="btn lg-aa-menu">
                <div class="lg-aa-menu__barra"></div>
                <div class="lg-aa-menu__barra"></div>
                <div class="lg-aa-menu__barra"></div>
            </button>
            <img v-if="possuiImagem" :src="logo" :alt="textoLogo" class="lg-aa-navbar__logo">
            <span v-if="!possuiImagem" class="lg-aa-menu__texto">
                {{textoLogo}}
            </span>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavBarLogo extends Vue {
    @Prop() logo: string;

    @Prop({ required: true }) textoLogo: string;

    get possuiImagem() {
      console.log(this.logo);
      return this.logo !== undefined;
    }
}
</script>

<style lang="scss">
.lg-aa-navbar-logo {
    margin: 0px 5px;
}
.lg-aa-navbar-brand {
    display: flex;
    padding: 5px;
}

.lg-aa-navbar__logo {
    max-width: 120px;
    height: auto;
}

.lg-aa-menu{
  margin: 0px 10px;
  background: transparent;
  color: white;
}

.lg-aa-menu__barra{
   width: 20px;
   height: 2px;
   background: white;
   margin: 3px 0;
}

.lg-aa-menu__texto{
    color: white;
    font-weight: bold;
}
</style>
