/** @format */

import { User } from "../../Entities/User";
import { UserReview } from "../../Entities/User_Review";
import { v4 as uuidv4 } from "uuid";

export const createReviewUtil = async (info: any) => {
  try {
    const reporting_user = await User.findOne({
      where: { id: info.userId },
    });
    const refferingUser = await User.findOne({
      where: {
        id: info.refers_to,
      },
    });
    return UserReview.create({
      review_id: uuidv4(),
      refersTo: refferingUser,
      saidBy: reporting_user,
      stars: info.stars,
      data: info.data,
    }).save();
  } catch (error) {
    throw new Error("The Product could not be created");
  }
};

export const updateReviewUtil = async ({ id, data }: any) => {
  try {
    const user_review = await UserReview.findOne({
      where: { id: id },
    });
    user_review!["data"] = data;
    return user_review?.save();
  } catch (error) {
    throw new Error("The Product could not be updated");
  }
};

export const deleteReviewUtil = async (id: string) => {
  try {
    await UserReview.delete({
      review_id: id,
    });
    return "Done";
  } catch (error) {
    throw new Error("Error Occured while Deleting the Users Review");
  }
};

export const reviewsByMeUtil = async ({ userId, limit, pageNo }: any) => {
  try {
    var skip = (pageNo - 1) * limit;
    const data = await UserReview.find({
      where: {
        saidBy: userId,
      },
      take: limit,
      skip: skip,
      order: {
        createdAt: "DESC",
      },
    });
    return data;
  } catch (error) {
    throw new Error("Could not find data");
  }
};

export const reviewsForMeUtil = async ({ userId, limit, pageNo }: any) => {
  try {
    var skip = (pageNo - 1) * limit;
    const data = await UserReview.find({
      where: {
        refersTo: userId,
      },
      take: limit,
      skip: skip,
      order: {
        createdAt: "DESC",
      },
    });
    return data;
  } catch (error) {
    throw new Error("Could not find data");
  }
};
