/** @format */

import { isAuth } from "../../Middlewares/isAuth";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { sendMessageInput, updateMessageInput } from "./Input";
import {
  createMessageUtil,
  deleteMessageUtil,
  getMyMessages,
  getReceipientsUtil,
  updateMessageUtil,
} from "./Utils";
import { MyContext } from "../../Types/Context";
import {
  ChatResponse,
  multipleChats,
  multipleUsers,
} from "../../Types/Response";

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
        data: data,
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
        data: data,
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
      const data = await deleteMessageUtil({
        userId: ctx.req.session.userId,
        chat_id,
      });
      return {
        data: data,
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
  @Mutation(() => multipleChats)
  async findMyMessages(@Arg("id") id: string, @Ctx() ctx: MyContext) {
    try {
      const data = await getMyMessages({ userId: ctx.req.session.userId, id });
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
  @Mutation(() => multipleUsers)
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
