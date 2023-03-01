# HR-management-system

## Constructor

## Table of contents

- [The Home page](#the-home-page)
- [The Accounting page](#the-accounting-page)

___

I have created two HTML pages index.html and accounting.html for a basic web application for HR Management.

## The Home page

The **Home** page (index.html) which contains the following:

**1.** A header section for navigating to the home and accounting pages.

**2.** A main section for rendering the information for each employee from JavaScript part of the website.

**3.** A footer that have some social media links a long with copyright JavaScript statement.

**4.** I created a constructor to generate an employee object which will be rendered in the main section from the app.js file and this object will contain:

    - Employee ID.

    - Full Name.

    - Department:

        1. Administration.
        2. Marketing.
        3. Development.
        4. Finance.
    - Level:

        1. Junior.
        2. Mid-Senior.
        3. Senior.
        4. Image URL.

    - Salary.

**5.** I created a prototype function for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, and I used the below table to calculate the salary depending on the employee level.

After calculating the random salary I calculated the net salary where the tax percent is ***7.5*** and returned the resulting value.

<html>
    <table>
    <thead>
        <tr>
        <th> </th>
        <th>Level</th>
        <th>Min</th>
        <th>Max</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th>1</th>
        <td>Senior</td>
        <td>1500</td>
        <td>2000</td>
        </tr>
        <tr>
        <th>2</th>
        <td>Mid-Senior</td>
        <td>1000</td>
        <td>1500</td>
        </tr>
        <tr>
        <th>3</th>
        <td>Junior</td>
        <td>500</td>
        <td>1000</td>
        </tr>
    </tbody>
    </table>
</html> </br>

**6.** I created a render prototype function to render each employee name with their salary in the home page.

I used the information shown in the **table** below to create employees instances. </br>

<html>
    <table>
    <thead>
        <tr>
        <th></th>
        <th>Employee ID</th>
        <th>Full Name</th>
        <th>Department</th>
        <th>Level</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th>1</th>
        <td>1000</td>
        <td>Ghazi Samer</td>
        <td>Administration</td>
        <td>Senior</td>
        </tr>
        <tr>
        <th>2</th>
        <td>1001</td>
        <td>Lana Ali</td>
        <td>Finance</td>
        <td>Senior</td>
        </tr>
        <tr>
        <th>3</th>
        <td>1002</td>
        <td>Tamara Ayoub</td>
        <td>Marketing</td>
        <td>Senior</td>
        </tr>
        <tr>
        <th>4</th>
        <td>1003</td>
        <td>Safi Walid</td>
        <td>Administration</td>
        <td>Mid-Senior</td>
        </tr>
        <tr>
        <th>5</th>
        <td>1004</td>
        <td>Omar Zaid</td>
        <td>Development</td>
        <td>1Senior</td>
        </tr>
        <tr>
        <th>6</th>
        <td>1005</td>
        <td>Rana Saleh</td>
        <td>Development</td>
        <td>Junior</td>
        </tr>
        <tr>
        <th>7</th>
        <td>1006</td>
        <td>Hadi Ahmad</td>
        <td>Finance</td>
        <td>Mid-Senior</td>
        </tr>
    </tbody>
    </table>
</html> </br> </br>

## The **Accounting** page

The **Accounting** page includes the following:
1. A header for navigating to any other pages.
2. a main will be empty for today's lab.
3. a footer will have some social media links with copyright.
## Local Storage

1. For the **Home** HTML Page
    - I modified on the JS code to save all the employees in the Local Storage so when I refresh the page I will not lose my old data.

2. For the **Accounting** HTML Page
    - I created a new JS file called accounting.js to use it in this page.
    - Render each department information in a table in the following form:
        - Department Name.
        - Number of employees in each department.
        - Average salary of the department.
        - Total salary Where average salary is the summation of salaries for all employees in each department divided by the number of the employees in that department and total salary is the summation of salaries for all employees in each department.
        - Added a table footer which will have the total number of employees, the average salary for all departments and the total salary for all departments.

## Events

1. At the **Home** HTML page
I added a form with the following fields:

    - Full name.
    - Department with following options:
        - Administration
        - Marketing
        - Development
        - Finance
    - Level with following options:
        - Junior
        - Mid-Senior
        - Senior
        - Image URL
        - Submit button

2. At the **JS code**. 
    - I created a function to generate a unique four digits employee ID number.
    - I added an event listener to get the data from the form instead of having a hard coded data.

    - I refactored the render prototype function to render each employee information in a separate card in the home page as shown below. <br>
![ecard](./assets/ecard.JPG)

3. At the **CSS Style Sheet**. 
    - I added some style for the header and the footer
    - I Used flex to organize the content of the main content.
    - I added backgrounds and some additional style.
    - I used a suitable color palette for your website. 
    - Made it more creative and professional.

4. Finally.
    - I separated the employees cards by their department where you will have a separate section for each department.
