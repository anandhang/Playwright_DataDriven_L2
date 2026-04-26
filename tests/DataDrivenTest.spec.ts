import {test, expect} from "@playwright/test";

const testData=[
    {
    username:'anantsmail@gmail.com',
    password: 'Imagine@123',
    success: true
    },
    {
        username: "wronguser@gmail.com",
        password: "WrongPassword",
        success: false,
    }   
];

testData.forEach(data => 
{
    test("data driven test case "+data.username, async ({page}) => 
    {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        console.log("Navigated to login page");
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