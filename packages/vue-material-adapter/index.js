import * as base from '@mcwv/base/index';
import button from '@mcwv/button/index';
import card from '@mcwv/card/index';
import checkbox from '@mcwv/checkbox/index';
import chips from '@mcwv/chips/index';
import dialog from '@mcwv/dialog/index';
import drawer from '@mcwv/drawer/index';
import elevation from '@mcwv/elevation/index';
import fab from '@mcwv/fab/index';
import floatingLabel from '@mcwv/floating-label/index';
import gridList from '@mcwv/grid-list/index';
import iconButton from '@mcwv/icon-button/index';
import icon from '@mcwv/icon/index';
import layoutGrid from '@mcwv/layout-grid/index';
import lineRipple from '@mcwv/line-ripple/index';
import linearProgress from '@mcwv/linear-progress/index';
import list from '@mcwv/list/index';
import materialIcon from '@mcwv/material-icon/index';
import menu from '@mcwv/menu/index';
import notchedOutline from '@mcwv/notched-outline/index';
import radio from '@mcwv/radio/index';
import ripple from '@mcwv/ripple/index';
import select from '@mcwv/select/index';
import slider from '@mcwv/slider/index';
import snackbar from '@mcwv/snackbar/index';
import switchControl from '@mcwv/switch/index';
import tabs from '@mcwv/tabs/index';
import textfield from '@mcwv/textfield/index';
import theme from '@mcwv/theme/index';
// import * as toolbar from '@mcwv/toolbar/index';
import topAppBar from '@mcwv/top-app-bar/index';
import typography from '@mcwv/typography/index';

export default {
  install(vm) {
    vm.use(button);
    vm.use(card);
    vm.use(checkbox);
    vm.use(chips);
    vm.use(dialog);
    vm.use(drawer);
    vm.use(elevation);
    vm.use(fab);
    vm.use(floatingLabel);
    vm.use(gridList);
    vm.use(icon);
    vm.use(iconButton);
    vm.use(layoutGrid);
    vm.use(lineRipple);
    vm.use(linearProgress);
    vm.use(list);
    vm.use(materialIcon);
    vm.use(menu);
    vm.use(notchedOutline);
    vm.use(radio);
    vm.use(select);
    vm.use(slider);
    vm.use(snackbar);
    vm.use(switchControl);
    vm.use(tabs);
    vm.use(textfield);
    vm.use(topAppBar);
    vm.use(typography);
  },
};

export {
  base,
  button,
  ripple,
  card,
  checkbox,
  chips,
  dialog,
  drawer,
  elevation,
  fab,
  floatingLabel,
  gridList,
  icon,
  iconButton,
  layoutGrid,
  lineRipple,
  linearProgress,
  list,
  materialIcon,
  menu,
  notchedOutline,
  radio,
  select,
  slider,
  snackbar,
  switchControl,
  tabs,
  textfield,
  theme,
  // toolbar,
  topAppBar,
  typography,
};
