'use strict';

/**
 * Operator.js controller
 *
 * @description: A set of functions called "actions" for managing `Operator`.
 */

module.exports = {

  /**
   * Retrieve operator records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.operator.search(ctx.query);
    } else {
      return strapi.services.operator.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a operator record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.operator.fetch(ctx.params);
  },

  /**
   * Count operator records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.operator.count(ctx.query);
  },

  /**
   * Create a/an operator record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.operator.add(ctx.request.body);
  },

  /**
   * Update a/an operator record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.operator.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an operator record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.operator.remove(ctx.params);
  }
};
