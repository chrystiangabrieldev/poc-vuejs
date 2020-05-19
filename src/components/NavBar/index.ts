import _Vue from 'vue';
import NavBar from './NavBar.vue';
import NavBarHeader from './NavBarHeader.vue';


export default function NavBarPlugin(Vue: typeof _Vue, options?: any): void {
  Vue.component('lg-aa-navbar', NavBar);
  Vue.component('lg-aa-navbar-header', NavBarHeader);
}
