import _Vue from 'vue';
import BotaoToggle from './BotaoToggle';

export default function BotaoTogglePlugin(Vue: typeof _Vue, opcoes?:any){
    Vue.component('lg-aa-botao-toggle', BotaoToggle);
} 