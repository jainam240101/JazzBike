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
import { findMyMessageInput, sendMessageInput, updateMessageInput } from "./Input";
import {
  createMessageUtil,
  deleteMessageUtil,
  getMyMessages,
  getReceipientsUtil,
  updateMessageUtil,
} from "./Utils";
import { MyContext } from "../../Types/Context";
import { ChatResponse, ResponseObject } from "../../Types/Response";

@Resolver()
export class ChatResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => ChatResponse)
  async sendMessage(
    @Arg("data") { message, sendingTo }: sendMessageInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await createMessageUtil({
        userId: ctx.req.session.userId,
        message,
        sendingTo,
      });
      return {
        data: [data],
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
  @Mutation(() => ChatResponse)
  async updateMessage(
    @Arg("data") { chat_id, message }: updateMessageInput,
    @Ctx() ctx: MyContext
  ) {
    try {
      const data = await updateMessageUtil({
        userId: ctx.req.session.userId,
        chat_id,
        message,
      });
      return {
        data: [data],
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
  @Mutation(() => ChatResponse)
  async deleteMessage(@Arg("chat_id") chat_id: string, @Ctx() ctx: MyContext) {
    try {
      await deleteMessageUtil({
        userId: ctx.req.session.userId,
        chat_id,
      });
      return {
        data: null,
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
  @Query(() => ChatResponse)
  async findMyMessages(@Arg("data") { id,limit,pageNo}:findMyMessageInput, @Ctx() ctx: MyContext) {
    try {
      const data = await getMyMessages({
        userId: ctx.req.session.userId,
        id,
        limit,
        pageNo,
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
  @Query(() => ResponseObject)
  async getReceipients(@Ctx() ctx: MyContext) {
    try {
      const data = await getReceipientsUtil({ userId: ctx.req.session.userId });
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
