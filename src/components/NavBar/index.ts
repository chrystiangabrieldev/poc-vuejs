import _Vue from 'vue';
import NavBar from './NavBar.vue';
import NavBarLogo from './NavBarLogo.vue';
import NavBarConteudo from './NavBarConteudo.vue';

export default function NavBarPlugin(Vue: typeof _Vue, options?: any): void {
  Vue.component('lg-aa-navbar', NavBar);
  Vue.component('lg-aa-navbar-logo', NavBarLogo);
  Vue.component('lg-aa-navbar-conteudo', NavBarConteudo);
}
