'use strict';

/**
 * Counter.js controller
 *
 * @description: A set of functions called "actions" for managing `Counter`.
 */

module.exports = {

  /**
   * Retrieve counter records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.counter.search(ctx.query);
    } else {
      return strapi.services.counter.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a counter record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.counter.fetch(ctx.params);
  },

  /**
   * Count counter records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.counter.count(ctx.query);
  },

  /**
   * Create a/an counter record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.counter.add(ctx.request.body);
  },

  /**
   * Update a/an counter record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.counter.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an counter record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.counter.remove(ctx.params);
  }
};
