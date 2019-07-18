import { RegisterUserArgs, LoginUserArgs } from './types/User.types';
import {Service} from 'typedi'
import {InjectRepository} from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm';
import { User } from './../../models/User.model';

@Service()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async register({input}: RegisterUserArgs): Promise<User> {
        const user = await this.userRepository.save(this.userRepository.create(input))
        return user;
    }

    async login({input: {email, password}}: LoginUserArgs): Promise<User> {
        const user = await this.userRepository.findOne({email, password});
        this._assertDoesNotExists(user)

        return user;
    }

    private _assertDoesNotExists(user: User) {
        if (!user) {
            throw [new Error()]
        }
    }
}