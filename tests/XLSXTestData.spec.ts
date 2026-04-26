import {test, expect} from "@playwright/test"
import {getExcelData} from '../Utils/excelReader'

const data=getExcelData('TestData/LoginTestData.xlsx') as any[];
for(const user of data)
{
    test("EXCEL Data driven test "+user.username, async ({page}) => 
    {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log("Navigated to login page - EXCEL reader Test case "+user.username);
        await page.fill('#userEmail', user.username);
        await page.fill('#userPassword', user.password);
        await page.click('#login');        
        if(user.success)
        {
            await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
            await page.click("//button[normalize-space(text())='Sign Out']");
        }
        await page.close();
    });

}