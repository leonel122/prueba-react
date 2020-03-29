const Api = require("../utils/Api");

let {
  blogService,
  guideService,
  categoryService,
  tagsService,
  userService,
  childrenService,
  get_service
} = Api;

export const getBlogs = params =>
  blogService.find({
    query: params
  });

export const blogUpdate = (id, url) =>
  blogService.patch(id, { cover_picture: url });

export const saveBlog = (params) =>
  blogService.create(params);

export const saveGuide = (params) =>
  guideService.create(params);

export const guideUpdate = (id, url) =>
  guideService.patch(id, { cover_picture: url });

export const getCategories = (query = {}) => categoryService.find(query);
export const categoyUpdateUrl = (id, url) =>
  categoryService.patch(id, { image: url });

export const categoyUpdate = (id, params) => categoryService.patch(id, params);

export const getTags = () => tagsService.find({});
export const get_users = (params = {}) => userService.find(params);
export const get_childrens = () => childrenService.find({
  query: {
    $limit: 1000000
  }
});
export const getService = (servie) => get_service(servie);

export const guideUpdateRecord = (id, params) =>
  guideService.patch(id, params);
