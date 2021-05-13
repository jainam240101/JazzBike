/** @format */

import { User } from "../Entities/User";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import bcryptjs from "bcryptjs";
import { MyContext } from "../Types/Context";

@Resolver()
export class LoginResolver {
  @Mutation(() => String, { nullable: true })
  async Login(
    @Arg("Email") email: string,
    @Arg("Password") password: string,
    @Ctx() ctx: MyContext
  ) {
    const user = await User.findOne({ where: { Email: email } });
    if (!user) {
      return null;
    }
    const valid = await bcryptjs.compare(password, user.Password);
    if (!valid) {
      return null;
    }
    // console.log("The user is  ", user);

    ctx.req.session!.userId = user.id;
    return "Working";
  }

  @Mutation(() => String, { nullable: true })
  async Logout(@Ctx() ctx: MyContext) {
    ctx.res.clearCookie("qid");
    return "Logout Successful";
  }
}
