/** @format */

import { Field, InputType } from "type-graphql";

@InputType()
export class createCycleReviewInput {
  @Field()
  cycleId: string;

  @Field()
  data: string;
}
