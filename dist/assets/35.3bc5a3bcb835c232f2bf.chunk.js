webpackJsonp([35],{2748:function(e,t,a){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),o=a(0),_=s(o),d=a(83),u=a(29),m=s(u),E=a(750),f=s(E),h=a(246),p=s(h),R=a(374),C=s(R),v=a(247),T=s(v),O=a(245);a(741);var A=a(53),g=s(A),b=a(55),x=s(b),L=a(3249),D=s(L),N=a(3251),H=s(N),P=a(3254),j=s(P),U=a(742),q=s(U),J=a(103),y=s(J),S=a(393),w=function(t){function a(){n(this,a);var e=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.filterContacts=function(t){e.props.filterContacts(t)},e.filterUsers=function(t){e.props.filterUsers(t)},e._handleKeyPress=function(t){"Enter"===t.key&&e.submitComment()},e.onSelectUser=function(t){e.props.onSelectUser(t),setTimeout(function(){e.props.hideLoader()},1500)},e.submitComment=function(){""!==e.props.message&&e.props.submitComment()},e.updateMessageValue=function(t){e.props.updateMessageValue(t.target.value)},e.Communication=function(){var t=e.props,a=t.message,s=t.selectedUser,n=t.conversation,r=n.conversationData;return _.default.createElement("div",{className:"chat-main"},_.default.createElement("div",{className:"chat-main-header"},_.default.createElement(g.default,{className:"d-block d-xl-none chat-btn","aria-label":"Menu",onClick:e.onChatToggleDrawer.bind(e)},_.default.createElement("i",{className:"zmdi zmdi-comment-text"})),_.default.createElement("div",{className:"chat-main-header-info"},_.default.createElement("div",{className:"chat-avatar mr-2"},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{src:s.thumb,className:"rounded-circle size-60",alt:""}),_.default.createElement("span",{className:"chat-mode "+s.status}))),_.default.createElement("div",{className:"chat-contact-name"},s.name))),_.default.createElement("div",{className:"chat-list-scroll"},_.default.createElement(H.default,{conversationData:r,selectedUser:s})),_.default.createElement("div",{className:"chat-main-footer"},_.default.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},_.default.createElement("div",{className:"col"},_.default.createElement("div",{className:"form-group"},_.default.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),value:a,placeholder:"Type and hit enter to send message"}))),_.default.createElement("div",{className:"chat-sent"},_.default.createElement(g.default,{onClick:e.submitComment.bind(e),"aria-label":"Send message"},_.default.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd mb-0"},_.default.createElement(g.default,{className:"back-to-chats-button size-30","aria-label":"back button",onClick:function(){e.setState({userState:1})}},_.default.createElement("i",{className:"zmdi zmdi-arrow-back"}))),_.default.createElement("div",{className:"chat-user chat-user-center"},_.default.createElement("div",{className:"chat-avatar mx-auto"},_.default.createElement("img",{src:"http://via.placeholder.com/150x150",className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),_.default.createElement("div",{className:"user-name h4 my-2 text-white"},"Robert Johnson"))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement("div",{className:"chat-sidenav-scroll card p-4"},_.default.createElement("form",null,_.default.createElement("div",{className:"form-group mt-4"},_.default.createElement("label",null,"Mood"),_.default.createElement(x.default,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(e),onChange:e.updateMessageValue.bind(e),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return _.default.createElement("div",{className:"chat-sidenav-main"},_.default.createElement("div",{className:"chat-sidenav-header"},_.default.createElement("div",{className:"chat-user-hd"},_.default.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.props.userInfoState(2)}},_.default.createElement("div",{className:"chat-avatar-mode"},_.default.createElement("img",{id:"user-avatar-button",src:"http://via.placeholder.com/150x150",className:"rounded-circle size-50",alt:""}),_.default.createElement("span",{className:"chat-mode online"}))),_.default.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},_.default.createElement("div",{className:"module-title"},_.default.createElement("h5",{className:"mb-0"},"Robert Johnson")),_.default.createElement("div",{className:"module-user-detail"},_.default.createElement("a",{href:"javascript:void(0)",className:"text-grey"},"robert@example.com")))),_.default.createElement("div",{className:"search-wrapper"},_.default.createElement(q.default,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(e),value:e.props.searchChatUser}))),_.default.createElement("div",{className:"chat-sidenav-content"},_.default.createElement(p.default,{position:"static",className:"no-shadow chat-tabs-header"},_.default.createElement(C.default,{className:"chat-tabs",value:e.state.selectedTabIndex,onChange:e.handleChange,indicatorColor:"primary",textColor:"primary",fullWidth:!0},_.default.createElement(R.Tab,{label:_.default.createElement(y.default,{id:"chat.chatUser"})}),_.default.createElement(R.Tab,{label:_.default.createElement(y.default,{id:"chat.contacts"})}))),_.default.createElement(f.default,{index:e.state.selectedTabIndex,onChangeIndex:e.handleChangeIndex},_.default.createElement("div",{className:"chat-sidenav-scroll"},0===e.props.chatUsers.length?_.default.createElement("div",{className:"p-5"},e.props.userNotFound):_.default.createElement(D.default,{chatUsers:e.props.chatUsers,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)})),_.default.createElement("div",{className:"chat-sidenav-scroll"},0===e.props.contactList.length?_.default.createElement("div",{className:"p-5"},e.props.userNotFound):_.default.createElement(j.default,{contactList:e.props.contactList,selectedSectionId:e.props.selectedSectionId,onSelectUser:e.onSelectUser.bind(e)})))))},e.handleChange=function(t,a){e.setState({selectedTabIndex:a})},e.handleChangeIndex=function(t){e.setState({selectedTabIndex:t})},e.showCommunication=function(){return _.default.createElement("div",{className:"chat-box"},_.default.createElement("div",{className:"chat-box-main"},null===e.props.selectedUser?_.default.createElement("div",{className:"loader-view"},_.default.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),_.default.createElement("h1",{className:"text-muted"}," ",_.default.createElement(y.default,{id:"chat.selectUserChat"})),_.default.createElement(m.default,{className:"d-block d-xl-none",color:"primary",onClick:e.onChatToggleDrawer.bind(e)},_.default.createElement(y.default,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={selectedTabIndex:0},e}return c(a,t),i(a,[{key:"componentDidUpdate",value:function(){this.manageHeight()}},{key:"componentWillMount",value:function(){this.props.fetchChatUser(),this.props.fetchChatUserConversation()}},{key:"componentDidMount",value:function(){this.manageHeight()}},{key:"manageHeight",value:function(){this.props.width>=1200?(e(".loader-view").slimscroll({height:"calc(100vh - 290px)"}),e(".chat-list-scroll").slimscroll({height:"calc(100vh - 300px)"}),1===this.props.userState?e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 328px)"}):e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 322px)"})):(e(".loader-view").slimscroll({height:"calc(100vh - 122px)"}),e(".chat-list-scroll").slimscroll({height:"calc(100vh - 255px)"}),1===this.props.userState?e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 1px)"}):e(".chat-sidenav-scroll").slimscroll({height:"calc(100vh - 115px)"}))}},{key:"updateSearchChatUser",value:function(e){this.props.updateSearchChatUser(e.target.value),this.props.filterContacts(e.target.value),this.props.filterUsers(e.target.value)}},{key:"onChatToggleDrawer",value:function(){this.props.onChatToggleDrawer()}},{key:"render",value:function(){var e=this.props,t=e.loader,a=(e.userState,e.drawerState);e.selectedUser;return _.default.createElement("div",{className:"app-wrapper app-wrapper-module"},_.default.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},_.default.createElement("div",{className:"chat-module-box"},_.default.createElement("div",{className:"d-block d-xl-none"},_.default.createElement(T.default,{className:"app-module-sidenav",open:a,onClose:this.onChatToggleDrawer.bind(this)},this.ChatUsers()," ")),_.default.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},this.ChatUsers()," "),t?_.default.createElement("div",{className:"w-100 d-flex justify-content-center align-items-center chat-loader-view"},_.default.createElement(O.CircularProgress,null)):this.showCommunication())))}}]),a}(o.Component),M=function(e){var t=e.chatData;return{width:e.settings.width,loader:t.loader,userNotFound:t.userNotFound,drawerState:t.drawerState,selectedSectionId:t.selectedSectionId,userState:t.userState,searchChatUser:t.searchChatUser,contactList:t.contactList,selectedUser:t.selectedUser,message:t.message,chatUsers:t.chatUsers,conversationList:t.conversationList,conversation:t.conversation}},k=(0,d.connect)(M,{fetchChatUser:S.fetchChatUser,fetchChatUserConversation:S.fetchChatUserConversation,filterContacts:S.filterContacts,filterUsers:S.filterUsers,onSelectUser:S.onSelectUser,hideLoader:S.hideLoader,userInfoState:S.userInfoState,submitComment:S.submitComment,updateMessageValue:S.updateMessageValue,updateSearchChatUser:S.updateSearchChatUser,onChatToggleDrawer:S.onChatToggleDrawer})(w);t.default=k;var I=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(w,"ChatPanelWithRedux","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(M,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"default","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"_createClass","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(_,"_react2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(m,"_Button2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(f,"_reactSwipeableViews2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(p,"_AppBar2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(C,"_Tabs2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(T,"_Drawer2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(g,"_IconButton2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(x,"_Input2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(D,"_index2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(H,"_index4","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(j,"_index6","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(q,"_SearchBox2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(y,"_IntlMessages2","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(n,"_classCallCheck","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(r,"_possibleConstructorReturn","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(c,"_inherits","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(w,"ChatPanelWithRedux","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(M,"mapStateToProps","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(k,"_default","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"),__REACT_HOT_LOADER__.register(I,"_temp","E:/Raqami/Jumbo/src/app/routes/chatPanel/redux/index.js"))}()}).call(t,a(95))},3249:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3250),l=s(c),i=function(e){var t=e.chatUsers,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user"},t.map(function(e,t){return r.default.createElement(l.default,{key:t,chat:e,selectedSectionId:a,onSelectUser:s})}))},o=i;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ChatUserList","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(i,"ChatUserList","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/index.js"))}()},3250:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.chat,a=e.selectedSectionId,s=e.onSelectUser;return r.default.createElement("div",{className:"chat-user-item "+(a===t.id?"active":""),onClick:function(){s(t)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:t.thumb,className:"rounded-circle size-40",alt:t.name}),r.default.createElement("span",{className:"chat-mode small "+t.status}))),r.default.createElement("div",{className:"chat-info col-xl-8 col-6"},r.default.createElement("span",{className:"name h4"},t.name),r.default.createElement("div",{className:"chat-info-des"},t.lastMessage.substring(0,25)+"..."),r.default.createElement("div",{className:"last-message-time"},t.lastMessageTime)),r.default.createElement("div",{className:"chat-date col-xl-2 col-3"},r.default.createElement("div",{className:"bg-primary rounded-circle badge text-white"},t.unreadMessage))))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ChatUserList/UserCell/index.js"))}()},3251:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3252),l=s(c),i=a(3253),o=s(i),_=function(e){var t=e.conversationData,a=e.selectedUser;return r.default.createElement("div",{className:"chat-main-content"},t.map(function(e,t){return"sent"===e.type?r.default.createElement(o.default,{key:t,conversation:e}):r.default.createElement(l.default,{key:t,conversation:e,user:a})}))},d=_;t.default=d;var u=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"Conversation","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(o,"_index4","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(_,"Conversation","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(d,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"),__REACT_HOT_LOADER__.register(u,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/index.js"))}()},3252:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.conversation,a=e.user;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:a.thumb,alt:""}),r.default.createElement("div",{className:"bubble"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"ReceivedMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/ReceivedMessageCell/index.js"))}()},3253:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.conversation;return r.default.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},r.default.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:"http://via.placeholder.com/150x150",alt:t.name}),r.default.createElement("div",{className:"bubble jambo-card"},r.default.createElement("div",{className:"message"},t.message),r.default.createElement("div",{className:"time text-muted text-right mt-2"},t.sentAt)))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"SentMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(c,"SentMessageCell","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/Conversation/SentMessageCell/index.js"))}()},3254:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=a(3255),l=s(c),i=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.contactList;return r.default.createElement("div",{className:"chat-user"},s.map(function(e,s){return r.default.createElement(l.default,{key:s,user:e,selectedSectionId:a,onSelectUser:t})}))},o=i;t.default=o;var _=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(l,"_index2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(i,"ContactList","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(o,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"),__REACT_HOT_LOADER__.register(_,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/index.js"))}()},3255:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=s(n),c=function(e){var t=e.onSelectUser,a=e.selectedSectionId,s=e.user;return r.default.createElement("div",{className:"chat-user-item "+(a===s.id?"active":""),onClick:function(){t(s)}},r.default.createElement("div",{className:"chat-user-row row"},r.default.createElement("div",{className:"chat-avatar col-xl-2 col-3"},r.default.createElement("div",{className:"chat-avatar-mode"},r.default.createElement("img",{src:s.thumb,className:"rounded-circle size-40",alt:"Abbott"}),r.default.createElement("span",{className:"chat-mode smallcal "+s.status}))),r.default.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},r.default.createElement("div",{className:"h4 name"},s.name),r.default.createElement("div",{className:"chat-info-des"},s.mood.substring(0,30)+"..."))))},l=c;t.default=l;var i=function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"))}();!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(r,"_react2","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(s,"_interopRequireDefault","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(c,"UserCell","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(l,"_default","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"),__REACT_HOT_LOADER__.register(i,"_temp","E:/Raqami/Jumbo/src/components/chatPanel/ContactList/UserCell/index.js"))}()}});
//# sourceMappingURL=35.3bc5a3bcb835c232f2bf.chunk.js.map