import _Vue from 'vue';
import NavBarPlugin from './NavBar';
import AvatarPlugin from './Avatar';
import PainelPlugin from './Painel';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
  Vue.use(AvatarPlugin);
  Vue.use(PainelPlugin);
}
