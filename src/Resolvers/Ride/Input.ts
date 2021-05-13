import { Field, InputType } from "type-graphql";

@InputType()
export class changeStatusInput{
    @Field()
    ride_id: string

    @Field()
    status:string
}

@InputType()
export class changeCoordinatesInput{
    @Field()
    x_coordinate: string
    
    @Field()
    y_coordinate: string
}