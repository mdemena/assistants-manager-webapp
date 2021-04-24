import UserService from './UserService';
import AuthService from '../auth/AuthService';

const userId = '60845eccc3b603aec58f712d';
let user = null;

describe('User Tests', () => {
    test(`Get an User`, async () => {
        user = await UserService.get(userId)
        expect(user.username).toEqual('mdemena2');
    });

    test(`Update an User`, async () => {
        user = await AuthService.login(user.username,'pepeluis')
        user.username = "mdemena2";
        user = await UserService.save(user.username, user.name, user.email);
        expect(user.username).toEqual('mdemena2');
    });
});