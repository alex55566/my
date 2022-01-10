document.addEventListener("DOMContentLoaded", () => {

    let incArrStd = [

        {
            FirstName: 'Вася',
            LastName: 'Иванов',
            MiddleName: 'Иванович',
            dateOfBirth: new Date('1990-04-21'),
            yearStartEducation: 2017,
            department: 'исторический',
        },

        {
            FirstName: 'Вася',
            LastName: 'Иванов',
            MiddleName: 'Петрович',
            dateOfBirth: new Date('1988-03-23'),
            yearStartEducation: 2005,
            department: 'геологический',
        },

        {
            FirstName: 'Вася',
            LastName: 'Васильев',
            MiddleName: 'Петрович',
            dateOfBirth: new Date('1992-11-12'),
            yearStartEducation: 2011,
            department: 'экономический',
        },

        {
            FirstName: 'Петр',
            LastName: 'Мороков',
            MiddleName: 'Александрович',
            dateOfBirth: new Date('1994-01-02'),
            yearStartEducation: 2011,
            department: 'пмм',
        }
    ]

    console.log(incArrStd);

    body = document.body;
    body.classList.add('container');

    const bodyTotal = document.createElement('div');
    bodyTotal.classList.add('body_total');
    body.append(bodyTotal);

    const filtParent = document.createElement('div');
    filtParent.classList.add('filter_parent');
    bodyTotal.append(filtParent);

    const formInput = document.createElement('form');
    formInput.classList.add('form_input');
    filtParent.append(formInput);

    const bodyAddStud = document.createElement('div');
    bodyAddStud.classList.add('body_addstud');
    bodyTotal.append(bodyAddStud);

    let filtByName;
    let filtByDepat;
    let filtStartStudy;
    let filtEndStudy;
    let filtByNameTitle;
    let filtByDepatTitle;
    let filtStartStudyTitle;
    let filtEndStudyTitle;

    let arrFilt = [filtByName, filtByDepat, filtStartStudy, filtEndStudy];
    let arrFiltTitle = [filtByNameTitle, filtByDepatTitle, filtStartStudyTitle, filtEndStudyTitle];

    function createFilter(Filt, Title) {

        arrNameFilt = ['Фильтр по имени', 'Фильтр по факультету', 'Фильтр по году начала учебы', 'Фильтр по году окончания учебы'];
        arrClassFilt = ['filter_name', 'filter_depat', 'filter_started', 'filter_end'];

        for (i = 0; i < arrFilt.length; i++) {
            Filt[i] = document.createElement('input');
            Title[i] = document.createElement('h3');
            Filt[i].classList.add(arrClassFilt[i], 'filter');
            Title[i].classList.add('filter_header');
            Filt[i].type = 'text';
            Title[i].innerHTML = arrNameFilt[i];
            formInput.append(Title[i]);
            formInput.append(Filt[i]);
        }
        filtByName = Filt[0];
        filtByDepat = Filt[1];
        filtStartStudy = Filt[2];
        filtEndStudy = Filt[3];
        filtByNameTitle = Title[0]
        filtByDepatTitle = Title[1]
        filtStartStudyTitle = Title[2]
        filtEndStudyTitle = Title[3]

    }
    createFilter(arrFilt, arrFiltTitle)


    function createButton() {

        arrButtons = []

        let arrNamefilt = ['Сбросить сортировку и фильтры', 'Добавить студента']
        let arrSortfilt = ['del_filt', 'but_addstud']
        let arrParent = [filtParent, bodyAddStud]

        for (i = 0; i < arrNamefilt.length; i++) {
            arrButtons.push(document.createElement('button'));
            arrButtons[i].classList.add(arrSortfilt[i]);
            arrButtons[i].innerHTML = arrNamefilt[i];
            arrParent[i].append(arrButtons[i]);
        }
        return arrButtons
    }
    const buttons = createButton()

    const [deleteFiltSort, buttonAddStudent] = buttons;

    buttonAddStudent.addEventListener('click', () => {

        function createError() {

            arrErr = []

            let arrErrstyle = ['eror_msghide_birth', 'eror_msghide_startyear', 'finalcheck_namehide', 'finalcheck_dephide',
                'finalcheck_yearhide', 'finalcheck_yearhidecorr', 'finalcheck_yearhideed']
            let arrErrmess = ['Значение не соответствует диапазону', 'Значение не соответствует диапазону', 'Введите ФИО', 'Введите Факультет',
                'Введите год', 'Введите верный год', 'Введите год поступления']
            for (i = 0; i < arrErrstyle.length; i++) {
                arrErr.push(document.createElement('h4'));
                arrErr[i].classList.add(arrErrstyle[i]);
                arrErr[i].innerHTML = arrErrmess[i];
            }
            return arrErr
        }
        const err = createError()

        const [erorMsgBirth, erorMsgStartY, finCheckMsgName, finCheckMsgDep, finCheckMsgYear, finCheckMsgYearCorr, finCheckMsgYearEd] = err;

        buttonAddStudent.disabled = true;

        let inputParent = document.createElement('div');

        inputParent.classList.add('input_parent');
        inputParent.classList.add('form-group');

        regLetter = /[0-9]/g;

        function checkValue() {

            if (this.value.match(regLetter)) {
                this.value = this.value.replace(regLetter, '');
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        }

        function createInput() {

            inputName = []

            inputPlacehold = ["Имя", "Фамилия", "Отчество"]

            for (i = 0; i < inputPlacehold.length; i++) {
                inputName.push(document.createElement('input'));
                inputName[i].type = 'text';
                inputName[i].placeholder = inputPlacehold[i];
                inputName[i].classList.add('form-control');
                inputName[i].addEventListener('input', checkValue);
            }
            return inputName
        }
        const inputs = createInput()

        const [inputFirstName, inputLastName, inputMiddleName] = inputs;

        let inputDateOfBirth = document.createElement('input');

        inputDateOfBirth.type = 'text';
        inputDateOfBirth.placeholder = "Дата рождения";
        inputDateOfBirth.classList.add('form-control');
        inputDateOfBirth.min = '1900-01-01';
        inputDateOfBirth.max = '2021-08-06';

        inputDateOfBirth.addEventListener('focus', () => {
            inputDateOfBirth.type = 'date';
        })

        inputDateOfBirth.addEventListener('blur', () => {
            inputDateOfBirth.type = 'text';
        })

        inputDateOfBirth.addEventListener('input', ({
            target
        }) => {

            const value = new Date(target.value);
            const min = new Date(inputDateOfBirth.min);
            const max = new Date(inputDateOfBirth.max);

            if (min > value) {
                inputDateOfBirth.classList.add('is-invalid');
                erorMsgBirth.classList.add('eror_msgshow_birth');
            } else if (max < value) {
                inputDateOfBirth.classList.add('is-invalid');
                erorMsgBirth.classList.add('eror_msgshow_birth');
            } else {
                inputDateOfBirth.classList.remove('is-invalid');
                inputDateOfBirth.classList.add('is-valid');
                erorMsgBirth.classList.remove('eror_msgshow_birth');
                erorMsgBirth.classList.add('eror_hide_birth');
            }
        })

        let inputStartEduc = document.createElement('input');

        inputStartEduc.type = 'number';
        inputStartEduc.placeholder = "Дата поступления";
        inputStartEduc.classList.add('form-control');

        inputStartEduc.addEventListener('input', ({
            target
        }) => {

            const value = target.value;
            const MINCHECKYEAR = 2000;
            const MAXCHECKYEAR = 2021;

            if (MINCHECKYEAR > value) {
                erorMsgStartY.classList.add('eror_msgshow_startyear');
                inputStartEduc.classList.add('is-invalid');
            } else if (MAXCHECKYEAR < value) {
                erorMsgStartY.classList.add('eror_msgshow_startyear');
                inputStartEduc.classList.add('is-invalid');
            } else {
                erorMsgStartY.classList.remove('eror_msgshow_startyear');
                inputStartEduc.classList.remove('is-invalid');
                erorMsgStartY.classList.add('eror_msghide_startyear');
                inputStartEduc.classList.add('is-valid');
            }
        })

        let inputDepartament = document.createElement('input');

        inputDepartament.type = 'text';
        inputDepartament.placeholder = "Факультет";
        inputDepartament.classList.add('form-control');
        inputDepartament.addEventListener('input', checkValue);

        let buttonAddFormInArr = document.createElement('button');
        buttonAddFormInArr.classList.add('array_addstud');
        buttonAddFormInArr.innerHTML = 'Внести студента в таблицу';

        bodyAddStud.append(inputParent);

        let arrToParent = [inputFirstName, inputLastName, inputMiddleName, inputDateOfBirth, erorMsgBirth, inputStartEduc, erorMsgStartY,
            inputDepartament, buttonAddFormInArr, finCheckMsgName, finCheckMsgDep, finCheckMsgYear, finCheckMsgYearCorr, finCheckMsgYearEd]

        for (let i = 0; i < arrToParent.length; ++i) {
            inputParent.append(arrToParent[i])
        }

        buttonAddFormInArr.addEventListener('click', (e) => {
            e.preventDefault(e);
            if (checkInputs()) {
                let newStudent = {
                    FirstName: inputFirstName.value,
                    LastName: inputLastName.value,
                    MiddleName: inputMiddleName.value,
                    dateOfBirth: new Date(inputDateOfBirth.value),
                    yearStartEducation: Number(inputStartEduc.value),
                    department: inputDepartament.value,
                }
                incArrStd.push(newStudent);
                console.log(incArrStd);
                inputParent.remove();
                buttonAddStudent.disabled = false;
            }
            incArrForTable();
            document.querySelectorAll(".infotable").forEach(e => e.parentNode.removeChild(e));
            tablefun(result);
            console.log(result);
            sort();
            filter();
        })

        function checkInputs() {
            const inputFirstNameValue = inputFirstName.value.trim();
            const inputLastNameValue = inputLastName.value.trim();
            const inputMiddleNameValue = inputMiddleName.value.trim();
            const inputDateOfBirthValue = inputDateOfBirth.value.trim();
            const inputYearStartEducationValue = inputStartEduc.value.trim();
            const inputDepartamentValue = inputDepartament.value.trim();

            const MINCHECKYEAR = 2000;
            const MAXCHECKYEAR = 2021;

            if (inputFirstNameValue === '' || inputLastNameValue === '' || inputMiddleNameValue === '') {
                finCheckMsgName.classList.add('finalcheck_nameshow');
                return false;
            } else if (inputDepartamentValue === '') {
                finCheckMsgName.classList.remove('finalcheck_nameshow');
                finCheckMsgDep.classList.add('finalcheck_depshow');
                return false;
            } else if (inputDateOfBirthValue === '') {
                finCheckMsgDep.classList.remove('finalcheck_depshow');
                finCheckMsgYear.classList.add('finalcheck_yearshow');
                return false;
            } else if (new Date(inputDateOfBirth.min) > new Date(inputDateOfBirthValue) || new Date(inputDateOfBirth.max) < new Date(inputDateOfBirthValue)) {
                finCheckMsgYear.classList.remove('finalcheck_yearshow');
                finCheckMsgYearCorr.classList.add('finalcheck_yearshowcorr');
                return false;
            } else if (inputYearStartEducationValue === '' || Number(inputYearStartEducationValue) < MINCHECKYEAR || Number(inputYearStartEducationValue) > MAXCHECKYEAR) {
                finCheckMsgYear.classList.remove('finalcheck_yearshow');
                finCheckMsgYearCorr.classList.remove('finalcheck_yearshowcorr');
                finCheckMsgYearEd.classList.add('finalcheck_yearshowed');
                return false;
            } else {
                return true;
            }
        }
    })

    function ArrStdForTableNames() {
        let incArrStdForTableNam = [];
        for (let i = 0; i < incArrStd.length; i++) {
            let namesurname = (incArrStd[i].LastName + ' ' + incArrStd[i].FirstName + ' ' + incArrStd[i].MiddleName);
            incArrStdForTableNam.push(namesurname);
        }
        return incArrStdForTableNam;
    }

    function ArrStdForTableDepartament() {
        let incArrStdForTableDep = [];
        for (let i = 0; i < incArrStd.length; i++) {
            let departament = (incArrStd[i].department);
            incArrStdForTableDep.push(departament);
        }
        return incArrStdForTableDep;
    }

    function ArrStdForTableDateofBirth() {
        let incArrStdForTableDateOfBirth = [];
        for (let i = 0; i < incArrStd.length; i++) {
            let dateOfBirthAndAge = (incArrStd[i].dateOfBirth);
            let ageseconds = new Date().getTime() - dateOfBirthAndAge.getTime();
            let age = Math.floor(ageseconds / (1000 * 60 * 60 * 24 * 365.25));
            let month = dateOfBirthAndAge.getUTCMonth() + 1;
            let day = dateOfBirthAndAge.getUTCDate();
            let year = dateOfBirthAndAge.getUTCFullYear();
            newdate = day + "." + month + "." + year + " " + `(${age} лет)`;
            let temp = newdate.split('(');
            let res = temp[0];
            let finrez = res.split('.');
            finrez = new Date(finrez[2], finrez[1] - 1, finrez[0]);
            incArrStdForTableDateOfBirth.push(newdate);
        }
        return incArrStdForTableDateOfBirth;
    }

    function ArrStudentsForTableEduc() {
        let incArrStdForTableEduc = [];
        for (let i = 0; i < incArrStd.length; i++) {
            let yearstartEducation = (incArrStd[i].yearStartEducation);
            let yearendEducation = yearstartEducation + 4;
            let todayyear = new Date().getUTCFullYear();
            let todaymonth = new Date().getUTCMonth() + 1;
            let course = todayyear - yearstartEducation;
            const NUMCHECKMONTH = 9;
            let rangeEducation;
            if (yearendEducation < todayyear) {
                rangeEducation = yearstartEducation.toString() + '-' + yearendEducation.toString() + '(закончил)'
            } else if ((yearendEducation === todayyear) && (Number(todaymonth) > NUMCHECKMONTH)) {
                rangeEducation = yearstartEducation.toString() + '-' + yearendEducation.toString() + '(закончил)'
            } else if ((yearendEducation === todayyear) && (Number(todaymonth) < NUMCHECKMONTH)) {
                rangeEducation = yearstartEducation.toString() + '-' + yearendEducation.toString() + `(${course} курс)`
            } else if (yearendEducation > todayyear) {
                rangeEducation = yearstartEducation.toString() + '-' + yearendEducation.toString() + `(${course} курс)`
            }
            incArrStdForTableEduc.push(rangeEducation);
        }
        return incArrStdForTableEduc;
    }

    let result;
    let table;
    let newresult;

    function incArrForTable() {
        let arrKeys = ['name', 'department', 'dateBirthAge', 'studyYears'];
        let arrName = ArrStdForTableNames();
        let arrDepartament = ArrStdForTableDepartament();
        let arrDateOfBirthAndAge = ArrStdForTableDateofBirth();
        let arrRangeEductaion = ArrStudentsForTableEduc();

        result = arrName.map((f, i) => {
            return {
                [arrKeys[0]]: f,
                [arrKeys[1]]: arrDepartament[i],
                [arrKeys[2]]: arrDateOfBirthAndAge[i],
                [arrKeys[3]]: arrRangeEductaion[i]
            }
        });

        newresult = arrName.map((f, i) => {
            return {
                [arrKeys[0]]: f,
                [arrKeys[1]]: arrDepartament[i],
                [arrKeys[2]]: arrDateOfBirthAndAge[i],
                [arrKeys[3]]: arrRangeEductaion[i]
            }
        });
        console.log(result);
    }

    incArrForTable()

    function tabletitle() {
        let header = ['ФИО студента', 'Факультет', 'Дата рождения и возраст', 'Годы обучения и номер курса'];
        table = document.createElement('table');
        table.classList.add('table', 'table-hover', 'table-bordered');
        document.body.append(table);
        let rowHeader = table.insertRow();
        for (let i = 0; i < header.length; i++) {
            let cell = rowHeader.insertCell();
            cell.innerText = header[i];
            cell.classList.add('header', 'table-dark');
        }

        let count = document.querySelectorAll('.header');
        for (let i = 0; i < count.length; i++) {
            count[i].classList.add(`header${i}`)
            count[i].id = `header${i}`
        }
    }
    tabletitle();

    function tablefun(n) {

        for (let i = 0; i < n.length; i++) {
            let row = table.insertRow();
            row.classList.add('infotable');
            for (let prop in n[i]) {
                let cell = row.insertCell();
                cell.innerText = n[i][prop];
                cell.classList.add('infotable')
            }
        }
    }

    tablefun(result);

    function sort() {
        let resultsort;
        const butsortname = document.getElementById('header0');
        const butsortdep = document.getElementById('header1');
        const butsortage = document.getElementById('header2');
        const butsortstudyear = document.getElementById('header3');

        function butSort(prop) {
            document.querySelectorAll(".infotable").forEach(e => e.parentNode.removeChild(e));
            resultsort = newresult.sort((prev, next) => {
                if (prev[prop].trim() < next[prop].trim()) return -1;
                if (prev[prop].trim() < next[prop].trim()) return 1;
            })
            tablefun(resultsort);
        }

        butsortname.addEventListener('click', (e) => {
            e.preventDefault(e);
            butSort('name')
        })

        butsortdep.addEventListener('click', (e) => {
            e.preventDefault(e)
            butSort('department')
        })

        butsortage.addEventListener('click', (e) => {
            e.preventDefault(e);
            document.querySelectorAll(".infotable").forEach(e => e.parentNode.removeChild(e));
            resultsort = newresult.sort((prev, next) => {
                let tempprev = prev.dateBirthAge.trim().split('(');
                let tempnext = next.dateBirthAge.trim().split('(');
                let res1 = tempprev[0];
                let res2 = tempnext[0];
                let date1 = res1.split('.');
                date1 = new Date(date1[2], date1[1] - 1, date1[0]);
                let date2 = res2.split('.');
                date2 = new Date(date2[2], date2[1] - 1, date2[0]);
                if (date1 > date2) return -1;
                if (date1 > date2) return 1;

            })
            tablefun(resultsort);
        })

        butsortstudyear.addEventListener('click', (e) => {
            e.preventDefault(e);
            butSort('studyYears')
        })
    }
    sort();

    function deletefiltsort() {
        deleteFiltSort.addEventListener('click', (e) => {
            e.preventDefault(e);
            document.querySelectorAll(".infotable").forEach(e => e.parentNode.removeChild(e));
            formInput.reset()
            resultsort = result;
            tablefun(resultsort);
        })
    }
    deletefiltsort();

    function filter() {
        let resultfilter = [];
        let valuename;
        let valuedepat;
        let valuestartstudy;
        let valueendstudy;

        arrFilt.forEach((el) => {
            el.addEventListener('input', () => {
                resultfilter = []

                valuename = filtByName.value;
                valuedepat = filtByName.value;
                valuestartstudy = filtStartStudy.value;
                valueendstudy = filtEndStudy.value;

                if (valuestartstudy === '' && valueendstudy === '')

                    resultfilter = newresult.filter(n => n.name.includes(valuename) && n.department.includes(valuedepat));

                if (valuestartstudy !== '')

                    resultfilter = newresult.filter(n => n.name.includes(valuename) && n.department.includes(valuedepat) &&
                        n.studyYears.substr(0, 4) === valuestartstudy);

                if (valueendstudy !== '')

                    resultfilter = newresult.filter(n => n.name.includes(valuename) && n.department.includes(valuedepat) &&
                        n.studyYears.substr(5, 4) === valueendstudy);

                if (valuestartstudy !== '' && valueendstudy !== '')

                    resultfilter = newresult.filter(n => n.name.includes(valuename) && n.department.includes(valuedepat) &&
                        n.studyYears.substr(0, 4) === valuestartstudy && n.studyYears.substr(5, 4) === valueendstudy);

                console.log(resultfilter);
                document.querySelectorAll(".infotable").forEach(e => e.parentNode.removeChild(e));
                tablefun(resultfilter);
            })
        })
    }
    filter();
})