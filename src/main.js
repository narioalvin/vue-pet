import Vue from 'vue';
import App from './App.vue';
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  BModal,
  VBModal,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BButton,
  BTooltip,
  BFormRadio,
  BPopover,
  BSpinner,
  BDropdown,
  BDropdownItem,
  BDropdownForm
} from 'bootstrap-vue';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('b-modal', BModal);
Vue.directive('b-modal', VBModal);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-button', BButton);
Vue.component('b-tooltip', BTooltip)
Vue.component('b-form-radio', BFormRadio)
Vue.component('b-popover', BPopover)
Vue.component('b-spinner', BSpinner)
Vue.component('b-dropdown', BDropdown)
Vue.component('b-dropdown-item', BDropdownItem)
Vue.component('b-dropdown-form', BDropdownForm)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
