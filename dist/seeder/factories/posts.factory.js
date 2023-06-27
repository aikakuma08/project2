"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsFactory = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const post_1 = require("../../src/entities/post");
exports.PostsFactory = (0, typeorm_extension_1.setSeederFactory)(post_1.Post, (faker) => {
    const post = new post_1.Post();
    post.title = faker.lorem.sentence();
    post.description = faker.lorem.sentence();
    post.is_published = faker.random.boolean();
    return post;
});
//# sourceMappingURL=posts.factory.js.map