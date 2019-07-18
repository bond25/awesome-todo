import { ObjectType, InputType, ArgsType, Field } from "type-graphql";
import { IPayload } from "../../common/interfaces/IPayload.interface";
import { PayloadStatus } from "../../common/enums/PayloadStatus.enum";
import { User } from "../../../models/User.model";

@InputType()
export class RegisterUserInput {
    @Field()
    fullName: string;

    @Field()
    email: string;

    @Field()
    password: string;
}

@ObjectType({implements: IPayload})
export class RegisterUserPayload extends IPayload {
    recordId?: number;
    status: PayloadStatus;

    @Field(type => User)
    record?: User;
}

@ArgsType()
export class RegisterUserArgs {
    @Field()
    input: RegisterUserInput;
}

@InputType()
export class LoginUserInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@ObjectType({implements: IPayload})
export class LoginUserPayload extends IPayload {
    recordId?: number;
    status: PayloadStatus;
    
    @Field({nullable: true})
    token?: string;
    
    @Field(type => User, {nullable: true})
    record?: User;

}

@ArgsType()
export class LoginUserArgs {
    @Field()
    input: LoginUserInput;
}