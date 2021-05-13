/** @format */

import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Cycles } from "./Cycles";
import { CycleReview } from "./Cycle_Review";
import { Ride } from "./Ride";
import { UserReview } from "./User_Review";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @Column({ unique: true })
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  Name: string;

  @Field()
  @Column({ unique: true })
  Email: string;

  @Column()
  Password: string;

  @Field()
  @Column({ unique: true })
  PhoneNumber: string;

  @Field()
  @Column({ length: 1000 })
  Address: String;

  @Field(() => [Ride], { nullable: true })
  @OneToMany(() => Ride, (ride) => ride.rider, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primary: true,
  })
  @JoinColumn({ referencedColumnName: "ride_id" })
  ride: Ride[];
  
  @Field(() => [Cycles], { nullable: true })
  @OneToMany(() => Cycles, (cycles) => cycles.owner, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primary: true,
  })
  @JoinColumn({ referencedColumnName: "cycle_id" })
  cycles: Cycles[];

  @Field(() => [UserReview], { nullable: true })
  @OneToMany(() => UserReview, (UserReview) => UserReview.saidBy, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primary: true,
  })
  @JoinColumn({ referencedColumnName: "review_id" })
  reviews_byme: UserReview[];

  @Field(() => [UserReview], { nullable: true })
  @OneToMany(() => UserReview, (UserReview) => UserReview.refersTo, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primary: true,
  })
  @JoinColumn({ referencedColumnName: "review_id" })
  reviews_received: UserReview[];

  @Field(() => [CycleReview], { nullable: true })
  @OneToMany(() => CycleReview, (cycleReview) => cycleReview.reviewer, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    primary: true,
  })
  @JoinColumn({ name: "review_id" })
  cyclesReview: CycleReview[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
