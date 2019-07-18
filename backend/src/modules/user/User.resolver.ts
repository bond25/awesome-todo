import { Resolver, Query, Mutation, Args } from "type-graphql";
import { PayloadStatus } from './../common/enums/PayloadStatus.enum';
import { User } from './../../models/User.model';
import { UserService } from './User.service';
import { RegisterUserPayload, RegisterUserArgs, LoginUserPayload, LoginUserArgs } from "./types/User.types";

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(returns => String)
    async me() {
        return 'me';
    }

    @Mutation(returns => RegisterUserPayload)
    async register(@Args() args: RegisterUserArgs): Promise<RegisterUserPayload> {
        try {
            const user = await this.userService.register(args);
            return {
                recordId: user.userId,
                record: user,
                status: PayloadStatus.SUCCESS
            }
        } catch (errors) {
            return {
                status: PayloadStatus.FAIL
            }
        }
    }

    @Mutation(returns => LoginUserPayload)
    async login(@Args() args: LoginUserArgs): Promise<LoginUserPayload> {
        try {
            const user = await this.userService.login(args);
            return {
                recordId: user.userId,
                status: PayloadStatus.SUCCESS,
                record: user,
                token: "JWT"
            }
        } catch (errors) {
            return {
                status: PayloadStatus.FAIL
            }
        }

    }

}