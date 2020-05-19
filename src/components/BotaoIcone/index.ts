import _Vue from 'vue';
import BotaoIcone from './BotaoIcone.vue';

export default function BotaoIconePlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-botao-icone', BotaoIcone);
}
