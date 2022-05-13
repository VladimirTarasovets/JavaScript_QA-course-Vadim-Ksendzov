const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  


/* 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах. */

const getDeptartments = function (companies) {
  companies.forEach((company) => {
    let depts = []; // создаем новый массив для сортировки
    let count = 0; // создаем счетчик для подсчета сотрудников на предприятии
    depts.push(company.name); // добавляем в новый массив название Предприятия и Отдела
    if (company.departments) { // если есть departments то
      company.departments.forEach((dept) => { // проходим по массиву departments
        count += +dept.employees_count; // находим количество сотрудников и суммируем по всему предприятию
        if (dept.employees_count) {
          depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`);
        } else depts.push(`- ${dept.name} (нет сотрудников)`);
      });

      if (count) {
        depts[0] += ` (${count} ${employeesCountHelper(count)})`;
        console.log(depts[0])
      } else depts[0] += ` (нет сотрудников)`;
    }
    console.log(depts.join(`\n\ `));
  });
};
getDeptartments(enterprises);