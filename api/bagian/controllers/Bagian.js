'use strict';

/**
 * Bagian.js controller
 *
 * @description: A set of functions called "actions" for managing `Bagian`.
 */

module.exports = {

  /**
   * Retrieve bagian records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bagian.search(ctx.query);
    } else {
      return strapi.services.bagian.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bagian record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bagian.fetch(ctx.params);
  },

  /**
   * Count bagian records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bagian.count(ctx.query);
  },

  /**
   * Create a/an bagian record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bagian.add(ctx.request.body);
  },

  /**
   * Update a/an bagian record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bagian.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bagian record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bagian.remove(ctx.params);
  }
};
