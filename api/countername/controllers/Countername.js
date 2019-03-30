'use strict';

/**
 * Countername.js controller
 *
 * @description: A set of functions called "actions" for managing `Countername`.
 */

module.exports = {

  /**
   * Retrieve countername records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.countername.search(ctx.query);
    } else {
      return strapi.services.countername.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a countername record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.countername.fetch(ctx.params);
  },

  /**
   * Count countername records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.countername.count(ctx.query);
  },

  /**
   * Create a/an countername record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.countername.add(ctx.request.body);
  },

  /**
   * Update a/an countername record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.countername.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an countername record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.countername.remove(ctx.params);
  }
};
