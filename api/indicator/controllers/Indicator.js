'use strict';

/**
 * Indicator.js controller
 *
 * @description: A set of functions called "actions" for managing `Indicator`.
 */

module.exports = {

  /**
   * Retrieve indicator records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.indicator.search(ctx.query);
    } else {
      return strapi.services.indicator.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a indicator record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.indicator.fetch(ctx.params);
  },

  /**
   * Count indicator records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.indicator.count(ctx.query);
  },

  /**
   * Create a/an indicator record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.indicator.add(ctx.request.body);
  },

  /**
   * Update a/an indicator record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.indicator.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an indicator record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.indicator.remove(ctx.params);
  }
};
