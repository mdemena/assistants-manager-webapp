import AuthService from './AuthService';

const userLogin = 'mdemena' + (Math.random() * 1000).toFixed(0);
const userEmail = userLogin + '@gmail.com';

describe('Authorization Tests', () => {
    test(`User Login not exist`, async () => {
        const result = await AuthService.existusername(userLogin)
        expect(result).toEqual(false);
    });

    test(`User Email not exist`, async () => {
        const result = await AuthService.existemail(userEmail)
        expect(result).toEqual(false);
    });

    test('Can make a Signup', async () => {
        const result = await AuthService.signup(userLogin, 'Marc De Mena', userEmail, 'pepeluis')
        expect(result.status).toEqual(200);
        expect(result.data.username).toEqual(userLogin);
    });

    test(`User Login exist`, async () => {
        const result = await AuthService.existusername(userLogin)
        expect(result).toEqual(true);
    });

    test(`User Email exist`, async () => {
        const result = await AuthService.existemail(userEmail)
        expect(result).toEqual(true);
    });

    test(`Can't make a Signup because user exist`, async () => {
        const result = await AuthService.signup(userLogin, 'Marc De Mena', userEmail, 'pepeluis')
        expect(result.response.status).toEqual(406);
    });

    test(`User can login`, async () => {
        const result = await AuthService.login(userLogin, 'pepeluis')
        expect(result.username).toEqual(userLogin);
    });
    test(`User is loggedin`, async () => {
        const result = await AuthService.loggedin()
        expect(result).toEqual(true);
    });
    test(`User can't login`, async () => {
        const result = await AuthService.login(userLogin, '')
        expect(result.response.status).not.toEqual(200);
    });
    test(`User can logout`, async () => {
        const result = await AuthService.logout()
        expect(result).toEqual(true);
    });
    test(`User is not loggedin`, async () => {
        const result = await AuthService.loggedin()
        expect(result).toEqual(false);
    });
});