/** @format */

import { Cycles } from "../../Entities/Cycles";
import { Ride } from "../../Entities/Ride";
import { User } from "../../Entities/User";
import { v4 as uuidv4 } from "uuid";

export const initiateRideUtil = async ({ cycleId, userId }: any) => {
  try {
    const user = await User.findOne({
      where: { id: userId },
    });
    const cycle = await Cycles.findOne({
      where: { cycle_id: cycleId },
    });
    return Ride.create({
      ride_id: uuidv4(),
      cycle: cycle,
      rider: user,
      status: "Waiting",
    }).save();
  } catch (error) {
    throw new Error("Ride Could not be initiaited");
  }
};
