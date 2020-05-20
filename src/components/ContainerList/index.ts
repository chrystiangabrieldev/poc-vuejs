import _Vue from 'vue';
import ContainerList from './ContainerList.vue';

export default function ContainerListPlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-container-list', ContainerList);
}
