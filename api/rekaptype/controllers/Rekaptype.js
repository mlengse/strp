'use strict';

/**
 * Rekaptype.js controller
 *
 * @description: A set of functions called "actions" for managing `Rekaptype`.
 */

module.exports = {

  /**
   * Retrieve rekaptype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.rekaptype.search(ctx.query);
    } else {
      return strapi.services.rekaptype.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a rekaptype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.rekaptype.fetch(ctx.params);
  },

  /**
   * Count rekaptype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rekaptype.count(ctx.query);
  },

  /**
   * Create a/an rekaptype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rekaptype.add(ctx.request.body);
  },

  /**
   * Update a/an rekaptype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rekaptype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rekaptype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rekaptype.remove(ctx.params);
  }
};
