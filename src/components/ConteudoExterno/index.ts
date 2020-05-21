import _Vue from 'vue';
import ConteudoExterno from './ConteudoExterno.vue';

export default function ConteudoExternoPlugin(Vue: typeof _Vue, options?: any) {
  Vue.component('lg-aa-conteudo-externo', ConteudoExterno);
}
