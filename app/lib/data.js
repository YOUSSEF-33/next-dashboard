import { DBconnection } from "./utils";
import { Users } from "./models/user.model.js";
import { Products } from "./models/product.model.js";

export const fetchUsers = async (q, page) => {
  const ITEM_PER_PAGE = 4;
  try {
    await DBconnection();
    const rejex = RegExp(q, "i");
    const count = await Users.find({ username: { $regex: rejex } }).count();
    const user = await Users.find({ username: { $regex: rejex } })
    .limit(ITEM_PER_PAGE)
    .skip(ITEM_PER_PAGE * (page - 1));
    return { count, user };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const fetchUser = async (id) => {
  try {
    await DBconnection();
    const user = await Users.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const fetchProducts = async (q, page) => {
  const ITEM_PER_PAGE = 4;
  try {
    await DBconnection();
    const rejex = RegExp(q, "i");
    const count = await Products.find({ title: { $regex: rejex } }).count();
    const products = await Products.find({ title: { $regex: rejex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
