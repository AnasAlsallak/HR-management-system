# HR-management-system

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
