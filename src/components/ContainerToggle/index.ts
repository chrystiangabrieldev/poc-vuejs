import _Vue from 'vue';
import ContainerToggle from './ContainerToggle.vue';

export default function ContainerTogglePlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-container-toggle', ContainerToggle);
}
