/** @format */

import { ObjectType, Field } from "type-graphql";
import { Chats } from "../Entities/Chats";

@ObjectType()
export class ChatNotification {
  @Field(() => [Chats], { nullable: true })
  chat: Chats;

  @Field(() => String, { nullable: true })
  message: string;

  @Field(() => String, { nullable: true })
  error: string | null;
}


export interface ChatNotificationPayload {
  data: Chats[];
  message: string;
  error: string | null;
  userId: string;
}

export const CHATNOTIFICATIONS = "CHATNOTIFICATIONS";
export const UPDATEMESSAGES = "UPDATEMESSAGES";
export const DELETEMESSAGES = "DELETEMESSAGES";