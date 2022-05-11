// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    ru: {
        name: "Богдан Спицкий",
        year: "15.06.2001(20 лет)",
        from: "Украина (Днепр)",
        phone: "+380 (66) 342-52-74",

        description0: "Образование:",
        description1: "Особые навыки:",
        description2: "Рабочая деятельность:",
        description3: "Дальнейшая информация:",

        education_head0: "Дата зачисления/окончания учебного заведения",
        education_head1: "Образовательное учреждение",
        education0: "Школа СБУ \"Средняя общеобразовательная школа №28\" Днепр",
        education1: "РТУ МИРЭА (полное наименование: ФГБОУ ВО МИРЭА [Информационная безопасность]",

        skills0: "Знание комплексной защиты информации.",
        skills1: "Языки программирования Junior: C, C++, C#, Python.",
        skills2: "Система управления базами данных: SQLite, PostgreSQL.",
        skills3: "Язык гипертекстовой разметки (HTML) и шаблонизация Jinja",
        skills4: "Работа с фреймворком Django.",
        skills5: "Навыки обращения с компьютерными комплектующими (разборка, ремонт, замена)",
        skills6: "Навыки системного администратора (сервер Windows [Active Directory DHCP/DNS])",

        work_head0: "Период работы",
        work_head1: "Место работы",
        work_head2: "Должность",
        work0: "КИТ - Разработка игр",
        work0_: "Разработчик",
        work1: "МАН - Малая академия наук",
        work1_: "Руководитель проекта",
        work2: "Таврия-авто, Фитнес-центр АРТЛАЙФ Разработка сайтов. Консультирование сотрудников по работе с компьютерами. Обслуживание и ремонт оргтехники. Программное устранение неполадок.",
        work2_: "Фрилансер",
        work3: "Оптово-розничная компания спортивного питания и одежды KingStar. Разработаны и внедрены стратегии информационной безопасности. Оперативное решение технических проблем с ПК и сетью. Разрабатывал, внедрял и сопровождал новые ИТ-решения. Устранение последствий вирусной инфекции в кратчайшие сроки. Администрирование Windows Server.",
        work3_: "Заместитель директора",

        information0: "Коммуникабельный, исполнительный, пунктуальный, без вредных привычек, работа на результат. Быстро обучаюсь.",
        information1: "Желаемая работа: Помощник системного администратора или специалист по информационной безопасности. (Инфраструктура | Кибербезопасность)",
        
        send_button: "Отправить сообщение"
    },
    nl: {
        name: "Bogdan Spitsky",
        year: "15.06.2001(20 jaar oud)",
        from: "Oekraïne (Dnepr)",
        phone: "+380 (66) 342-52-74",

        description0: "Opleiding:",
        description1: "Speciale vaardigheden:",
        description2: "Werk activiteiten:",
        description3: "Verdere informatie:",

        education_head0: "Datum inschrijving/afstudeerinstelling",
        education_head1: "Onderwijsinstelling",
        education0: "School SBU \"Secundaire school nr. 28\" Dnipro",
        education1: "RTU MIREA (volledige naam: Federale Staatsbegrotingsinstelling voor hoger onderwijs MIREA [Informatiebeveiliging]",

        skills0: "Kennis van uitgebreide informatiebeveiliging.",
        skills1: "Programmeertalen op juniorniveau: C, C++, C#, Python.",
        skills2: "Databasebeheersysteem: SQLite, PostgreSQL.",
        skills3: "Hypertext-opmaaktaal (HTML) en sjablonen Jinja",
        skills4: "Werken met het Django-framework",
        skills5: "Vaardigheden in het omgaan met computercomponenten (demontage, reparatie, vervanging)",
        skills6: "Vaardigheden systeembeheerder (Windows-server [Active directory DHCP/DNS])",

        work_head0: "Werk periode",
        work_head1: "Werkplaats",
        work_head2: "Positie",
        work0: "KIT - Spelontwikkeling",
        work0_: "Ontwikkelaar",
        work1: "IAS - Kleine Academie van Wetenschappen",
        work1_: "Projectleider",
        work2: "Tavria-auto, ARTLIFE Fitnesscentrum Ontwikkeling van webpagina's. Adviseren van medewerkers bij het werken met computers. Onderhoud en reparatie van kantoorapparatuur. Softwareproblemen oplossen.",
        work2_: "Freelancer",
        work3: "Groot- en detailhandel in sportvoeding en kleding KingStar. Ontwikkelen en implementeren van informatiebeveiliging strategieën. Snel technische pc- en netwerkproblemen opgelost. Nieuwe IT-oplossingen ontworpen, geïmplementeerd en onderhouden. Elimineerde de effecten van een virusinfectie in de kortst mogelijke tijd. Beheer van Windows-server.",
        work3_: "Adjunct-directeur",

        information0: "Communicatief, uitvoerend, punctueel, zonder slechte gewoontes, werken aan resultaat. Snelle leerling.",
        information1: "Gewenste functie: Assistent systeembeheerder of informatiebeveiligingsspecialist. (Infrastructuur | Cyberbeveiliging)",
        
        send_button: "Stuur een bericht"

    }
};

