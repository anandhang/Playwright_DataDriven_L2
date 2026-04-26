import {test, expect} from "@playwright/test";
import  loginData  from "../TestData/LoginData.json";

type LoginData = {
    username:string;
    password:string;
    success:boolean;
}

(loginData as LoginData[]).forEach((data)=>
{
    test("For Each test case "+data.username, async ({page}) => 
    {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log("Navigated to login page - For Each test case "+data.username);
        await page.fill('#userEmail', data.username);
        await page.fill('#userPassword', data.password);
        await page.click('#login');        
        if(data.success)
        {
            await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
            await page.click("//button[normalize-space(text())='Sign Out']");
        }
        await page.close();
    });
});

