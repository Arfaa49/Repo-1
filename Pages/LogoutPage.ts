import{Page,Locator} from '@playwright/test'
export class LogoutPage{
    page: Page;
    menu: Locator;
    logoutlink: Locator;
     


        constructor(page: Page){
            this.page = page; 
            this.menu = page.locator('#react-burger-menu-btn')
            this.logoutlink = page.locator('#logout_sidebar_link')
        }
    
      async Logout(){
        await this.menu.click()
        await this.logoutlink .click()   
      }
    
    }
    
    