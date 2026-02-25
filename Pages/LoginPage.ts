import{Page,Locator} from '@playwright/test'
export class LoginPage{
    page: Page;
    username: Locator;
    password: Locator;
    loginButtonn: Locator;


    constructor(page: Page) {
    this.page = page; 
    this.username = page.locator('#user-name')
    this.password = page.locator('#password')
    this.loginButtonn= page.locator('#login-button')
    this
    }
    async validPassword(){
    await this.username.type('standard_user')
    await this.password.type('secret_sauce')
    await this.loginButtonn.click()
  }
    }
    

