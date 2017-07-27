prompt PL/SQL Developer import file
prompt Created on 2014Äê3ÔÂ14ÈÕ by Administrator
set feedback off
set define off
prompt Creating DEMO_DEPARTMENTS...
create table DEMO_DEPARTMENTS
(
  id              NUMBER(9) not null,
  department_name VARCHAR2(30) not null,
  manager_id      NUMBER(6),
  location_id     NUMBER(4)
);
comment on column DEMO_DEPARTMENTS.department_name
  is '"A not null column that shows name of a department. Administration,
Marketing, Purchasing, Human Resources, Shipping, IT, Executive, Public
Relations, Sales, Finance, and Accounting. "';
comment on column DEMO_DEPARTMENTS.manager_id
  is 'Manager_id of a department. Foreign key to employee_id column of employees table. The manager_id column of the employee table references this column.';
comment on column DEMO_DEPARTMENTS.location_id
  is 'Location id where a department is located. Foreign key to location_id column of locations table.';
alter table DEMO_DEPARTMENTS
  add constraint DEP_ID_PK primary key (ID);

prompt Creating DEMO_EMPLOYEES...
create table DEMO_EMPLOYEES
(
  id             NUMBER(9) not null,
  first_name     VARCHAR2(20),
  last_name      VARCHAR2(25) not null,
  email          VARCHAR2(25) not null,
  phone_number   VARCHAR2(20),
  hire_date      DATE not null,
  job_id         VARCHAR2(10) not null,
  salary         NUMBER(8,2),
  commission_pct NUMBER(2,2),
  manager_id     NUMBER(6),
  department_id  NUMBER(4)
);
comment on column DEMO_EMPLOYEES.first_name
  is 'First name of the employee. A not null column.';
comment on column DEMO_EMPLOYEES.last_name
  is 'Last name of the employee. A not null column.';
comment on column DEMO_EMPLOYEES.email
  is 'Email id of the employee';
comment on column DEMO_EMPLOYEES.phone_number
  is 'Phone number of the employee; includes country code and area code';
comment on column DEMO_EMPLOYEES.hire_date
  is 'Date when the employee started on this job. A not null column.';
comment on column DEMO_EMPLOYEES.job_id
  is '"Current job of the employee; foreign key to job_id column of the
jobs table. A not null column."';
comment on column DEMO_EMPLOYEES.salary
  is '"Monthly salary of the employee. Must be greater
than zero (enforced by constraint emp_salary_min)"';
comment on column DEMO_EMPLOYEES.commission_pct
  is '"Commission percentage of the employee; Only employees in sales
department elgible for commission percentage"';
comment on column DEMO_EMPLOYEES.manager_id
  is '"Manager id of the employee; has same domain as manager_id in
departments table. Foreign key to employee_id column of employees table.
(useful for reflexive joins and CONNECT BY query)"';
comment on column DEMO_EMPLOYEES.department_id
  is '"Department id where employee works; foreign key to department_id
column of the departments table"';
alter table DEMO_EMPLOYEES
  add constraint EMPLOYEE_ID_PK primary key (ID);

