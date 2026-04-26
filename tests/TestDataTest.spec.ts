import {test, expect} from "@playwright/test";
import {testData} from "../TestData/TestsData";


testData.forEach(data => 
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

const valideUser = testData.filter(data => data.success==true);
for (const userdata of valideUser)
{
    test("Valide user test data "+userdata.username, async ({page}) => 
    {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log("Navigated to login page - Valide user test data "+userdata.username);
        await page.fill('#userEmail', userdata.username);
        await page.fill('#userPassword', userdata.password);
        await page.click('#login');        
        if(userdata.success)
        {
            await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
            await page.click("//button[normalize-space(text())='Sign Out']");
        }
        await page.close();
    });
}


const invalideUser = testData.filter(data => data.success==false);
for (const userdata of invalideUser)
{
    test("invalide user test data "+userdata.username, async ({page}) => 
    {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log("Navigated to login page - invalide user test data "+userdata.username);
        await page.fill('#userEmail', userdata.username);
        await page.fill('#userPassword', userdata.password);
        await page.click('#login');        
        if(userdata.success)
        {
            await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
            await page.click("//button[normalize-space(text())='Sign Out']");
        }
        await page.close();
    });
}