export default {
  name: 'mdc-elevation',
  functional: true,
  props: {
    z: {
      type: [Number, String],
      default() {
        return 1;
      },
    },
  },

  render(
    createElement,
    {
      props: { z },
      slots,
    },
  ) {
    return createElement(
      'div',
      {
        class: {
          'mdc-elevation': 1,
          [`mdc-elevation--z${z}`]: 1,
        },
      },
      slots().default,
    );
  },
};
