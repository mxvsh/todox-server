"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const user = ctx.state.user;
    const lists = await strapi.query("lists").find({ user: user.id });
    console.log("lists", lists);
    return lists;
  },
};
