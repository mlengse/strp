'use strict';

/**
 * Rekap.js controller
 *
 * @description: A set of functions called "actions" for managing `Rekap`.
 */

module.exports = {

  /**
   * Retrieve rekap records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.rekap.search(ctx.query);
    } else {
      return strapi.services.rekap.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a rekap record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.rekap.fetch(ctx.params);
  },

  /**
   * Count rekap records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rekap.count(ctx.query);
  },

  /**
   * Create a/an rekap record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rekap.add(ctx.request.body);
  },

  /**
   * Update a/an rekap record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rekap.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rekap record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rekap.remove(ctx.params);
  }
};
