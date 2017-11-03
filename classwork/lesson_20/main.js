window.addEventListener('DOMContentLoaded', init_);

function init_() {

/**
 *
 *  MESSAGE SCRIPT
 *
 */

    // function ShowMessage() {

    //     // variables
    //     this.btn = document.getElementById('btn');
    //     this.message = document.getElementById('message');

    //     this.showModal_ = (event) => {
    //         // console.log(target);
    //         // this.message.classList.toggle('message--show');
    //     }

    //     // call events function
    //     this.events_ = () => {
    //         this.btn.addEventListener('click', this.showModal_);
    //     }

    //     // root function
    //     this.init_ = () => {
    //         this.events_();
    //     }
    //     this.init_();
    // }

    // const showMessage = new ShowMessage();

    // let first = document.querySelector('.first');
    // let second = document.querySelector('.second');
    // let third = document.querySelector('.third');

    // first.addEventListener('click', e => {
    //     e.stopPropagation();
    //     console.log('Клик на первый квадрат');
    // }, false);

    // second.addEventListener('click', event => {
    //     event.stopPropagation();
    //     console.log('Клик на второй квадрат');
    // }, true);
    // third.addEventListener('click', event => {
    //     event.stopPropagation();
    //     console.log('Клик на третий квадрат');
    // }, true);

    // let input = document.getElementById('text');
    // let list = document.querySelector('.list');

    // input.addEventListener('keyup', function(event) {


    //     if( event.keyCode === 13 ) {
    //         let element = document.createElement('li'),
    //             textNode = document.createTextNode(event.target.value);

    //         element.appendChild(textNode);
    //         list.appendChild(element);

    //         event.target.value = '';
    //     }
    // })

    // click, keyup, keydown, mouseup, mousedown, mousemove, mouseenter, mouseleave, scroll


    /**
     *
     *
     *  TABS
     *
     */

    function Tabs() {

        this.tabsBtn = document.querySelector('.tab-btns');
        this.tabContent = document.querySelectorAll('.tab-content');
        this.childBtn = document.querySelectorAll('.tab-btn');
        this.line = document.querySelector('.line');

        this.changeContent_ = event => {

            if( event.target.tagName === 'A' && event.target.hasAttribute('href') ) {

                let anchor = event.target.getAttribute('href').slice(1);

                this.childBtn.forEach( el => {
                    if( el.classList.contains('active-tab') ) {
                        el.classList.remove('active-tab');
                        return;
                    }
                })

                event.target.classList.add('active-tab');


                this.tabContent.forEach( el => {
                    if( el.classList.contains('active-content') ) {
                        el.classList.remove('active-content');
                        return;
                    }
                });
                setTimeout(() => {document.getElementById(anchor).classList.add('active-content')}, 500);
            }
        }

        this.changeContent2_ = event => {
          this.childBtn.forEach( (el, i) => {
            if(event.target === el) {
              this.line.style.left = (166 * i) + 'px';
            }
          })
        }

        this.events_ = () => {

            this.tabsBtn.addEventListener('click', this.changeContent_);

            this.tabsBtn.addEventListener('mouseover', this.changeContent2_);
        }
        this.init_ = () => {
            this.events_();
        }

        this.init_();
    }

    const tabs = new Tabs();
}