// Check if a hash value exists in the URL
if (window.location.hash) {

    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#ru") {
        F_name.textContent =
            language.ru.name;
        years.textContent =
            language.ru.year;
        from.textContent =
            language.ru.from;
        phone.textContent =
            language.ru.phone;

        description0.textContent =
            language.ru.description0;
        description1.textContent =
            language.ru.description1;
        description2.textContent =
            language.ru.description2;
        description3.textContent =
            language.ru.description3;

        education_head0.textContent =
            language.ru.education_head0;
        education_head0.textContent =
            language.ru.education_head1;
        education0.textContent =
            language.ru.education0;
        education1.textContent =
            language.ru.education1;

        skills0.textContent =
            language.ru.skills0;
        skills1.textContent =
            language.ru.skills1;
        skills2.textContent =
            language.ru.skills2;
        skills3.textContent =
            language.ru.skills3;
        skills4.textContent =
            language.ru.skills4;
        skills5.textContent =
            language.ru.skills5;
        skills6.textContent =
            language.ru.skills6;

        work_head0.textContent =
            language.ru.work_head0;
        work_head1.textContent =
            language.ru.work_head1;
        work_head2.textContent =
            language.ru.work_head2;
        work0.textContent =
            language.ru.work0;
        work0_.textContent =
            language.ru.work0_;
        work1.textContent =
            language.ru.work1;
        work1_.textContent =
            language.ru.work1_;
        work2.textContent =
            language.ru.work2;
        work2_.textContent =
            language.ru.work2_;
        work3.textContent =
            language.ru.work3;
        work3_.textContent =
            language.ru.work3_;

        information0.textContent =
            language.ru.information0;
        information1.textContent =
            language.ru.information1;

    }
    else if (window.location.hash == "#nl") {
        F_name.textContent =
            language.nl.name;
        years.textContent =
            language.nl.year;
        from.textContent =
            language.nl.from;
        phone.textContent =
            language.nl.phone;

        description0.textContent =
            language.nl.description0;
        description1.textContent =
            language.nl.description1;
        description2.textContent =
            language.nl.description2;
        description3.textContent =
            language.nl.description3;

        education_head0.textContent =
            language.nl.education_head0;
        education_head0.textContent =
            language.nl.education_head1;
        education0.textContent =
            language.nl.education0;
        education1.textContent =
            language.nl.education1;

        skills0.textContent =
            language.nl.skills0;
        skills1.textContent =
            language.nl.skills1;
        skills2.textContent =
            language.nl.skills2;
        skills3.textContent =
            language.nl.skills3;
        skills4.textContent =
            language.nl.skills4;
        skills5.textContent =
            language.nl.skills5;
        skills6.textContent =
            language.nl.skills6;

        work_head0.textContent =
            language.nl.work_head0;
        work_head1.textContent =
            language.nl.work_head1;
        work_head2.textContent =
            language.nl.work_head2;
        work0.textContent =
            language.nl.work0;
        work0_.textContent =
            language.nl.work0_;
        work1.textContent =
            language.nl.work1;
        work1_.textContent =
            language.nl.work1_;
        work2.textContent =
            language.nl.work2;
        work2_.textContent =
            language.nl.work2_;
        work3.textContent =
            language.nl.work3;
        work3_.textContent =
            language.nl.work3_;

        information0.textContent =
            language.nl.information0;
        information1.textContent =
            language.nl.information1;
    }

}


