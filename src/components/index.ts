import _Vue from 'vue';
import NavBarPlugin from './NavBar';

export default function API(Vue: typeof _Vue, options?: any): void {
  Vue.use(NavBarPlugin);
}
