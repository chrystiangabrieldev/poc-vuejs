import _Vue from 'vue';
import ContainerGrid from './ContainerGrid.vue';

export default function ContainerGridPlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-container-grid', ContainerGrid);
}
