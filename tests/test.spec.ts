import{test , expect} from '@playwright/test';
import {LoginPage} from '../Pages/LoginPage'
import {LogoutPage} from '../Pages/LogoutPage';
import {PricePage} from '../Pages/PricePage';



test.beforeEach('Title test', async ({page})=>{
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle('Swag Labs');
});

test.describe('Logged in tests', () => {
test.beforeEach('Login page ', async ({page})=>{
const loginPage = new LoginPage(page);
await loginPage.validPassword();
page.on('dialog', dialog => dialog.accept());
expect(await page.getByText('Sauce Labs Backpack')).toBeVisible()
});



test('Prices', async ({page})=>{
    const pricePage = new PricePage(page);
    await pricePage.sortByPrice();
expect (await page.getByText('$7.99')).toBeVisible()
});



test('LOGOUT' , async ({page})=>{

    const logoutPage = new LogoutPage(page);
    await logoutPage.Logout();
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs')

});
});