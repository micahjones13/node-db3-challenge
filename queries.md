# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    SELECT ProductName, CategoryName 
    From Products as p
    inner join categories as c on c.categoryid = p.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    SELECT OrderID, ShipperName 
    FROM Orders as o
    inner join Shippers as s on o.shipperid = s.shipperid
    where OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    SELECT ProductName, Quantity
    From Products as p
    inner join OrderDetails as o on o.productid = p.productid
    where orderid = 10251
    order by ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT OrderID, CustomerName, LastName as EmployeeLastName
    From Orders as o 
    inner join Customers as c on o.customerid = c.customerid
    inner join Employees as e on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    SELECT DISTINCT CategoryName, count(p.CategoryID) as Count 
    FROM Categories as c
    inner join Products as p on c.categoryID = p.categoryID
    group by CategoryName


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

    Select OrderID, count(productid) as ItemCount 
    from OrderDetails
    group by OrderID