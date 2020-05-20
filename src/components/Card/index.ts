import _Vue from 'vue';
import Card from './Card.vue';

export default function CardPlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-card', Card);
}
