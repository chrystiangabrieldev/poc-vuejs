import _Vue from 'vue';
import InputIcone from './InputIcone.vue';

export default function InputIconPlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-input-icone', InputIcone);
}
