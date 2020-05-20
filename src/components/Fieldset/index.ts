import _Vue from 'vue';
import Fieldset from './Fieldset.vue';

export default function FieldsetPlugin(Vue: typeof _Vue, opcoes?: any) {
  Vue.component('lg-aa-fieldset', Fieldset);
}
