
// import addRow from './js/_addRow';
// import showFillModal from './js//_showFillModal';
// import getDB from './js/_getDB';
// import render from './js/_render';
// import postData from './js/_postData';

window.addEventListener('DOMContentLoaded', () => {

    // Show modal for fill application
    const rowArr = [document.querySelector('.fill__body-block')],
          appArr = [];

    function showFillModal() {
        const startWrap = document.querySelector('.start__wrap'),
              fillModal = document.querySelector('.fill'),
              horizontalBlock = document.querySelector('.block_horizontal'),
              verticalBlock = document.querySelector('.block_vertical'),
              textNode = document.querySelector('.start__supply');
    
    
        startWrap.addEventListener('click', () => {
            fillModal.classList.toggle('fill_action');
            horizontalBlock.classList.toggle('block_horizontal_action');
            verticalBlock.classList.toggle('block_vertical_action');
            setTimeout (function() {
                fillModal.classList.toggle('fill_addblock');
            },500);
            if (textNode.textContent == 'Подать заявку') {
                textNode.textContent = 'Скрыть';
            } else {
                textNode.textContent = 'Подать заявку';
            }
    
        });
    }

    // Add row in fill modal

    function addRow() {
    
        const rowBlock = document.querySelector('.fill__body'),
              addBtn = document.querySelector('.add');
    
        addBtn.addEventListener('click', (e) => {
            const row = document.createElement('div'),
              number = document.createElement('div'),
              descr = document.createElement('div'),
              count = document.createElement('div'),
              department = document.createElement('div'),
              mehObject = document.createElement('div'),
              descrInput = document.createElement('input'),
              countInput = document.createElement('input'),
              departmentInput = document.createElement('input'),
              mehObjectInput = document.createElement('input');
    
              row.classList.add('fill__body-block');
              number.classList.add('fill__body-number');
              descr.classList.add('fill__body-descr');
              count.classList.add('fill__body-count');
              department.classList.add('fill__body-department');
              mehObject.classList.add('fill__body-object');
              descrInput.classList.add('fill__descr-input');
              countInput.classList.add('fill__count-input');
              departmentInput.classList.add('fill__department-input');
              mehObjectInput.classList.add('fill__object-input');
    
              number.textContent = rowArr.length + 1;
    
              descr.append(descrInput);
              count.append(countInput);
              department.append(departmentInput);
              mehObject.append(mehObjectInput);
              row.append(number);
              row.append(descr);
              row.append(count);
              row.append(department);
              row.append(mehObject);
    
              rowArr.push(row);
    
              rowBlock.append(row);
        });
    }


    // Get data base

    async function getDB() {
        let response;
        await fetch('http://a0784819.xsph.ru/db.json')
            .then(answer => answer.json())
            .then(json => Object.entries(json))
            .then(arr => response = arr);
    
        return response;
    }

    // Render function

    function render() {
        getDB('http://a0784819.xsph.ru/db.json')
            .then(response => response.forEach((item, i) => {
                if(!item[1].closeApplication) {
                    if (!item[1].GI && !item[1].closeApplication) {
                        const agreement = document.querySelector('.agreement');
                        const wrap = document.createElement('div');
                        wrap.classList.add('agreement__wrap');

                        const appNumber = document.createElement('div');
                        appNumber.classList.add('app__number');
                        appNumber.textContent = +item[0];
                        wrap.append(appNumber);
            
                        const header = document.createElement('div'),
                            numberHeader = document.createElement('div'),
                            descrHeader = document.createElement('div'),
                            countHeader = document.createElement('div'),
                            departmentHeader = document.createElement('div'),
                            objectHeader = document.createElement('div');
            
                        header.classList.add('agreement__header');
                        numberHeader.classList.add('agreement__header-number');
                        descrHeader.classList.add('agreement__header-descr');
                        countHeader.classList.add('agreement__header-count');
                        departmentHeader.classList.add('agreement__header-department');
                        objectHeader.classList.add('agreement__header-object');
            
                        numberHeader.textContent = '№';
                        descrHeader.textContent = 'Описание работ';
                        countHeader.textContent = 'Кол-во';
                        departmentHeader.textContent = 'Отдел';
                        objectHeader.textContent = 'Объект';
            
                        header.append(numberHeader, descrHeader, countHeader, departmentHeader, objectHeader);
                        wrap.append(header);
    
                        if (item[0] == 'mainIngeneer' || item[0] == 'mainMechanic' || item[0] == 'technicalHead' || item[0] == 'headMechanization') {
    
                        } else {
                            Object.entries(item[1].application).forEach((app, i) => {
                                const body = document.createElement('div'),
                                        numberBody = document.createElement('div'),
                                        descrBody = document.createElement('div'),
                                        countBody = document.createElement('div'),
                                        departmentBody = document.createElement('div'),
                                        objectBody = document.createElement('div');
        
                                body.classList.add('agreement__body');
                                numberBody.classList.add('agreement__body-number');
                                descrBody.classList.add('agreement__body-descr');
                                countBody.classList.add('agreement__body-count');
                                departmentBody.classList.add('agreement__body-department');
                                objectBody.classList.add('agreement__body-object');
                
                                numberBody.textContent = +app[0] + 1;
                                descrBody.textContent = app[1].descr;
                                countBody.textContent = app[1].count;
                                departmentBody.textContent = app[1].department;
                                objectBody.textContent = app[1].object;
                
                                body.append(numberBody, descrBody, countBody, departmentBody, objectBody);
                                wrap.append(body);
                            });
                            const confirmation = document.createElement('div');
            
                        const aligner = document.createElement('div'),
                            titleAligner = document.createElement('h3'),
                            alignerBlockZNM = document.createElement('div'),
                            alignerBlockGM = document.createElement('div'),
                            alignerBlockTO = document.createElement('div'),
                            alignerNameZNM = document.createElement('div'),
                            alignerNameGM = document.createElement('div'),
                            alignerNameTO = document.createElement('div'),
                            alignerCheckboxZNM = document.createElement('input'),
                            alignerCheckboxGM = document.createElement('input'),
                            alignerCheckboxTO = document.createElement('input'),
                            alignBtnZNM = document.createElement('button'),
                            alignBtnGM = document.createElement('button'),
                            alignBtnTO = document.createElement('button'),
                            alignerZNMImg = document.createElement('img'),
                            alignerGMImg = document.createElement('img'),
                            alignerTOImg = document.createElement('img');
            
                        const approver = document.createElement('div'),
                            titleApprover = document.createElement('h3'),
                            approverBlock = document.createElement('div'),
                            approverName = document.createElement('div'),
                            approverCheckbox = document.createElement('input'),
                            approverBtn = document.createElement('button');
            
                        
            
                        confirmation.classList.add('agreement__confirmation');
                        aligner.classList.add('agreement__confirmation-aligner');
                        titleAligner.classList.add('title');
                        alignerBlockZNM.classList.add('agreement__aligner-block');
                        alignerBlockGM.classList.add('agreement__aligner-block');
                        alignerBlockTO.classList.add('agreement__aligner-block');
                        alignerNameZNM.classList.add('agreement__aligner-name');
                        alignerNameGM.classList.add('agreement__aligner-name');
                        alignerNameTO.classList.add('agreement__aligner-name');
                        alignerCheckboxZNM.classList.add('agreement__aligner-input');
                        alignerCheckboxGM.classList.add('agreement__aligner-input');
                        alignerCheckboxTO.classList.add('agreement__aligner-input');
                        alignBtnZNM.classList.add('align__btn');
                        alignBtnGM.classList.add('align__btn');
                        alignBtnTO.classList.add('align__btn');
                        alignerZNMImg.classList.add('align__img');
                        alignerGMImg.classList.add('align__img');
                        alignerTOImg.classList.add('align__img');
                        approver.classList.add('agreement__confirmation-approver');
                        titleApprover.classList.add('title');
                        approverBlock.classList.add('agreement__approver-block');
                        approverName.classList.add('agreement__approver-name');
                        approverCheckbox.classList.add('agreement__approver-input');
                        approverBtn.classList.add('approve__btn');
            
                        approverCheckbox.type = 'checkbox';
            
                        titleApprover.textContent = 'Утверждено';
                        approverName.textContent = 'Главный инженер';
                        approverBtn.textContent = 'Утвердить';
            
                        alignerCheckboxZNM.type = 'checkbox';
                        alignerCheckboxGM.type = 'checkbox';
                        alignerCheckboxTO.type = 'checkbox';
            
                        titleAligner.textContent = 'Согласовано';
                        alignBtnZNM.textContent = 'Согласовать';
                        alignBtnGM.textContent = 'Согласовать';
                        alignBtnTO.textContent = 'Согласовать';
                        alignerNameZNM.textContent = 'Зам. нач. по механизации ВТПК';
                        alignerNameGM.textContent = 'Главный механик';
                        alignerNameTO.textContent = 'Начальник техотдела';
    
                        alignerZNMImg.src = './icons/9041708_check_icon.png';
                        alignerGMImg.src = './icons/9041708_check_icon.png';
                        alignerTOImg.src = './icons/9041708_check_icon.png';
    
                        if (item[1].TO) {
                            alignerBlockTO.append(alignerNameTO, alignerTOImg);
                        } else {
                            alignerBlockTO.append(alignerNameTO, alignerCheckboxTO, alignBtnTO);
                        };
    
                        if (item[1].ZNM) {
                            alignerBlockZNM.append(alignerNameZNM, alignerZNMImg);
                        } else {
                            alignerBlockZNM.append(alignerNameZNM, alignerCheckboxZNM, alignBtnZNM);
                        };
            
                        if (item[1].GM) {
                            alignerBlockGM.append(alignerNameGM, alignerGMImg);
                        } else {
                            alignerBlockGM.append(alignerNameGM, alignerCheckboxGM, alignBtnGM);
                        };
                        
                        aligner.append(titleAligner, alignerBlockZNM, alignerBlockGM, alignerBlockTO);
            
                        confirmation.append(aligner);
                        confirmation.append(approver);
            
                        approverBlock.append(approverName, approverCheckbox, approverBtn);
                        approver.append(titleApprover, approverBlock);
            
                        const dateWrap = document.createElement('div'),
                            supplyBlock = document.createElement('div'),
                            approveDateBlock = document.createElement('div'),
                            supplyName = document.createElement('div'),
                            supplyValue = document.createElement('div'),
                            approveDateName = document.createElement('div'),
                            approveDateValue = document.createElement('div');
            
                        dateWrap.classList.add('agreement__date');
                        supplyBlock.classList.add('agreement__date-block');
                        approveDateBlock.classList.add('agreement__date-block');
                        supplyName.classList.add('agreement__date-name');
                        approveDateName.classList.add('agreement__date-name');
                        supplyValue.classList.add('agreement__date-value');
                        approveDateValue.classList.add('agreement__date-value');
            
                        supplyName.textContent = 'Дата подачи:';
                        supplyValue.textContent = item[1].dateSupply;
                        approveDateName.textContent = 'Дата утверждения:';
                        approveDateValue.textContent = item[1].dateApprove;
            
                        supplyBlock.append(supplyName, supplyValue);
                        approveDateBlock.append(approveDateName, approveDateValue);
                        dateWrap.append(supplyBlock, approveDateBlock);
            
            
                        wrap.append(confirmation);
                        wrap.append(dateWrap);
                        appArr.push(wrap);
                        agreement.append(wrap);
                            }
                        }
            
                    
    
    
    
                    if (item[1].GI && !item[1].closeApplication) {
                        const work = document.querySelector('.work');
                        const wrapWork = document.createElement('div');
    
                        wrapWork.classList.add('wrap__work');

                        const appNumber = document.createElement('div');
                        appNumber.classList.add('app__number');
                        appNumber.textContent = +item[0];
                        wrapWork.append(appNumber);
    
                        const headerWork = document.createElement('div'),
                            numberHeaderWork = document.createElement('div'),
                            descrHeaderWork = document.createElement('div'),
                            countHeaderWork = document.createElement('div'),
                            departmentHeaderWork = document.createElement('div'),
                            objectHeaderWork = document.createElement('div');
            
                        headerWork.classList.add('agreement__header');
                        numberHeaderWork.classList.add('agreement__header-number');
                        descrHeaderWork.classList.add('agreement__header-descr');
                        countHeaderWork.classList.add('agreement__header-count');
                        departmentHeaderWork.classList.add('agreement__header-department');
                        objectHeaderWork.classList.add('agreement__header-object');
            
                        numberHeaderWork.textContent = '№';
                        descrHeaderWork.textContent = 'Описание работ';
                        countHeaderWork.textContent = 'Кол-во';
                        departmentHeaderWork.textContent = 'Отдел';
                        objectHeaderWork.textContent = 'Объект';
            
                        headerWork.append(numberHeaderWork, descrHeaderWork, countHeaderWork, departmentHeaderWork, objectHeaderWork);
                        wrapWork.append(headerWork);
    
                        Object.entries(item[1].application).forEach((app, i) => {
                            const body = document.createElement('div'),
                                    numberBody = document.createElement('div'),
                                    descrBody = document.createElement('div'),
                                    countBody = document.createElement('div'),
                                    departmentBody = document.createElement('div'),
                                    objectBody = document.createElement('div');
        
                            body.classList.add('agreement__body');
                            numberBody.classList.add('agreement__body-number');
                            descrBody.classList.add('agreement__body-descr');
                            countBody.classList.add('agreement__body-count');
                            departmentBody.classList.add('agreement__body-department');
                            objectBody.classList.add('agreement__body-object');
            
                            numberBody.textContent = +app[0] + 1;
                            descrBody.textContent = app[1].descr;
                            countBody.textContent = app[1].count;
                            departmentBody.textContent = app[1].department;
                            objectBody.textContent = app[1].object;
            
                            body.append(numberBody, descrBody, countBody, departmentBody, objectBody);
                            wrapWork.append(body);
    
                            
                        });
    
                        const dateWrap = document.createElement('div'),
                            supplyBlock = document.createElement('div'),
                            approveDateBlock = document.createElement('div'),
                            supplyName = document.createElement('div'),
                            supplyValue = document.createElement('div'),
                            approveDateName = document.createElement('div'),
                            approveDateValue = document.createElement('div');
            
                            dateWrap.classList.add('agreement__date');
                            supplyBlock.classList.add('agreement__date-block');
                            approveDateBlock.classList.add('agreement__date-block');
                            supplyName.classList.add('agreement__date-name');
                            approveDateName.classList.add('agreement__date-name');
                            supplyValue.classList.add('agreement__date-value');
                            approveDateValue.classList.add('agreement__date-value');
                
                            supplyName.textContent = 'Дата подачи:';
                            supplyValue.textContent = item[1].dateSupply;
                            approveDateName.textContent = 'Дата утверждения:';
                            approveDateValue.textContent = item[1].dateApprove;
                
                            supplyBlock.append(supplyName, supplyValue);
                            approveDateBlock.append(approveDateName, approveDateValue);
                            dateWrap.append(supplyBlock, approveDateBlock);
    
                        const closeWork = document.createElement('div'),
                              closeWorkBtn = document.createElement('button');
                        
                            closeWork.classList.add('agreement__close-work');
                            closeWorkBtn.classList.add('agreement__close-btn');
    
                            closeWorkBtn.textContent = 'Закрыть заявку';
    
                            closeWork.append(closeWorkBtn);
    
                        wrapWork.append(dateWrap);
                        wrapWork.append(closeWork);    
                        work.append(wrapWork);
                        appArr.push(wrapWork);
                    };
                } else {
                    const closeApp = document.querySelector('.closeapp');

                    const wrap = document.createElement('div');
                          wrap.classList.add('agreement__wrap');

                        const appNumber = document.createElement('div');
                        appNumber.classList.add('app__number');
                        appNumber.textContent = +item[0];
                        closeApp.append(appNumber);


            
                        const header = document.createElement('div'),
                            numberHeader = document.createElement('div'),
                            descrHeader = document.createElement('div'),
                            countHeader = document.createElement('div'),
                            departmentHeader = document.createElement('div'),
                            objectHeader = document.createElement('div');
            
                        header.classList.add('agreement__header');
                        numberHeader.classList.add('agreement__header-number');
                        descrHeader.classList.add('agreement__header-descr');
                        countHeader.classList.add('agreement__header-count');
                        departmentHeader.classList.add('agreement__header-department');
                        objectHeader.classList.add('agreement__header-object');
            
                        numberHeader.textContent = '№';
                        descrHeader.textContent = 'Описание работ';
                        countHeader.textContent = 'Кол-во';
                        departmentHeader.textContent = 'Отдел';
                        objectHeader.textContent = 'Объект';
            
                        header.append(numberHeader, descrHeader, countHeader, departmentHeader, objectHeader);
                        closeApp.append(header);

                        Object.entries(item[1].application).forEach((app, i) => {
                            const body = document.createElement('div'),
                                    numberBody = document.createElement('div'),
                                    descrBody = document.createElement('div'),
                                    countBody = document.createElement('div'),
                                    departmentBody = document.createElement('div'),
                                    objectBody = document.createElement('div');
    
                            body.classList.add('agreement__body');
                            numberBody.classList.add('agreement__body-number');
                            descrBody.classList.add('agreement__body-descr');
                            countBody.classList.add('agreement__body-count');
                            departmentBody.classList.add('agreement__body-department');
                            objectBody.classList.add('agreement__body-object');
            
                            numberBody.textContent = +app[0] + 1;
                            descrBody.textContent = app[1].descr;
                            countBody.textContent = app[1].count;
                            departmentBody.textContent = app[1].department;
                            objectBody.textContent = app[1].object;
            
                            body.append(numberBody, descrBody, countBody, departmentBody, objectBody);
                            closeApp.append(body);
                            appArr.push(closeApp);
                        });

                        

                };
                    
                
                
            }));
    }

    // Post data in data base

    function postData() {
        const applyBtn = document.querySelector('.apply');
        let arr;
        let subArr;
        let application = {};
        let obj = {};
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        applyBtn.addEventListener('click', (e) => {
            getDB('http://a0784819.xsph.ru/db.json')
                .then(response => arr = response);

            setTimeout(function() {
                console.log(arr[0]);
            }, 2000);
            rowArr.forEach((item, i) => {
                application[i] = {
                    'descr': item.querySelector('.fill__descr-input').value,
                    'count': item.querySelector('.fill__count-input').value,
                    'department': item.querySelector('.fill__department-input').value,
                    'object': item.querySelector('.fill__object-input').value,
                    'note': {},
                };
            });

            
            setTimeout(function() {
                arr.forEach(item => {
                    console.log(item);
                });
                console.log(arr);
            }, 3000);
            
            obj.application = application;
            obj.GI = false;
            obj.TO = false;
            obj.ZNM = false;
            obj.GM = false;
            obj.dateSupply = `${day}.${month}.${year}`;
            obj.dateApprove = 'XX.XX.XXXX';
            obj.closeApplication = false;
            setTimeout(function() {
                subArr = [`${arr.length}`, obj];
                arr.push(subArr);
                fetch('http://a0784819.xsph.ru/db.json', {
                    method: 'POST',
                    body: JSON.stringify(Object.fromEntries(arr)),
                    headers: {'Content-type' : 'application/json'}
                });
                location.reload();
            }, 2000);
        });
    }

    // Show confirm and approve buttons

    function showConfirmBtn() {
        const agreementWrap = document.querySelector('.agreement');

        agreementWrap.addEventListener('click', (e) => {
            setTimeout(function() {
                confirmCheckboxes = agreementWrap.querySelectorAll('.agreement__aligner-input');
                confirmBtns = agreementWrap.querySelectorAll('.align__btn'),
                approveBtns = agreementWrap.querySelectorAll('.approve__btn'),
                approveCheckboxes = agreementWrap.querySelectorAll('.agreement__approver-input');
                
                confirmCheckboxes.forEach((item, i) => {
                    if (e.target == item) {
                        confirmBtns[i].classList.toggle('align__btn_active');
                    }
                });
                approveCheckboxes.forEach((item, i) => {
                    if (e.target == item) {
                        approveBtns[i].classList.toggle('approve__btn_active');
                    }
                });

            }, 500);
        });      
    }

    // Post in data base confirm and approve information

    function postConfirmInf() {
        setTimeout(function() {
            const agreementWrap = document.querySelector('.agreement'),
                  confirmBtns = agreementWrap.querySelectorAll('.align__btn'),
                  approveBtns = agreementWrap.querySelectorAll('.approve__btn');
            
            let arr;
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            if (day < 10) {
                day = '0' + day;
            }
            if (month < 10) {
                month = '0' + month;
            }

            agreementWrap.addEventListener('click', (e) => {
                confirmBtns.forEach(item => {
                    if (e.target == item) {
                        appArr.forEach((elem, i) => {
                            if (elem == item.parentNode.parentNode.parentNode.parentNode) {
                                getDB('http://a0784819.xsph.ru/db.json')
                                    .then(response => arr = response);
                                    setTimeout(function() {
                                        arr.forEach(app => {
                                            if (app[0] == `${i + 4}`) {
                                                if (e.target.previousElementSibling.previousElementSibling.textContent =='Зам. нач. по механизации ВТПК') {
                                                    app[1].ZNM = true;
                                                }
                                                if (e.target.previousElementSibling.previousElementSibling.textContent =='Главный механик') {
                                                    app[1].GM = true;
                                                }
                                                if (e.target.previousElementSibling.previousElementSibling.textContent =='Начальник техотдела') {
                                                    app[1].TO = true;
                                                }
                                            }
                                        });
                                        fetch('http://a0784819.xsph.ru/db.json', {
                                            method: 'POST',
                                            body: JSON.stringify(Object.fromEntries(arr)),
                                            headers: {'Content-type' : 'application/json'}
                                        });
                                        location.reload();
                                    }, 400);
                            }
                        });
                    }
                })
                approveBtns.forEach(item => {
                    if (e.target == item) {
                        appArr.forEach((elem, i) => {
                            if (elem == item.parentNode.parentNode.parentNode.parentNode) {
                                getDB('http://a0784819.xsph.ru/db.json')
                                    .then(response => arr = response);
                                setTimeout(function() {
                                    arr.forEach(app => {
                                        if (app[0] == `${i + 4}`) {
                                            app[1].GI = true;
                                            app[1].dateApprove = `${day}.${month}.${year}`;
                                        }
                                        console.log(app);
                                    });
                                    fetch('http://a0784819.xsph.ru/db.json', {
                                        method: 'POST',
                                        body: JSON.stringify(Object.fromEntries(arr)),
                                        headers: {'Content-type' : 'application/json'}
                                    });
                                    location.reload();
                                }, 400)
                            }
                        })
                    }
                })
            });
        }, 400);
    }

    function enterUser() {
        let login = document.querySelector('#login'),
            password = document.querySelector('#password'),
            btn = document.querySelector('#enter'),
            user = document.querySelector('.user__block'),
            userName = document.querySelector('.user__name'),
            enterWrap = document.querySelector('.enter'),
            start = document.querySelector('.start'),
            agreement = document.querySelector('.agreement'),
            work = document.querySelector('.work'),
            closeApp = document.querySelector('.closeapp'),
            nav = document.querySelector('.nav');
            


            btn.addEventListener('click', () => {
                
                if (login.value == 'kolmykovva' && password.value == 'kolmykovva') {
                    userName.textContent = 'Колмыков В.А.';
                    user.style.display = 'block';
                    enterWrap.style.display = 'none';
                    start.style.display = 'block';
                    agreement.style.display = 'block';
                    work.style.display = 'block';
                    closeApp.style.display = 'block';
                    nav.style.display = 'flex';
                };
                if (login.value == 'kovalevmv' && password.value == 'kovalevmv') {
                    userName.textContent = 'Ковалев М.В.';
                    user.style.display = 'block';
                    enterWrap.style.display = 'none';
                    start.style.display = 'block';
                    agreement.style.display = 'block';
                    work.style.display = 'block';
                    closeApp.style.display = 'block';
                    nav.style.display = 'flex';
                };
                if (login.value == 'sapunovev' && password.value == 'sapunovev') {
                    userName.textContent = 'Сапунов Е.В.';
                    user.style.display = 'block';
                    enterWrap.style.display = 'none';
                    start.style.display = 'block';
                    agreement.style.display = 'block';
                    work.style.display = 'block';
                    closeApp.style.display = 'block';
                    nav.style.display = 'flex';
                };
                if (login.value == 'ponikarovvi' && password.value == 'ponikarovvi') {
                    userName.textContent = 'Поникаров В.И.';
                    user.style.display = 'block';
                    enterWrap.style.display = 'none';
                    start.style.display = 'block';
                    agreement.style.display = 'block';
                    work.style.display = 'block';
                    closeApp.style.display = 'block';
                    nav.style.display = 'flex';
                };
                localStorage.setItem('login', login.value);
                localStorage.setItem('password', password.value);
                location.reload();
            });
    }

    function exitUser() {
        const btn = document.querySelector('.user__btn'),
              userBlock = document.querySelector('.user__block'),
              nav = document.querySelector('.nav');

        btn.addEventListener('click', () => {
            userBlock.style.display = 'none';
            nav.style.display = 'none';
            localStorage.clear();
            location.reload();
        });
    }
    
    function automaticEnter() {
        const user = document.querySelector('.user__block'),
              userName = document.querySelector('.user__name'),
              enterWrap = document.querySelector('.enter'),
              start = document.querySelector('.start'),
              agreement = document.querySelector('.agreement'),
              work = document.querySelector('.work'),
              closeApp = document.querySelector('.closeapp'),
              nav = document.querySelector('.nav');

        if (localStorage.getItem('login')) {
            let login = localStorage.getItem('login'),
                password = localStorage.getItem('password');

            if (login == 'kolmykovva' && password == 'kolmykovva') {
                userName.textContent = 'Колмыков В.А.';
                user.style.display = 'block';
                enterWrap.style.display = 'none';
                start.style.display = 'block';
                agreement.style.display = 'block';
                work.style.display = 'block';
                closeApp.style.display = 'block';
                nav.style.display = 'flex';
            };
            if (login == 'kovalevmv' && password == 'kovalevmv') {
                userName.textContent = 'Ковалев М.В.';
                user.style.display = 'block';
                enterWrap.style.display = 'none';
                start.style.display = 'block';
                agreement.style.display = 'block';
                work.style.display = 'block';
                closeApp.style.display = 'block';
                nav.style.display = 'flex';
            };
            if (login == 'sapunovev' && password == 'sapunovev') {
                userName.textContent = 'Сапунов Е.В.';
                user.style.display = 'block';
                enterWrap.style.display = 'none';
                start.style.display = 'block';
                agreement.style.display = 'block';
                work.style.display = 'block';
                closeApp.style.display = 'block';
                nav.style.display = 'flex';
            };
            if (login == 'ponikarovvi' && password == 'ponikarovvi') {
                userName.textContent = 'Поникаров В.И.';
                user.style.display = 'block';
                enterWrap.style.display = 'none';
                start.style.display = 'block';
                agreement.style.display = 'block';
                work.style.display = 'block';
                closeApp.style.display = 'block';
                nav.style.display = 'flex';
            };
        }
    }

    function showCheckbox() {
        setTimeout(function() {
            const checkboxes = document.querySelectorAll('.agreement__aligner-input'),
                  checkboxesApprove = document.querySelectorAll('.agreement__approver-input');

            if (localStorage.getItem('login')) {
                let login = localStorage.getItem('login'),
                    password = localStorage.getItem('password');

                console.log(login, password);

                if (login == 'kolmykovva' && password == 'kolmykovva') {
                    checkboxesApprove.forEach(item => {
                        if (item.previousSibling.textContent == 'Главный инженер') {
                            item.style.display = 'block';
                        }
                    });
                };

                if (login == 'kovalevmv' && password == 'kovalevmv') {
                    checkboxes.forEach(item => {
                        if (item.previousSibling.textContent == 'Начальник техотдела') {
                            item.style.display = 'block';
                        }
                    });
                };
                if (login == 'ponikarovvi' && password == 'ponikarovvi') {
                    checkboxes.forEach(item => {
                        if (item.previousSibling.textContent == 'Зам. нач. по механизации ВТПК') {
                            item.style.display = 'block';
                        };
                    });
                }
                if (login == 'sapunovev' && password == 'sapunovev') {
                    checkboxes.forEach(item => {
                        if (item.previousSibling.textContent == 'Главный механик') {
                            item.style.display = 'block';
                        };
                    });
                }
            }
        }, 1000); 
    };

    function closeApplication() {
        let arr = [];
        const work = document.querySelector('.work');
              
        work.addEventListener('click', (e) => {
            appArr.forEach((item, i) => {
                if (item.lastChild.lastChild == e.target) {
                    getDB('http://a0784819.xsph.ru/db.json')
                        .then(response => arr = response);

                    setTimeout(() => {
                        if(item.firstChild.textContent == arr[i][0]) {
                            arr[i][1].closeApplication = true;
                        };
                    }, 1500); 
                }
            })
            setTimeout(() => {
                fetch('http://a0784819.xsph.ru/db.json', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(arr)),
                headers: {'Content-type' : 'application/json'}
                });
                location.reload();
            }, 1500);  
        });
    }
    

    showFillModal();
    addRow();
    render();
    postData();
    showConfirmBtn();
    postConfirmInf();
    enterUser();
    exitUser();
    automaticEnter();
    showCheckbox();
    closeApplication();

    setTimeout(() => {
        console.log(appArr);
    }, 3000);
});