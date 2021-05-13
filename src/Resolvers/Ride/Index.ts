/** @format */

import { isAuth } from "../../Middlewares/isAuth";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../../Types/Context";
import { initiateRideUtil } from "./Utils";
import { RideResponse } from "../../Types/Response";

@Resolver()
export class RideResolvers {
  @UseMiddleware(isAuth)
  @Mutation(() => RideResponse)
  async initiateRide(@Arg("cycleId") cycleId: string, @Ctx() ctx: MyContext) {
    try {
      const data = await initiateRideUtil({
        cycleId: cycleId,
        userId: ctx.req.session.userId,
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
