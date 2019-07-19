"use strict";


Vue.component("message",{
    data: 
        function(){ 
            const nt = new Date().getHours() + ":" + new Date().getMinutes() + ':' + new Date().getSeconds();          
            return {                 
                tt: nt
            };   
        },
    template: `
            <div class="message animated bounceInLeft">
                <div class="message__status-wrap">
                    <div class="message__number">
                        <div class="message__number-index"><div>Q2388</div></div>
                        <div class="message__number-ok"></div>
                    </div>
                    <div class="message__status done__status"><span>Closed</span></div>
                </div>
                <div class="message__main-block">
                    <div class="message__text">{{ value }}</div>
                    <div class="message__date"><div class="message__user-name">Guest</div>{{tt}}</div>
                </div>
            </div>            
    `,
    props: [ 'value' ]
});

Vue.component('tab-my question', { 
    template: `<div>My question component<slot></slot></div>` //Этот блок рендерится в component
});
Vue.component('tab-messenger', { 
    template: `<div>Messenger component<slot></slot></div>` 
});
Vue.component('tab-community qa', { 
	template: '<div>Community QA component<slot></slot></div>' 
});
Vue.component('tab-faq', { 
	template: '<div>FAQ component<slot></slot></div>' 
});

Vue.component('ulc',{
    template: `<li> New category              
                <span>()</span>
                </li>`,
    
});

new Vue({
    el: "#messenger",
    data: {
        t: new Date().getHours() + ":" + new Date().getMinutes(),
        uls:[],
        messages: {},
        message: "",
        currentTab: 'My question',
        tabs: ['My question', 'Messenger', 'Community QA', 'FAQ'],
        chatMyQuestion: 'chat__my-question',
        chatMessenger: 'chat__messenger',
        community: 'chat__community',     
        styleLeftMenu: 'left-menu',
        styleMyQuestions: 'my-questions',
        styleMessenger: 'messenger',
        styleCQA: 'cqa',
        styleFAQ: 'faq'
    },
    methods: {                       
        addMessage(){

            if (!this.messages[this.currentTab]) {
                this.messages[this.currentTab] = [];
            }
            this.messages[this.currentTab].push(this.message);
            this.message = '';            
        },
        addChatCategory(){
            this.uls.push("New category");            
        }        
    },
    computed: {
        currentTabComponent: function () {
          return `tab-${this.currentTab.toLowerCase()}`;        
        }
      },

});



