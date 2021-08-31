// Создать массив объектов: список сотрудников.
// У каждого сотрудника - ФИО, должность, дата начала работы, зарплата.

const employeesList = [{
    name: 'John Smith',
    position: 'Owner',
    startdate: (new Date('2020-11-10')),
    salary: 1500,
}, {
    name: 'Miranda Priestly',
    position: 'Director',
    startdate: (new Date('2020-12-28')),
    salary: 1200,
}, {
    name: 'Sonya Clark',
    position: 'Accountant',
    startdate: (new Date('2020-12-22')),
    salary: 1000,
}, {
    name: 'Helga Puldorf',
    position: 'Head of HR',
    startdate: (new Date('2020-12-24')),
    salary: 1100,
}, {
    name: 'Sam Black',
    position: 'IT-Director',
    startdate: (new Date('2020-12-21')),
    salary: 1250,
}]

// Вывести в страницу таблицу сотрудников.

const displayButton = document.getElementById('display-list-button');
const table = document.getElementById('table');
const tbody = document.getElementById('tbody');

const getForm = document.getElementById('form');

displayButton.addEventListener('click', function() {
    table.setAttribute('class', 'table');
    tbody.innerHTML = '';
    getForm.innerHTML = '';
    for (let i = 0; i < employeesList.length; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.setAttribute('class', 'td-cell')
            tr.appendChild(td);
            if (j == 0) {
                td.innerText = employeesList[i].name;
            }
            if (j == 1) {
                td.innerText = employeesList[i].position;
            }
            if (j == 2) {
                td.innerText = (employeesList[i].startdate).toDateString();
                td.setAttribute('class', 'td-cell td-date');
            }
            if (j == 3) {
                td.innerText = employeesList[i].salary;
                td.setAttribute('class', 'td-cell td-salary');
            }
            if (j == 4) {
                td.innerHTML += '<button class="remove button">Удалить</button>';
            }
        }
        tbody.appendChild(tr);
    }

    // Добавить в каждую строку таблицы кнопку удаления сотрудника.
    // При нажатии на неё удаляется элемент из массива и строка из таблицы.

    const buttonDelete = tbody.getElementsByClassName('remove');
    Array.from(buttonDelete).forEach(button => {
        button.addEventListener('click', function() {
            let buttonRowIndex = Number(button.parentElement.parentElement.rowIndex);
            employeesList.splice(buttonRowIndex, 1);
            this.parentNode.parentNode.remove();
        });
    });



    // Добавить на страницу форму создания сотрудника со всеми необходимыми
    // полями.При добавлении сотрудника через неё он попадает в массив и
    // в таблицу.


    for (let j = 0; j < 4; j++) {
        const addDivField = document.createElement('div');
        const addP = document.createElement('p');
        addP.setAttribute('class', 'before-input-text');
        const addField = document.createElement('input');
        addField.setAttribute('class', 'add-input');
        addField.setAttribute('required', 'required');

        if (j == 0) {
            addP.innerText = 'Фамиилия и имя : ';
            addField.setAttribute('type', 'text');
            addField.setAttribute('id', 'add-name');
        }
        if (j == 1) {
            addP.innerText = 'Должность : ';
            addField.setAttribute('type', 'text');
            addField.setAttribute('id', 'add-position');
        }
        if (j == 2) {
            addP.innerText = 'Дата устройства : ';
            addField.setAttribute('type', 'date');
            addField.setAttribute('id', 'add-startdate');
        }
        if (j == 3) {
            addP.innerText = 'Зарплата : ';
            addField.setAttribute('type', 'number');
            addField.setAttribute('id', 'add-salary');
        }
        addDivField.appendChild(addP);
        addDivField.appendChild(addField);
        getForm.appendChild(addDivField);
    }
    const setH3 = document.createElement('h3');
    setH3.innerText = 'Добавить сотрудника';
    getForm.prepend(setH3);

    const addButton = document.createElement('input');
    addButton.setAttribute('type', 'submit');
    addButton.setAttribute('value', 'Добавить сотрудника');
    addButton.setAttribute('id', 'add-button');
    addButton.setAttribute('class', 'add-button button');
    getForm.appendChild(addButton);

    addButton.addEventListener('click', function() {
        const getNewName = document.getElementById('add-name');
        const getNewPosition = document.getElementById('add-position');
        const getNewStartdate = document.getElementById('add-startdate');
        const getNewSalary = document.getElementById('add-salary');
        const Obj = {
            name: getNewName.value,
            position: getNewPosition.value,
            startdate: (new Date(getNewStartdate.value)),
            salary: Number(getNewSalary.value),
        };
        employeesList.push(Obj);
    })


    // Добавить кнопки "Отсортировать по зарплате"
    // и "Отсортировать по сроку работы".
    // При нажатии на них таблица
    // сортируется по нужному параметру.
    // При этом если дважды нажать на одну и ту же кнопку -
    // сортировка поменяет порядок на обратный.


    const getSortDiv = document.getElementById('sort-div');
    getSortDiv.innerHTML = '';
    getSortDiv.innerHTML += '<button id="date-sort" class="button sort-button date-sort-button"> Сортировать по сроку работы</button>';
    getSortDiv.innerHTML += '<button id="salary-sort" class="button sort-button salary-sort-button"> Сортировать по зарплате</button>';

    const getDateSortButton = document.getElementById('date-sort');


    getDateSortButton.addEventListener('dblclick', function() {
        const getTdDate = document.getElementsByClassName('td-date');
        for (let s = 0; s < getTdDate.length; s++) {
            let max = 0;
            let count = 0;
            for (let m = 0; m < getTdDate.length - s; m++) {
                const TdM = Number((new Date(((Array.from(getTdDate)[m]).innerHTML))).getTime());
                if (max <= TdM) {
                    max = Number((new Date(((Array.from(getTdDate)[m]).innerHTML))).getTime());
                    count = m;
                }
            }
            tbody.appendChild(getTdDate[count].parentElement);
        }
    });

    getDateSortButton.addEventListener('click', function() {
        const getTdDate = document.getElementsByClassName('td-date');
        for (let s = 0; s < getTdDate.length; s++) {
            let max = 0;
            let count = 0;
            for (let m = s; m < getTdDate.length; m++) {
                const TdM = Number((new Date(((Array.from(getTdDate)[m]).innerHTML))).getTime());
                if (max <= TdM) {
                    max = Number((new Date(((Array.from(getTdDate)[m]).innerHTML))).getTime());
                    count = m;
                }
            }
            tbody.prepend(getTdDate[count].parentElement);
        }
    });


    const getSalarySortButton = document.getElementById('salary-sort');
    getSalarySortButton.addEventListener('dblclick', function() {
        const getTdSalary = document.getElementsByClassName('td-salary');
        for (let s = 0; s < getTdSalary.length; s++) {
            let max = 0;
            let count = 0;
            for (let m = s; m < getTdSalary.length; m++) {
                const TdM = Number((getTdSalary[m]).innerText);
                if (max <= TdM) {
                    max = Number((getTdSalary[m]).innerText);
                    count = m;
                }
            }
            tbody.prepend(getTdSalary[count].parentElement);
        }
    });

    getSalarySortButton.addEventListener('click', function() {
        const getTdSalary = document.getElementsByClassName('td-salary');
        for (let s = 0; s < getTdSalary.length; s++) {
            let max = 0;
            let count = 0;
            for (let m = 0; m < getTdSalary.length - s; m++) {
                const TdM = Number((getTdSalary[m]).innerText);
                if (max <= TdM) {
                    max = Number((getTdSalary[m]).innerText);
                    count = m;
                }
            }
            tbody.appendChild(getTdSalary[count].parentElement);
        }
    });


});