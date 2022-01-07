Desco is a power distribution company. They want you to build some features. Read the requirements carefully before doing the task.

1. Make a layout component, keep a header and a body. You have to reuse this layout component in every page .

2. Make a billing page.

3. Keep a button which will open a modal. The modal will contain a submission form. The form will have some inputs such as ‘Full Name’ , ‘Email’, ’Phone ’ ,‘Paid Amount’

4. Make a table which will have backend pagination with 10 data per page.

5. When the user will submit the data, the table have to be updated, Before the API gives a success response.

6. If the API is pending show “Generating Id” text in billing Id column only. If the API gives a success response you will have to set the generated billing Id. If the API fails with an error you need to roll back the data(remove) and show alert with a proper backend error message.

7 .In the pagination you need to maintain the pagination page number in the right way, don't call API to load the table data for this kind of submit. Suppose there are 10 items in total and you have only one page in total when you submit new data before API response it will have a new page for displaying all 11 items. Remember per page should have only 10 items. Items will be in Descending order.

8. Show total ‘Paid Amount’ in the header, While submitting the form, add data to redux and increase the value. If the API fails then decrement the amount.

9. You have to update and delete data, For update data reuse the same submission form component.

10. For backend create these APIs -
    api/registration
    api/login
    api/billing-list
    api/add-billing
    api/update-billing/:id
    api/delete-billing/:id

11. Make backend form validation, such as email format, phone number should be 11 digit, Not allow blank value, Give proper error message

12. You need to use JWT for authentication and authorization.

13. Search fullName, email, phone number
