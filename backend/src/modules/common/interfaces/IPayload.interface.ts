import { InterfaceType, Field, Int } from "type-graphql";
import { PayloadStatus } from '../enums/PayloadStatus.enum';

@InterfaceType()
export abstract class IPayload {
    @Field(type => Int, {nullable: true})
    recordId?: number;

    @Field(type => PayloadStatus)
    status: PayloadStatus;
}