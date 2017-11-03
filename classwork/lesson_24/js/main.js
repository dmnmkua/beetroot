window.addEventListener('DOMContentLoaded', init_);

function init_() {

  function CreateTodo() {
    // главный блок, куда влаживается приложение
    this.app = document.querySelector('#app');

    // функция динамического создания тела приложения
    createBlockTodo_ = () => {
      this.crTodo = document.createElement('div');
      this.crTodo.classList.add('todo');
      this.crTodoHeader = document.createElement('header');
      this.crTodoHeader.classList.add('todo__header');
      this.crTodoTitle = document.createElement('span');
      this.crTodoTitle.classList.add('todo__title');
      this.crTodoTitleText = document.createTextNode('ToDo List');
      this.crTodoDropdown = document.createElement('div');
      this.crTodoDropdown.classList.add('todo__dropdown');
      this.crBtnDropdown = document.createElement('button');
      this.crBtnDropdown.classList.add('todo__btn');
      this.crBtnDropdown.classList.add('todo__dropdown-btn');
      this.crIconMore = document.createElement('i');
      this.crIconMore.classList.add('material-icons');
      this.crIconMoreText = document.createTextNode('more_vert');
      this.crDropdownList = document.createElement('ul');
      this.crDropdownList.classList.add('todo__dropdown-list');
      this.crDropdownItem = document.createElement('li');
      this.crDropdownItem.classList.add('todo__dropdown-item');
      this.crDropdownItemText = document.createTextNode('Trash');
      this.crTodoBody = document.createElement('div');
      this.crTodoBody.classList.add('todo__body');
      this.crTodoBodyList = document.createElement('ul');
      this.crTodoBodyList.classList.add('todo__body-list');
      this.crTodoBtnWrap = document.createElement('div');
      this.crTodoBtnWrap.classList.add('todo__btn-wrap');
      this.crTodoValue = document.createElement('input');
      this.crTodoValue.classList.add('todo__value');
      this.crTodoValue.setAttribute('type', 'text');
      this.crTodoValue.setAttribute('autofocus', '');
      this.crBtnAdd = document.createElement('button');
      this.crBtnAdd.classList.add('todo__btn');
      this.crBtnAdd.classList.add('todo__btn--add');
      this.crIconAdd = document.createElement('i');
      this.crIconAdd.classList.add('material-icons');
      this.crIconAddText = document.createTextNode('add');
      this.crSpan = document.createElement('span');
      this.crSpan.classList.add('todo__btn-desc');
      this.crSpanText = document.createTextNode('Add task');
      // trash
      this.crTrash = document.createElement('div');
      this.crTrash.classList.add('trash');
      this.crTrashWrap = document.createElement('div');
      this.crTrashWrap.classList.add('trash__wrap');
      this.crTrashTitle = document.createElement('h3');
      this.crTrashTitle.classList.add('trash__title');
      this.crTrashTitleText = document.createTextNode('Trash');
      this.crTrashList = document.createElement('ul');
      this.crTrashList.classList.add('trash__list');
      this.crOverlay = document.createElement('div');
      this.crOverlay.classList.add('overlay');
      this.crTrashBtn = document.createElement('button');
      this.crTrashBtn.classList.add('todo__btn');
      this.crTrashBtn.classList.add('trash__btn');
      this.crTrashBtnText = document.createTextNode('Remove');


      this.crIconMore.appendChild(this.crIconMoreText);
      this.crBtnDropdown.appendChild(this.crIconMore);
      this.crDropdownItem.appendChild(this.crDropdownItemText);
      this.crDropdownList.appendChild(this.crDropdownItem);
      this.crTodoDropdown.appendChild(this.crBtnDropdown);
      this.crTodoDropdown.appendChild(this.crDropdownList);
      this.crTodoTitle.appendChild(this.crTodoTitleText);
      this.crTodoHeader.appendChild(this.crTodoTitle);
      this.crTodoHeader.appendChild(this.crTodoDropdown);
      this.crIconAdd.appendChild(this.crIconAddText);
      this.crSpan.appendChild(this.crSpanText);
      this.crBtnAdd.appendChild(this.crIconAdd);
      this.crBtnAdd.appendChild(this.crSpan);
      this.crTodoBtnWrap.appendChild(this.crTodoValue);
      this.crTodoBtnWrap.appendChild(this.crBtnAdd);
      this.crTodoBody.appendChild(this.crTodoBodyList);
      this.crTodoBody.appendChild(this.crTodoBtnWrap);
      this.crTodo.appendChild(this.crTodoHeader);
      this.crTodo.appendChild(this.crTodoBody);
      this.crTrashTitle.appendChild(this.crTrashTitleText);
      this.crTrashBtn.appendChild(this.crTrashBtnText);
      this.crTrashWrap.appendChild(this.crTrashTitle);
      this.crTrashWrap.appendChild(this.crTrashList);
      this.crTrashWrap.appendChild(this.crTrashBtn);
      this.crTrash.appendChild(this.crTrashWrap);
      this.crTrash.appendChild(this.crOverlay);
      this.crTodo.appendChild(this.crTrash);

      this.app.appendChild(this.crTodo);
    }

    // создание тела приложения
    createBlockTodo_();

    // переменные
    this.todoBody = document.querySelector('.todo__body');
    this.taskList = document.querySelector('.todo__body-list');
    this.todoValue = document.querySelector('.todo__value');
    this.btnAdd = document.querySelector('.todo__btn--add');
    this.trash = document.querySelector('.trash');
    this.overlay = document.querySelector('.overlay');
    this.trashList = document.querySelector('.trash__list');
    this.btnDropdown = document.querySelector('.todo__dropdown-btn');
    this.btnRemove = document.querySelector('.trash__btn');
    this.cloneTrash;
    this.cloneTask;

    // создание уведомления при пустом списке
    createMessage_ = () => {
      this.crMessage = document.createElement('div');
      this.crMessage.classList.add('todo__message');
      this.crMessageText = document.createTextNode('ToDo is Empty');

      this.crMessage.appendChild(this.crMessageText);
      this.todoBody.insertBefore(this.crMessage, this.todoBody.firstChild);
    }

    // удаление уведомление пустого списка при добавлении заданий
    deleteMessage_ = () => {
      if(document.querySelector('.todo__message')) {
        document.querySelector('.todo__message').parentNode.removeChild(document.querySelector('.todo__message'));
      }
    }

    // создание пунктов заданий
    createTaskItem_ = text => {
      deleteMessage_();
      this.crTodoLabel = document.createElement('label');
      this.crTodoLabel.classList.add('todo__body-checkbox-icon');
      this.crCheckbox = document.createElement('input');
      this.crCheckbox.classList.add('todo__body-checkbox');
      this.crCheckbox.setAttribute('type', 'checkbox');
      this.crCheckboxSpan = document.createElement('span');
      this.crCheckboxSpan.classList.add('checkbox');
      this.crDesc = document.createElement('p');
      this.crDesc.classList.add('todo__body-item-description');
      this.crDescText = document.createTextNode(text);
      this.crTodoItem = document.createElement('li');
      this.crTodoItem.classList.add('todo__body-item');

      this.crDesc.appendChild(this.crDescText);
      this.crTodoLabel.appendChild(this.crCheckbox);
      this.crTodoLabel.appendChild(this.crCheckboxSpan);
      this.crTodoLabel.appendChild(this.crDesc);
      this.crTodoItem.appendChild(this.crTodoLabel);
      this.taskList.appendChild(this.crTodoItem);
    }

    // вставка сообщение при пустом списке
    addTask_ = () => {
      if(this.taskList.children.length === 0) {
        createMessage_();
      }
    }

    event_ = () => {

      // добавление пункта задания по клику на кнопку
      this.btnAdd.addEventListener('click', () => {
        if(this.todoValue.value) {
          createTaskItem_(this.todoValue.value);
          this.todoValue.value = '';
        }
      });

      // добавление пункта меню по клику на Enter
      this.todoValue.addEventListener('keydown', (event) => {
        if(event.keyCode == 13) {
          if(this.todoValue.value) {
            createTaskItem_(this.todoValue.value);
            this.todoValue.value = '';
          }
        }
      })

      // удаление выполненого задания
      this.taskList.addEventListener('click', e => {
          if(e.target.checked) {
            this.cloneTask = e.target.closest('li').cloneNode(true);
            e.target.setAttribute('disabled', 'disabled');
            this.trashList.appendChild(this.cloneTask);
            setTimeout( () => {
              e.target.closest('ul').removeChild(e.target.closest('li'));
              if(this.taskList.children.length === 0) {
                createMessage_();
              }
            }, 500);
          }
      })

      // вызов dropdown меню
      this.btnDropdown.addEventListener('click', () => {
        setTimeout( () => {
          this.crDropdownList.classList.add('todo__dropdown-list--show');
        }, 100);

      })

      // закрытие dropdown меню
      document.body.addEventListener('click', () => {
        if(this.crDropdownList.classList.contains('todo__dropdown-list--show')) {
          this.crDropdownList.classList.remove('todo__dropdown-list--show')
        }
      })

      // открытие корзины
      this.crDropdownList.addEventListener('click', e => {
        if(e.target.tagName === 'LI' && e.target.classList.contains('todo__dropdown-item')) {
          this.trash.classList.add('trash--show');
          this.crDropdownList.classList.remove('todo__dropdown-list--show');
        }
      })

      // закрытие корзины
      this.overlay.addEventListener('click', () => {
        this.trash.classList.remove('trash--show');
      })

      // возврат заданий с корзины
      this.trashList.addEventListener('click', e => {
        if(e.target.tagName === 'INPUT' && !e.target.checked) {
          this.cloneTrash = e.target.closest('li').cloneNode(true);
          this.taskList.appendChild(this.cloneTrash);
          e.target.closest('ul').removeChild(e.target.closest('li'));
          deleteMessage_();
        }
      })

      // очистка корзины
      this.btnRemove.addEventListener('click', () => {
        this.trashList.innerHTML = '';
      })
    }

    init_ = () => {
      addTask_();
      event_();
    }

    init_();
  }

  let createTodo = new CreateTodo();

}
