module.exports = {
  name: 'world',
  params: {
    name: {
      type: 'string',
      optional: true,
    },
  },
  async handler(ctx) {
    const {
      name = 'World',
    } = ctx.params;

    return `Hello, ${name}!`;
  },
};