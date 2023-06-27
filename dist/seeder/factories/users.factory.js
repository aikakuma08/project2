"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersFactory = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const user_1 = require("../../src/entities/user");
exports.UsersFactory = (0, typeorm_extension_1.setSeederFactory)(user_1.User, (faker) => {
    const user = new user_1.User();
    user.first_name = faker.internet.first_name();
    user.last_name = faker.internet.last_name();
    user.email = faker.email();
    user.is_active = faker.random.boolean();
    return user;
});
//# sourceMappingURL=users.factory.js.map