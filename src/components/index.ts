import _Vue from 'vue';
import NavBarPlugin from './NavBar';
import AvatarPlugin from './Avatar';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
  Vue.use(AvatarPlugin);
}
