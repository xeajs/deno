import Instance from "./Instance.ts";

interface DataBaseUserSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

class User extends Instance<DataBaseUserSchema> {
  constructor() {
    super("user");
  }
  findAll() {
    return [];
  }
}

export const user = new User();
export default user;
