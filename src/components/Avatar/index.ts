import _Vue from 'vue';
import Avatar from './Avatar.vue';

export default function AvatarPlugin(Vue: typeof _Vue, options?: any): void {
  Vue.component('lg-aa-avatar', Avatar);
}
