import _Vue from 'vue';
import NavBarPlugin from './NavBar';
import AvatarPlugin from './Avatar';
import PainelPlugin from './Painel';
import BotaoToggle from './BotaoToggle';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
  Vue.use(AvatarPlugin);
  Vue.use(PainelPlugin);
  Vue.use(BotaoToggle);
}
