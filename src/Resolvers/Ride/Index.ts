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
import { MyContext } from "../../Types/Context";
import {
  changeCoordinatesUtil,
  changeStatusUtil,
  getRideDetailUtil,
  initiateRideUtil,
} from "./Utils";
import { RideResponse } from "../../Types/Response";
import { changeCoordinatesInput, changeStatusInput } from "./Input";

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
        data: [data],
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
  @Mutation(() => RideResponse)
  async changeRideStatus(
    @Arg("data")
    { ride_id, status, x_coordinate, y_coordinate }: changeStatusInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await changeStatusUtil({
        ride_id,
        status,
        x_coordinate,
        y_coordinate,
        userId: ctx.req.session.userId,
      });
      return {
        data: [data],
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
  @Mutation(() => RideResponse)
  async updateCoordinates(
    @Arg("data")
    { x_coordinate, y_coordinate, ride_id }: changeCoordinatesInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await changeCoordinatesUtil({
        ride_id,
        x_coordinate,
        y_coordinate,
        userId: ctx.req.session.userId,
      });
      return {
        data: [data],
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
  @Query(() => RideResponse)
  async getRideDetail(@Arg("rideId") rideId: string) {
    try {
      const data = await getRideDetailUtil(rideId);
      return {
        data: [data],
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
