import _Vue from 'vue';
import Painel from './Painel.vue';

export default function PainelPlugin(Vue: typeof _Vue, options?: any): void {
  Vue.component('lg-aa-painel', Painel);
}
