'use strict';

/**
 * Satuan.js controller
 *
 * @description: A set of functions called "actions" for managing `Satuan`.
 */

module.exports = {

  /**
   * Retrieve satuan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.satuan.search(ctx.query);
    } else {
      return strapi.services.satuan.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a satuan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.satuan.fetch(ctx.params);
  },

  /**
   * Count satuan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.satuan.count(ctx.query);
  },

  /**
   * Create a/an satuan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.satuan.add(ctx.request.body);
  },

  /**
   * Update a/an satuan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.satuan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an satuan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.satuan.remove(ctx.params);
  }
};
