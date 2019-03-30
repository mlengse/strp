'use strict';

/**
 * Countertype.js controller
 *
 * @description: A set of functions called "actions" for managing `Countertype`.
 */

module.exports = {

  /**
   * Retrieve countertype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.countertype.search(ctx.query);
    } else {
      return strapi.services.countertype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a countertype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.countertype.fetch(ctx.params);
  },

  /**
   * Count countertype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.countertype.count(ctx.query);
  },

  /**
   * Create a/an countertype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.countertype.add(ctx.request.body);
  },

  /**
   * Update a/an countertype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.countertype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an countertype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.countertype.remove(ctx.params);
  }
};
