import _Vue from 'vue';
import NavBarPlugin from './NavBar';
import AvatarPlugin from './Avatar';
import PainelPlugin from './Painel';
import BotaoTogglePlugin from './BotaoToggle';
import InputIconePlugin from './InputIcone';
import BotaoIcone from './BotaoIcone';
import FieldsetPlugin from './Fieldset';
import ContainerListPlugin from './ContainerList';
import ContainerTogglePlugin from './ContainerToggle';
import CardPlugin from './Card';
import ContainerGridPlugin from './ContainerGrid';
import ConteudoExternoPlugin from './ConteudoExterno';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
  Vue.use(AvatarPlugin);
  Vue.use(PainelPlugin);
  Vue.use(BotaoTogglePlugin);
  Vue.use(InputIconePlugin);
  Vue.use(BotaoIcone);
  Vue.use(FieldsetPlugin);
  Vue.use(ContainerListPlugin);
  Vue.use(ContainerTogglePlugin);
  Vue.use(CardPlugin);
  Vue.use(ContainerGridPlugin);
  Vue.use(ConteudoExternoPlugin);
}
