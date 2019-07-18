import { Resolver, Query } from "type-graphql";
import { User } from './../../models/User.model';

@Resolver(of => User)
export class UserResolver {

    @Query(returns => String)
    async me() {
        return 'me';
    }

}