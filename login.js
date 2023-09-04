import { Selector } from 'testcafe';

fixture('Login Test')
    .page('https://dev.deepthought.education/login');

test('Login with valid credentials', async t => {
    
    const username = 'vijay04';
    const password = 'Vijay123@';

    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('#login');
    
    await t
        .typeText(usernameInput, username)
        .typeText(passwordInput, password)
        .click(loginButton);
    
    const loggedInElement = Selector('.header-profile-picture');
     
    await t.expect(loggedInElement.exists).ok();
});


test('Login with invalid credentials', async t => {
    
    const username = 'vijay04-wronginput';
    const password = 'Vijay123@';

    
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('#login');
    
    
    await t
        .typeText(usernameInput, username)
        .typeText(passwordInput, password)
        .click(loginButton);
        
        
    const errorField = Selector('#login-error-notify');
    await t.expect(errorField.exists).ok();
});