prompt Disabling triggers for DEMO_DEPARTMENTS...
alter table DEMO_DEPARTMENTS disable all triggers;
prompt Disabling triggers for DEMO_EMPLOYEES...
alter table DEMO_EMPLOYEES disable all triggers;
prompt Loading DEMO_DEPARTMENTS...
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (10, 'Administration', 200, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (20, 'Marketing', 201, 1800);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (30, 'Purchasing', 114, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (40, 'Human Resources', 203, 2400);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (50, 'Shipping', 121, 1500);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (60, 'IT', 103, 1400);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (70, 'Public Relations', 204, 2700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (80, 'Sales', 145, 2500);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (90, 'Executive', 100, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (100, 'Finance', 108, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (110, 'Accounting', 205, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (120, 'Treasury', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (130, 'Corporate Tax', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (140, 'Control And Credit', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (150, 'Shareholder Services', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (160, 'Benefits', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (170, 'Manufacturing', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (180, 'Construction', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (190, 'Contracting', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (200, 'Operations', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (210, 'IT Support', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (220, 'NOC', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (230, 'IT Helpdesk', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (240, 'Government Sales', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (250, 'Retail Sales', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (260, 'Recruiting', null, 1700);
insert into DEMO_DEPARTMENTS (id, department_name, manager_id, location_id)
values (270, 'Payroll', null, 1700);
commit;
prompt 27 records loaded
prompt Loading DEMO_EMPLOYEES...
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (198, 'Donald', 'OConnell', 'DOCONNEL', '650.507.9833', to_date('21-06-1999', 'dd-mm-yyyy'), 'SH_CLERK', 2600, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (199, 'Douglas', 'Grant', 'DGRANT', '650.507.9844', to_date('13-01-2000', 'dd-mm-yyyy'), 'SH_CLERK', 2600, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (200, 'Jennifer', 'Whalen', 'JWHALEN', '515.123.4444', to_date('17-09-1987', 'dd-mm-yyyy'), 'AD_ASST', 4400, null, 101, 10);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (201, 'Michael', 'Hartstein', 'MHARTSTE', '515.123.5555', to_date('17-02-1996', 'dd-mm-yyyy'), 'MK_MAN', 13000, null, 100, 20);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (202, 'Pat', 'Fay', 'PFAY', '603.123.6666', to_date('17-08-1997', 'dd-mm-yyyy'), 'MK_REP', 6000, null, 201, 20);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (203, 'Susan', 'Mavris', 'SMAVRIS', '515.123.7777', to_date('07-06-1994', 'dd-mm-yyyy'), 'HR_REP', 6500, null, 101, 40);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (204, 'Hermann', 'Baer', 'HBAER', '515.123.8888', to_date('07-06-1994', 'dd-mm-yyyy'), 'PR_REP', 10000, null, 101, 70);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (205, 'Shelley', 'Higgins', 'SHIGGINS', '515.123.8080', to_date('07-06-1994', 'dd-mm-yyyy'), 'AC_MGR', 12000, null, 101, 110);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (206, 'William', 'Gietz', 'WGIETZ', '515.123.8181', to_date('07-06-1994', 'dd-mm-yyyy'), 'AC_ACCOUNT', 8300, null, 205, 110);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (100, 'Steven', 'King', 'SKING', '515.123.4567', to_date('17-06-1987', 'dd-mm-yyyy'), 'AD_PRES', 24000, null, null, 90);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (101, 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', to_date('21-09-1989', 'dd-mm-yyyy'), 'AD_VP', 17000, null, 100, 90);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (102, 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', to_date('13-01-1993', 'dd-mm-yyyy'), 'AD_VP', 17000, null, 100, 90);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (103, 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', to_date('03-01-1990', 'dd-mm-yyyy'), 'IT_PROG', 9000, null, 102, 60);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (104, 'Bruce', 'Ernst', 'BERNST', '590.423.4568', to_date('21-05-1991', 'dd-mm-yyyy'), 'IT_PROG', 6000, null, 103, 60);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (105, 'David', 'Austin', 'DAUSTIN', '590.423.4569', to_date('25-06-1997', 'dd-mm-yyyy'), 'IT_PROG', 4800, null, 103, 60);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (106, 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', to_date('05-02-1998', 'dd-mm-yyyy'), 'IT_PROG', 4800, null, 103, 60);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (107, 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', to_date('07-02-1999', 'dd-mm-yyyy'), 'IT_PROG', 4200, null, 103, 60);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (108, 'Nancy', 'Greenberg', 'NGREENBE', '515.124.4569', to_date('17-08-1994', 'dd-mm-yyyy'), 'FI_MGR', 12000, null, 101, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (109, 'Daniel', 'Faviet', 'DFAVIET', '515.124.4169', to_date('16-08-1994', 'dd-mm-yyyy'), 'FI_ACCOUNT', 9000, null, 108, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (110, 'John', 'Chen', 'JCHEN', '515.124.4269', to_date('28-09-1997', 'dd-mm-yyyy'), 'FI_ACCOUNT', 8200, null, 108, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (111, 'Ismael', 'Sciarra', 'ISCIARRA', '515.124.4369', to_date('30-09-1997', 'dd-mm-yyyy'), 'FI_ACCOUNT', 7700, null, 108, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (112, 'Jose Manuel', 'Urman', 'JMURMAN', '515.124.4469', to_date('07-03-1998', 'dd-mm-yyyy'), 'FI_ACCOUNT', 7800, null, 108, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (113, 'Luis', 'Popp', 'LPOPP', '515.124.4567', to_date('07-12-1999', 'dd-mm-yyyy'), 'FI_ACCOUNT', 6900, null, 108, 100);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (114, 'Den', 'Raphaely', 'DRAPHEAL', '515.127.4561', to_date('07-12-1994', 'dd-mm-yyyy'), 'PU_MAN', 11000, null, 100, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (115, 'Alexander', 'Khoo', 'AKHOO', '515.127.4562', to_date('18-05-1995', 'dd-mm-yyyy'), 'PU_CLERK', 3100, null, 114, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (116, 'Shelli', 'Baida', 'SBAIDA', '515.127.4563', to_date('24-12-1997', 'dd-mm-yyyy'), 'PU_CLERK', 2900, null, 114, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (117, 'Sigal', 'Tobias', 'STOBIAS', '515.127.4564', to_date('24-07-1997', 'dd-mm-yyyy'), 'PU_CLERK', 2800, null, 114, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (118, 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', to_date('15-11-1998', 'dd-mm-yyyy'), 'PU_CLERK', 2600, null, 114, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (119, 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', to_date('10-08-1999', 'dd-mm-yyyy'), 'PU_CLERK', 2500, null, 114, 30);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (120, 'Matthew', 'Weiss', 'MWEISS', '650.123.1234', to_date('18-07-1996', 'dd-mm-yyyy'), 'ST_MAN', 8000, null, 100, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (121, 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', to_date('10-04-1997', 'dd-mm-yyyy'), 'ST_MAN', 8200, null, 100, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (122, 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', to_date('01-05-1995', 'dd-mm-yyyy'), 'ST_MAN', 7900, null, 100, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (123, 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', to_date('10-10-1997', 'dd-mm-yyyy'), 'ST_MAN', 6500, null, 100, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (124, 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', to_date('16-11-1999', 'dd-mm-yyyy'), 'ST_MAN', 5800, null, 100, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (125, 'Julia', 'Nayer', 'JNAYER', '650.124.1214', to_date('16-07-1997', 'dd-mm-yyyy'), 'ST_CLERK', 3200, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (126, 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', to_date('28-09-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2700, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (127, 'James', 'Landry', 'JLANDRY', '650.124.1334', to_date('14-01-1999', 'dd-mm-yyyy'), 'ST_CLERK', 2400, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (128, 'Steven', 'Markle', 'SMARKLE', '650.124.1434', to_date('08-03-2000', 'dd-mm-yyyy'), 'ST_CLERK', 2200, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (129, 'Laura', 'Bissot', 'LBISSOT', '650.124.5234', to_date('20-08-1997', 'dd-mm-yyyy'), 'ST_CLERK', 3300, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (130, 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', to_date('30-10-1997', 'dd-mm-yyyy'), 'ST_CLERK', 2800, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (131, 'James', 'Marlow', 'JAMRLOW', '650.124.7234', to_date('16-02-1997', 'dd-mm-yyyy'), 'ST_CLERK', 2500, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (132, 'TJ', 'Olson', 'TJOLSON', '650.124.8234', to_date('10-04-1999', 'dd-mm-yyyy'), 'ST_CLERK', 2100, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (133, 'Jason', 'Mallin', 'JMALLIN', '650.127.1934', to_date('14-06-1996', 'dd-mm-yyyy'), 'ST_CLERK', 3300, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (134, 'Michael', 'Rogers', 'MROGERS', '650.127.1834', to_date('26-08-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2900, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (135, 'Ki', 'Gee', 'KGEE', '650.127.1734', to_date('12-12-1999', 'dd-mm-yyyy'), 'ST_CLERK', 2400, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (136, 'Hazel', 'Philtanker', 'HPHILTAN', '650.127.1634', to_date('06-02-2000', 'dd-mm-yyyy'), 'ST_CLERK', 2200, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (137, 'Renske', 'Ladwig', 'RLADWIG', '650.121.1234', to_date('14-07-1995', 'dd-mm-yyyy'), 'ST_CLERK', 3600, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (138, 'Stephen', 'Stiles', 'SSTILES', '650.121.2034', to_date('26-10-1997', 'dd-mm-yyyy'), 'ST_CLERK', 3200, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (139, 'John', 'Seo', 'JSEO', '650.121.2019', to_date('12-02-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2700, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (140, 'Joshua', 'Patel', 'JPATEL', '650.121.1834', to_date('06-04-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2500, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (141, 'Trenna', 'Rajs', 'TRAJS', '650.121.8009', to_date('17-10-1995', 'dd-mm-yyyy'), 'ST_CLERK', 3500, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (142, 'Curtis', 'Davies', 'CDAVIES', '650.121.2994', to_date('29-01-1997', 'dd-mm-yyyy'), 'ST_CLERK', 3100, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (143, 'Randall', 'Matos', 'RMATOS', '650.121.2874', to_date('15-03-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2600, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (144, 'Peter', 'Vargas', 'PVARGAS', '650.121.2004', to_date('09-07-1998', 'dd-mm-yyyy'), 'ST_CLERK', 2500, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (145, 'John', 'Russell', 'JRUSSEL', '011.44.1344.429268', to_date('01-10-1996', 'dd-mm-yyyy'), 'SA_MAN', 14000, .4, 100, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (146, 'Karen', 'Partners', 'KPARTNER', '011.44.1344.467268', to_date('05-01-1997', 'dd-mm-yyyy'), 'SA_MAN', 13500, .3, 100, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (147, 'Alberto', 'Errazuriz', 'AERRAZUR', '011.44.1344.429278', to_date('10-03-1997', 'dd-mm-yyyy'), 'SA_MAN', 12000, .3, 100, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (148, 'Gerald', 'Cambrault', 'GCAMBRAU', '011.44.1344.619268', to_date('15-10-1999', 'dd-mm-yyyy'), 'SA_MAN', 11000, .3, 100, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (149, 'Eleni', 'Zlotkey', 'EZLOTKEY', '011.44.1344.429018', to_date('29-01-2000', 'dd-mm-yyyy'), 'SA_MAN', 10500, .2, 100, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (150, 'Peter', 'Tucker', 'PTUCKER', '011.44.1344.129268', to_date('30-01-1997', 'dd-mm-yyyy'), 'SA_REP', 10000, .3, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (151, 'David', 'Bernstein', 'DBERNSTE', '011.44.1344.345268', to_date('24-03-1997', 'dd-mm-yyyy'), 'SA_REP', 9500, .25, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (152, 'Peter', 'Hall', 'PHALL', '011.44.1344.478968', to_date('20-08-1997', 'dd-mm-yyyy'), 'SA_REP', 9000, .25, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (153, 'Christopher', 'Olsen', 'COLSEN', '011.44.1344.498718', to_date('30-03-1998', 'dd-mm-yyyy'), 'SA_REP', 8000, .2, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (154, 'Nanette', 'Cambrault', 'NCAMBRAU', '011.44.1344.987668', to_date('09-12-1998', 'dd-mm-yyyy'), 'SA_REP', 7500, .2, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (155, 'Oliver', 'Tuvault', 'OTUVAULT', '011.44.1344.486508', to_date('23-11-1999', 'dd-mm-yyyy'), 'SA_REP', 7000, .15, 145, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (156, 'Janette', 'King', 'JKING', '011.44.1345.429268', to_date('30-01-1996', 'dd-mm-yyyy'), 'SA_REP', 10000, .35, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (157, 'Patrick', 'Sully', 'PSULLY', '011.44.1345.929268', to_date('04-03-1996', 'dd-mm-yyyy'), 'SA_REP', 9500, .35, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (158, 'Allan', 'McEwen', 'AMCEWEN', '011.44.1345.829268', to_date('01-08-1996', 'dd-mm-yyyy'), 'SA_REP', 9000, .35, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (159, 'Lindsey', 'Smith', 'LSMITH', '011.44.1345.729268', to_date('10-03-1997', 'dd-mm-yyyy'), 'SA_REP', 8000, .3, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (160, 'Louise', 'Doran', 'LDORAN', '011.44.1345.629268', to_date('15-12-1997', 'dd-mm-yyyy'), 'SA_REP', 7500, .3, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (161, 'Sarath', 'Sewall', 'SSEWALL', '011.44.1345.529268', to_date('03-11-1998', 'dd-mm-yyyy'), 'SA_REP', 7000, .25, 146, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (162, 'Clara', 'Vishney', 'CVISHNEY', '011.44.1346.129268', to_date('11-11-1997', 'dd-mm-yyyy'), 'SA_REP', 10500, .25, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (163, 'Danielle', 'Greene', 'DGREENE', '011.44.1346.229268', to_date('19-03-1999', 'dd-mm-yyyy'), 'SA_REP', 9500, .15, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (164, 'Mattea', 'Marvins', 'MMARVINS', '011.44.1346.329268', to_date('24-01-2000', 'dd-mm-yyyy'), 'SA_REP', 7200, .1, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (165, 'David', 'Lee', 'DLEE', '011.44.1346.529268', to_date('23-02-2000', 'dd-mm-yyyy'), 'SA_REP', 6800, .1, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (166, 'Sundar', 'Ande', 'SANDE', '011.44.1346.629268', to_date('24-03-2000', 'dd-mm-yyyy'), 'SA_REP', 6400, .1, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (167, 'Amit', 'Banda', 'ABANDA', '011.44.1346.729268', to_date('21-04-2000', 'dd-mm-yyyy'), 'SA_REP', 6200, .1, 147, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (168, 'Lisa', 'Ozer', 'LOZER', '011.44.1343.929268', to_date('11-03-1997', 'dd-mm-yyyy'), 'SA_REP', 11500, .25, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (169, 'Harrison', 'Bloom', 'HBLOOM', '011.44.1343.829268', to_date('23-03-1998', 'dd-mm-yyyy'), 'SA_REP', 10000, .2, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (170, 'Tayler', 'Fox', 'TFOX', '011.44.1343.729268', to_date('24-01-1998', 'dd-mm-yyyy'), 'SA_REP', 9600, .2, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (171, 'William', 'Smith', 'WSMITH', '011.44.1343.629268', to_date('23-02-1999', 'dd-mm-yyyy'), 'SA_REP', 7400, .15, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (172, 'Elizabeth', 'Bates', 'EBATES', '011.44.1343.529268', to_date('24-03-1999', 'dd-mm-yyyy'), 'SA_REP', 7300, .15, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (173, 'Sundita', 'Kumar', 'SKUMAR', '011.44.1343.329268', to_date('21-04-2000', 'dd-mm-yyyy'), 'SA_REP', 6100, .1, 148, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (174, 'Ellen', 'Abel', 'EABEL', '011.44.1644.429267', to_date('11-05-1996', 'dd-mm-yyyy'), 'SA_REP', 11000, .3, 149, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (175, 'Alyssa', 'Hutton', 'AHUTTON', '011.44.1644.429266', to_date('19-03-1997', 'dd-mm-yyyy'), 'SA_REP', 8800, .25, 149, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (176, 'Jonathon', 'Taylor', 'JTAYLOR', '011.44.1644.429265', to_date('24-03-1998', 'dd-mm-yyyy'), 'SA_REP', 8600, .2, 149, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (177, 'Jack', 'Livingston', 'JLIVINGS', '011.44.1644.429264', to_date('23-04-1998', 'dd-mm-yyyy'), 'SA_REP', 8400, .2, 149, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (178, 'Kimberely', 'Grant', 'KGRANT', '011.44.1644.429263', to_date('24-05-1999', 'dd-mm-yyyy'), 'SA_REP', 7000, .15, 149, null);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (179, 'Charles', 'Johnson', 'CJOHNSON', '011.44.1644.429262', to_date('04-01-2000', 'dd-mm-yyyy'), 'SA_REP', 6200, .1, 149, 80);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (180, 'Winston', 'Taylor', 'WTAYLOR', '650.507.9876', to_date('24-01-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3200, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (181, 'Jean', 'Fleaur', 'JFLEAUR', '650.507.9877', to_date('23-02-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3100, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (182, 'Martha', 'Sullivan', 'MSULLIVA', '650.507.9878', to_date('21-06-1999', 'dd-mm-yyyy'), 'SH_CLERK', 2500, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (183, 'Girard', 'Geoni', 'GGEONI', '650.507.9879', to_date('03-02-2000', 'dd-mm-yyyy'), 'SH_CLERK', 2800, null, 120, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (184, 'Nandita', 'Sarchand', 'NSARCHAN', '650.509.1876', to_date('27-01-1996', 'dd-mm-yyyy'), 'SH_CLERK', 4200, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (185, 'Alexis', 'Bull', 'ABULL', '650.509.2876', to_date('20-02-1997', 'dd-mm-yyyy'), 'SH_CLERK', 4100, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (186, 'Julia', 'Dellinger', 'JDELLING', '650.509.3876', to_date('24-06-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3400, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (187, 'Anthony', 'Cabrio', 'ACABRIO', '650.509.4876', to_date('07-02-1999', 'dd-mm-yyyy'), 'SH_CLERK', 3000, null, 121, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (188, 'Kelly', 'Chung', 'KCHUNG', '650.505.1876', to_date('14-06-1997', 'dd-mm-yyyy'), 'SH_CLERK', 3800, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (189, 'Jennifer', 'Dilly', 'JDILLY', '650.505.2876', to_date('13-08-1997', 'dd-mm-yyyy'), 'SH_CLERK', 3600, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (190, 'Timothy', 'Gates', 'TGATES', '650.505.3876', to_date('11-07-1998', 'dd-mm-yyyy'), 'SH_CLERK', 2900, null, 122, 50);
commit;
prompt 100 records committed...
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (191, 'Randall', 'Perkins', 'RPERKINS', '650.505.4876', to_date('19-12-1999', 'dd-mm-yyyy'), 'SH_CLERK', 2500, null, 122, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (192, 'Sarah', 'Bell', 'SBELL', '650.501.1876', to_date('04-02-1996', 'dd-mm-yyyy'), 'SH_CLERK', 4000, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (193, 'Britney', 'Everett', 'BEVERETT', '650.501.2876', to_date('03-03-1997', 'dd-mm-yyyy'), 'SH_CLERK', 3900, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (194, 'Samuel', 'McCain', 'SMCCAIN', '650.501.3876', to_date('01-07-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3200, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (195, 'Vance', 'Jones', 'VJONES', '650.501.4876', to_date('17-03-1999', 'dd-mm-yyyy'), 'SH_CLERK', 2800, null, 123, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (196, 'Alana', 'Walsh', 'AWALSH', '650.507.9811', to_date('24-04-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3100, null, 124, 50);
insert into DEMO_EMPLOYEES (id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values (197, 'Kevin', 'Feeney', 'KFEENEY', '650.507.9822', to_date('23-05-1998', 'dd-mm-yyyy'), 'SH_CLERK', 3000, null, 124, 50);
commit;
prompt 107 records loaded
prompt Enabling triggers for DEMO_DEPARTMENTS...
alter table DEMO_DEPARTMENTS enable all triggers;
prompt Enabling triggers for DEMO_EMPLOYEES...
alter table DEMO_EMPLOYEES enable all triggers;
set feedback on
set define on
prompt Done.
