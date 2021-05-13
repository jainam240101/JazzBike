/** @format */

import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Cycles } from "./Cycles";
import { User } from "./User";

@Entity()
@ObjectType()
export class CycleReview extends BaseEntity {
  @Field()
  @Column()
  @PrimaryColumn()
  review_id: string;

  @Field(() => Cycles)
  @ManyToOne(() => Cycles, (cycle) => cycle.reviews, { eager: true })
  @JoinColumn({ referencedColumnName: "cycle_id", name: "cycle_id" })
  cycle: Cycles;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.cyclesReview, { eager: true })
  @JoinColumn({ referencedColumnName: "id", name: "reviewer_id" })
  reviewer: User;

  @Field()
  @Column({ type: "text" })
  data: String;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}
