import _Vue from 'vue';
import NavBarPlugin from './NavBar';
import AvatarPlugin from './Avatar';
import PainelPlugin from './Painel';
import BotaoTogglePlugin from './BotaoToggle';
import InputIconePlugin from './InputIcone';
import BotaoIcone from './BotaoIcone';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
  Vue.use(AvatarPlugin);
  Vue.use(PainelPlugin);
  Vue.use(BotaoTogglePlugin);
  Vue.use(InputIconePlugin);
  Vue.use(BotaoIcone);
}
