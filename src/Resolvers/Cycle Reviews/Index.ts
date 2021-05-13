/** @format */

import { isAuth } from "../../Middlewares/isAuth";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { createCycleReviewInput } from "./Inputs";
import {
  createCycleReviewUtil,
  deleteReviewUtil,
  getAllReviewsUtil,
  updateReviewUtil,
} from "./Utils";
import { CycleReviewResponse } from "../../Types/Response";
import { MyContext } from "../../Types/Context";
import { CycleReview } from "../../Entities/Cycle_Review";

@Resolver()
export class CycleReviewResolvers {
  @UseMiddleware(isAuth)
  @Mutation(() => CycleReviewResponse)
  async createCycleReview(
    @Arg("data") { cycleId, data }: createCycleReviewInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const savedData = await createCycleReviewUtil({
        cycleId,
        data,
        userId: ctx.req.session.userId,
      });
      return {
        data: savedData,
        message: "Fetch Successful",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessful",
        error: `Error : ${error.detail}`,
      };
    }
  }

  @UseMiddleware(isAuth)
  @Query(() => [CycleReview])
  async getAllReviews(@Arg("id") id: string) {
    const data = await getAllReviewsUtil({ cycleId: id });
    return data;
  }

  @UseMiddleware(isAuth)
  @Mutation(() => CycleReviewResponse)
  async updateReview(
    @Arg("review_id") review_id: string,
    @Arg("review") review: string,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await updateReviewUtil({
        userId: ctx.req.session.userId,
        reviewId: review_id,
        data: review,
      });
      return {
        data: data,
        message: "Fetch Successful",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessful",
        error: `Error : ${error.message}`,
      };
    }
  }

  @UseMiddleware(isAuth)
  @Mutation(() => CycleReviewResponse)
  async deleteCycleReview(
    @Arg("reviewId") reviewId: string,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await deleteReviewUtil({
        userId: ctx.req.session.userId,
        reviewId: reviewId,
      });
      return {
        data: data,
        message: "Fetch Successful",
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: "Fetch Unsuccessful",
        error: `Error : ${error.message}`,
      };
    }
  }
}
