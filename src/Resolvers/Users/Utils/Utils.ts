/** @format */

import { User } from "../../../Entities/User";
import bcrypt from "bcryptjs";
import { createUserInterface } from "./Interface";
import { v4 as uuidv4 } from "uuid";

export const createUserUtil = async ({
  Address,
  Email,
  Name,
  Password,
  PhoneNumber,
}: createUserInterface) => {
  try {
    const hasedpassword = await bcrypt.hash(Password, 12);
    return User.create({
      id: uuidv4(),
      Name: Name,
      Email: Email,
      Password: hasedpassword,
      PhoneNumber: PhoneNumber,
      Address: Address,
    }).save();
  } catch (error) {
    console.log(error);
    throw new Error("User Could Not be created");
  }
};

export const MeUtil = async (id: any) => {
  try {
    const UserData: any = await User.findOne({
      relations: ["reviews_received", "reviews_byme", "cycles"],
      where: {
        id: id,
      },
    });
    return UserData;
  } catch (error) {
    throw new Error("User not Found");
  }
};

export const updateUserUtil = async (info: any) => {
  try {
    const user: any = await User.findOne({
      where: {
        id: info.userId,
      },
    });
    if (user === undefined) {
      throw new Error("Invalid Details");
    }
    Object.keys(info).map(async (element: string, index: number) => {
      if (index > 0 && info[element]) {
        if (element === "Password") {
          const hasedpassword = await bcrypt.hash(info[element], 12);
          user!.Password = hasedpassword;
          return;
        }
        user[element] = info[element];
      }
    });
    console.log(user);
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Invalid Details");
  }
};

export const deleteUserUtil = async (id: any) => {
  try {
    await User.delete({
      id: id,
    });
    return "Done";
  } catch (error) {
    console.log(error);
    throw new Error("Error Occured while Deleting a User");
  }
};
