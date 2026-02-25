import{Page,Locator} from '@playwright/test'
export class PricePage{
    page: Page;
    productsort: Locator;

           constructor(page: Page){
            this.page = page; 
            this.productsort = page.locator('.product_sort_container')
           }
        async sortByPrice(){
            await this.productsort.selectOption('Price (low to high)');
}
        
        }
            