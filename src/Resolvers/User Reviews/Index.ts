/** @format */

import { isAuth } from "../../Middlewares/isAuth";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import {
  createReviewInput,
  deleteUserReviewInput,
  updateUserReviewInput,
} from "./Inputs";
import { createReviewUtil, deleteReviewUtil, updateReviewUtil } from "./Utils";
import { MyContext } from "../../Types/Context";
import { UserReviewResponse } from "../../Types/Response";

@Resolver()
export class UserReviewsResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => UserReviewResponse)
  async createUserReview(
    @Arg("data") { data, refers_to, stars }: createReviewInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const saveddata = await createReviewUtil({
        data,
        refers_to,
        stars,
        userId: ctx.req.session!.userId,
      });
      return {
        data: saveddata,
        message: "Fetch Successfull",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessfull",
        error: `Error : ${error.message}`,
      };
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => UserReviewResponse)
  async updateUserReview(@Arg("data") { data, id }: updateUserReviewInput) {
    try {
      const savedData = await updateReviewUtil({
        data,
        id,
      });
      return {
        data: savedData,
        message: "Fetch Successfull",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessfull",
        error: `Error : ${error.message}`,
      };
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => UserReviewResponse)
  async deleteUserReview(@Arg("data") { id }: deleteUserReviewInput) {
    try {
      const savedData = await deleteReviewUtil(id);
      return {
        data: savedData,
        message: "Fetch Successfull",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessfull",
        error: `Error : ${error.message}`,
      };
    }
  }
}
