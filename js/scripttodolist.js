
function createHtmlElements() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerText = 'My task list';
    let paragraph = document.createElement('p');
    paragraph.id = 'funcionamento'
    paragraph.innerText = 'Double-click an item to mark it as complete';
    let container = document.createElement('main');
    let body = document.body;
    let sectionOne = document.createElement('section');
    let taskInput = document.createElement('input');
    taskInput.id = 'texto-tarefa';
    let taskList = document.createElement('ol');
    taskList.id = 'lista-tarefas';
    let taskMaker = document.createElement('button');
    taskMaker.innerText = 'Create';
    taskMaker.id = 'criar-tarefa';
    let userTaskContainer = document.createElement('div');
    userTaskContainer.id = 'userTask';
    let taskKiller = document.createElement('button');
    taskKiller.id = 'apaga-tudo';
    taskKiller.innerText = 'Kill all'
    let lightOne = document.createElement('div');
    lightOne.className = 'light';
    let lightTwo = document.createElement('div');
    lightTwo.className = 'light lightTwo';
    let lightThree = document.createElement('div');
    lightThree.className = 'light lightThree';
    let lightFour = document.createElement('div');
    lightThree.className = 'light lightFour';
    let taskDoneKiller = document.createElement('button');
    taskDoneKiller.id = 'remover-finalizados';
    taskDoneKiller.innerText = 'Delete';
    let btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';
    let saveBtn = document.createElement('button');
    saveBtn.id = 'salvar-tarefas';
    saveBtn.innerText = 'Save';
    let aside = document.createElement('div');
    aside.className = 'aside';

    header.appendChild(title);
    body.appendChild(lightOne);
    body.appendChild(lightTwo);
    body.appendChild(lightThree);
    body.appendChild(lightFour);
    body.appendChild(container);
    body.appendChild(aside);
    container.appendChild(header);
    container.appendChild(paragraph);
    container.appendChild(sectionOne);
    container.appendChild(btnContainer);
    container.appendChild(userTaskContainer);
    sectionOne.appendChild(taskInput);
    btnContainer.appendChild(taskMaker);
    btnContainer.appendChild(taskKiller);
    btnContainer.appendChild(taskDoneKiller);
    btnContainer.appendChild(saveBtn);
    userTaskContainer.appendChild(taskList);
  }
  
  function addTask() {
    document.addEventListener('DOMContentLoaded', () => {
      let userTask = document.querySelector('#texto-tarefa');
      let getTask = document.querySelector('#criar-tarefa');
      let taskList = document.querySelector('#lista-tarefas');
      let aside = document.querySelector('.aside')
      let taskSaverContainer = [];
      getTask.addEventListener('click', () => {
        let taskListItems = document.createElement('li');
        let orderList = document.createElement('div');
        let titleBlock = document.createElement('div');
        let titleSpan = document.createElement('span');
        let details = document.createElement('input');
        // titleSpan.contentEditable ='true';
        details.placeholder = 'Details here';
        details.className = 'details';
        titleBlock.className ='titleBlock';
        titleBlock.style.backgroundColor = aleatoryColor();
        // orderList.className = 'taskBlocks';
        let taskContainer = userTask.value;
        titleSpan.innerText = taskContainer;
        titleSpan.className = 'spanTitle';
        taskListItems.className = 'task';
        // taskListItems.innerText = taskContainer;
       
        // taskList.appendChild(taskListItems);
        aside.appendChild(titleBlock);
        titleBlock.appendChild(titleSpan);
        // orderList.appendChild(details);
        userTask.value = '';
      })
    })
  }
  
  function resetClass() {
    let taskOList = document.querySelector('ol');
    taskOList.addEventListener('click', () => {
      let taskList = document.querySelectorAll('li');
      for (let i = 0; i < taskList.length; i++) {
        taskList[i].classList.remove('selected')
      }
    })
  }
  
  function changeTaskBackground() {
    let body = document.body;
    body.addEventListener('click', (event) => {
      let taskList = document.querySelectorAll('li');
      let target = event.target;
      if (event.target.className === 'task') {
        target.className = 'task selected'
      }
    })
  }
  
  function lineThroughItem() {
    let body = document.body;
    body.addEventListener('dblclick', (event) => {
      let taskList = document.querySelectorAll('.titleBlock');
      let target = event.target;
      console.log(target)
      switch (event.target.className) {
        case 'titleBlock':
          target.className = 'titleBlock completed'
          break;
        case 'task selected completed':
          target.className = 'task selected';
          break;
      }
    })
  }
  
  function shutdownTask() {
    let taskKillerBtn = document.querySelector('#apaga-tudo');
    taskKillerBtn.addEventListener('click', () => {
      let taskList = document.querySelectorAll('.titleBlock');
      let taskContainer = document.querySelector('.aside');
      for (let i = 0; i < taskList.length; i++) {
        taskContainer.removeChild(taskList[i])
      }
    })
  }

  function aleatoryColor() {
    let randomNumberContainer = [];
    for(let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random()*256);
      randomNumberContainer[i] = randomNumber
    }
    const randomColor = `rgb(${randomNumberContainer[0]}, ${randomNumberContainer[1]}, 030)`
    return randomColor;
  }
  
  function addTaskKeyEnter() {
    document.addEventListener('DOMContentLoaded', () => {
      let userTask = document.querySelector('#texto-tarefa');
      let getTask = document.querySelector('#criar-tarefa');
      let taskList = document.querySelector('#lista-tarefas');
      let aside = document.querySelector('.aside')
      userTask.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          let taskListItems = document.createElement('li');
          let orderList = document.createElement('div');
          let titleBlock = document.createElement('div');
          let titleSpan = document.createElement('span');
          let details = document.createElement('input');
          // titleSpan.contentEditable ='true';
          details.placeholder = 'Details here';
          details.className = 'details';
          titleBlock.className ='titleBlock';
          titleBlock.style.backgroundColor = aleatoryColor();
          // orderList.className = 'taskBlocks';
          let taskContainer = userTask.value;
          titleSpan.innerText = taskContainer;
          titleSpan.className = 'spanTitle';
          taskListItems.className = 'task';
          // taskListItems.innerText = taskContainer;
         
          // taskList.appendChild(taskListItems);
          aside.appendChild(titleBlock);
          titleBlock.appendChild(titleSpan);
          // orderList.appendChild(details);
          userTask.value = '';
        }
      })
    })
  }
  
  function taskDoneDelete() {
    let taskDoneBtn = document.querySelector('#remover-finalizados')

    taskDoneBtn.addEventListener('click', () => {
      let taskDone = document.querySelectorAll('.titleBlock');
      let aside = document.querySelector('.aside')

      for (let i = 0; i < taskDone.length; i++) {
        switch (taskDone[i].className) {
          case 'titleBlock completed':
            aside.removeChild(taskDone[i]);
            break;
          case 'task selected completed':
            aside.removeChild(taskDone[i]);
            break;
        }
      }
    })
  }


  function dataSave() {
      document.addEventListener('DOMContentLoaded', () => {
          let list = document.querySelector('.aside');
          let button = document.querySelector('#salvar-tarefas');
          button.addEventListener('click', () => {
              localStorage.setItem('list', list.innerHTML);
          })

      })
}



function dataGet() {
    document.addEventListener('DOMContentLoaded', () => {
    let storage = localStorage.getItem('list');
    let list = document.querySelector('.aside');
    if (storage !== null) {
        list.innerHTML = storage;
    }
})
}


function editBlock() {
  let detailsInput = document.querySelectorAll('.details');
  console.log(detailsInput);
  for (let i = 0; i < detailsInput.length; i++) {

    detailsInput[i].addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        let inputValue = document.querySelectorAll('.details').value;
        let ulist = document.createElement('ul');
        let taskListItems = document.createElement('li');
        taskListItems.innerText = inputValue;
        taskContainer[i].appendChild(taskListItems)
        console.log(inputValue)

      }
  
    })

  }
}

  createHtmlElements();
  addTask();
  changeTaskBackground();
  resetClass();
  lineThroughItem();
  shutdownTask();
  addTaskKeyEnter();
  taskDoneDelete();
  dataSave();
  dataGet();
  aleatoryColor();
  editBlock();