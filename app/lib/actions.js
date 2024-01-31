"use server";
import { revalidatePath } from "next/cache";
import { Users } from "./models/user.model";
import { DBconnection } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Products } from "./models/product.model";
import { auth, signIn, signOut } from "../auth";

export const addUser = async (fromData) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    country,
    address,
    isAdmin,
    img,
  } = Object.fromEntries(fromData);
  try {
    await DBconnection();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await new Users({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      country,
      address,
      isAdmin,
      img,
    });
    await user.save();
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/users?page=1");
  redirect("/dashboard/users?page=1");
};

export const addProduct = async (fromData) => {
  const { title, desc, size, color, price, isStoke, count } =
    Object.fromEntries(fromData);
  try {
    await DBconnection();
    const product = await new Products({
      title,
      desc,
      size,
      color,
      price,
      isStoke,
      count,
    });
    await product.save();
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/products?page=1");
  redirect("/dashboard/products?page=1");
};

export const deleteProduct = async () => {
  const { id } = Object.fromEntries(fromData);
  try {
    await DBconnection();
    await Products.findByIdAndDelete(id);
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/products?page=1");
  redirect("/dashboard/products?page=1");
};

export const deleteUser = async () => {
  const { id } = Object.fromEntries(fromData);
  try {
    await DBconnection();
    await Users.findByIdAndDelete(id);
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/users?page=1");
  redirect("/dashboard/users?page=1");
};

export const updateUser = async (fromData) => {
  const {
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    country,
    address,
    isAdmin,
  } = Object.fromEntries(fromData);
  const entries = {
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    country,
    address,
    isAdmin,
  };
  try {
    await DBconnection();
    Object.keys(entries).forEach(
      (key) => (entries[key] === "" || undefined) && delete entries[key]
    );
    await Users.findByIdAndUpdate(id, entries);
  } catch (error) {
    console.log(error.message);
  }
  revalidatePath("/dashboard/users?page=1");
  redirect("/dashboard/users?page=1");
};


export const authentication = async(formData)=>{
    const {username, password} = Object.fromEntries(formData);
    try {
       await signIn("credentials", {username, password});
    } catch (error) {
      console.log(error.message)
      throw error;
    }
}

 export const logOut = async()=>{
   await signOut();
} 

