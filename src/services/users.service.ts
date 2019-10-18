import { Service } from 'typedi'

@Service()
export default class UsersService {
    counstructor(){}

    public sayHello(): string{
        return 'Hello!';
    }
}