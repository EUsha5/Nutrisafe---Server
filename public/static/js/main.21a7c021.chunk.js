(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(77)},45:function(e,t,a){},47:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),r=a.n(s),o=(a(45),a(3)),c=a(4),i=a(6),u=a(5),m=a(7),h=(a(47),a(81)),p=a(82),d=a(11),b=a.n(d),f=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,a,n,l,s){return t.service.post("/signup",{username:e,password:a,firstName:n,lastName:l,email:s}).then(function(e){return e.data})},this.login=function(e,a){return console.log("the info from sign up form &&&&&&&&&&&&&&&&&& ",e,a),t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=b.a.create({baseURL:"".concat("http://nutrisafe.herokuapp.com/api"),withCredentials:!0});this.service=a},g=a(13),E=a(78),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,l=a.state.firstName,s=a.state.lastName,r=a.state.email;a.service.signup(t,n,l,s,r).then(function(e){a.setState({username:"",password:"",firstName:"",lastName:"",email:""}),a.props.setTheUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(g.a)({},n,l))},a.state={username:"",password:"",firstName:"",lastName:"",email:""},a.service=new f,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"auth"},l.a.createElement("form",{className:"auth-form",onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{className:"input",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{className:"input",type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{className:"input",type:"text",name:"lastName",value:this.state.lastName,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{className:"input",type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement("div",{className:"no-acct"},l.a.createElement("p",null,"Already have account?"),l.a.createElement(E.a,{className:"submit-btn",to:"/"},"Login")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){console.log("submitting form data for user log in <<<<<<<<<<<<<<<<<<<<"),e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){console.log(e),console.log("********************",a.state.password),console.log("the response after logging in ^^^^^^^^^^^^^^^^^^^^^^^ ",e),a.setState({username:"",password:""}),console.log("=-=-=-=-=-=-==-=-",e),a.props.setTheUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(g.a)({},n,l))},a.state={username:"",password:""},a.service=new f,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"auth"},l.a.createElement("form",{className:"auth-form",onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{className:"input",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{className:"input",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{className:"submit-btn",type:"submit",value:"Login"})),l.a.createElement("div",{className:"no-acct"},l.a.createElement("p",null,"Don't have an account?"),l.a.createElement(E.a,{className:"submit-btn",to:"/signup"},"Signup")))}}]),t}(n.Component),k=a(17),N=a(39),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).fetchRecipes=function(e){fetch("https://api.edamam.com/search?q=".concat(e,"&").concat(["app_id=8c92a79b&app_key=328006e37eb03156c8eb6598ccfe4a3d","app_id=a561e388&app_key=4c2118d8374559f20b9779e0d162d153","app_id=7433666f&app_key=bb91ec4a4fbe08fb45fbe1dea5019ff3","app_id=ef107028&app_key=2acf8835708aa777c03cd671e935e79f","app_id=93097a01&app_key=b4975072b6bb36844e7ade0b3b22700e","app_id=7a2f4d77&app_key=886fd31fa9e8f6ac02a94e4cbe731c1d","app_id=338a7519&app_key=be0e2b0b2bdac9044d3e071aafc27dde","app_id=94588f2b&app_key=cb0cd17c292ef50bae37599a8a32a16a","app_id=8eb0f8ce&app_key=0b96578057b6b6c344f59aedeab08098","app_id=40a3d7f6&app_key=7a70e9e0297764b6142565c461606b6f"][Math.floor(10*Math.random())])).then(function(t){return console.log("=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-="),200!==t.status?(a.fetchRecipes(e),null):t.json()}).then(function(e){if(null===e)return null;var t=[];a.setState({clicks:a.state.clicks+1}),e.hits.forEach(function(e){var a=e.recipe.uri,n=e.recipe.label,l=e.recipe.ingredients;t.push({value:a,label:n,ingredients:l})}),a.setState({options:t},function(){return console.log("++++++++++++++",a.state)}),e.hits.length<10&&(console.log("here we GOOOOOOOOO"),b.a.post("http://nutrisafe.herokuapp.com/api/currentrecipe",e.hits[0],{withCredentials:!0}).then(function(){console.log(e.hits),a.props.history.push("/recipes/searchResults")}))})},a.handleSubmit=function(e){e.preventDefault(),a.fetchRecipes(a.state.term)},a.handleChange=function(e){(null!==a.state.selectedOption||e)&&(a.setState({selectedOption:e}),a.fetchRecipes(e.label))},a.onInputChange=function(e){a.setState({term:e})},a.state={clicks:0,term:"",selectedOption:null,options:[{value:"pork",label:"Pork"},{value:"chicken",label:"Chicken"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.options;return l.a.createElement("form",{className:"search-box",onSubmit:this.handleSubmit,style:{minWidth:"200px"}},l.a.createElement(N.a,{placeholder:"Search recipes...",onInputChange:this.onInputChange,onChange:this.handleChange,options:e,isSearchable:!0}))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){console.log("logging out the user from the session ###################### ",a.state),a.setState({loggedInUser:null}),a.props.setTheUser(null),console.log("the logged in user info after the log out function $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ",a.state.loggedInUser)})},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(k.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"displayInfo",value:function(){var e=this;return this.state.loggedInUser?l.a.createElement("nav",{className:"navbar-logout"},l.a.createElement("ul",null,l.a.createElement(E.a,{className:"book-btn",to:"/profile"},"Profile"),l.a.createElement(E.a,{className:"book-btn",to:"/book/:id"},"RecipeBook"),l.a.createElement(E.a,{className:"book-btn",to:"/recipes/searchResults"},"Recipe")),l.a.createElement(j,Object.assign({},this.props,{searchBoxName:"userNameSearch",onSearchTermChange:this.onSearch})),l.a.createElement("div",{className:"spacing"},l.a.createElement("h3",{className:"username"},"Welcome, ",this.state.loggedInUser.firstName),l.a.createElement(E.a,{to:"/"},l.a.createElement("button",{className:"book-btn logout",onClick:function(){return e.logoutUser()}},"Logout")))):l.a.createElement("nav",{className:"navbar-login"},l.a.createElement("div",{className:"nav-bar-spacing"},l.a.createElement(E.a,{className:"btn-btn",to:"/profile"},"Profile"),l.a.createElement(E.a,{className:"btn-btn",to:"/book/:id"},"RecipeBook"),l.a.createElement(E.a,{className:"btn-btn",to:"/recipes/searchResults"},"Recipe")),l.a.createElement(j,Object.assign({},this.props,{searchBoxName:"userNameSearch",onSearchTermChange:this.onSearch})),l.a.createElement("ul",null,l.a.createElement(E.a,{className:"book-btn",to:"/"},"Login"),l.a.createElement(E.a,{className:"book-btn",to:"/signup"},"Signup")))}},{key:"render",value:function(){return l.a.createElement("div",null,this.displayInfo())}}]),t}(n.Component),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={isHidden:!0,title:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.toggleHidden.bind(this)},"Add Book"),!this.state.isHidden&&l.a.createElement(S,{getData:function(){return e.props.acquireData}}))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleFormSubmit=function(t){var a=e.state.title;t.preventDefault(),e.props.getData(),b.a.post("http://nutrisafe.herokuapp.com/api/profile/book/create",{title:a},{withCredentials:!0}).then(function(){e.setState({title:""})}).catch(function(e){console.log(e)})},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(g.a)({},n,l))},e.state={title:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return console.log("================BOOK TITLE========",this.state),l.a.createElement("div",{onSubmit:function(t){return e.handleFormSubmit(t)}},l.a.createElement("form",null,l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",name:"title",placeholder:"Book Title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Add Book"})))}}]),t}(n.Component),$=C,w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getAllBooks=function(){b.a.get("http://nutrisafe.herokuapp.com/api/profile",{withCredentials:!0}).then(function(e){a.setState({listOfBooks:e.data.recipebook})}).catch(function(e){console.log(e)})},a.showAllBooks=function(){if(a.state.listOfBooks.length>0)return a.state.listOfBooks.map(function(e,t){return console.log("++++++++++LITTLEBOOK+++++++++",e),l.a.createElement("div",{key:e._id},l.a.createElement(E.a,{to:"/book/".concat(e._id)},l.a.createElement("button",{className:"book-btn"},e.title),l.a.createElement("br",null),l.a.createElement("br",null)))})},a.handleFormSubmit=function(e){var t=a.state.aboutme;e.preventDefault(),b.a.put("http://nutrisafe.herokuapp.com/api"+"/profile/".concat(a.props.loggedInUser._id),{aboutme:t},{withCredentials:!0}).then(function(e){a.setState="",console.log("*********RESPONSE*******",e)}).catch(function(e){console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(g.a)({},n,l))},a.state={listOfBooks:[],user:null,aboutme:a.props.loggedInUser.aboutme},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"render",value:function(){var e=this;return console.log("&&&&&&&&&&ABOUTME&&&&&&&&&&&",this.props.loggedInUser.aboutme),l.a.createElement("div",{className:"profile-height"},l.a.createElement("div",{className:"profile-info"},l.a.createElement("div",{className:"about-me"},l.a.createElement("h2",{className:"about-title"},"About ",this.props.loggedInUser.firstName,":"),l.a.createElement("span",{className:"about-text"},this.props.loggedInUser.aboutme)),l.a.createElement("div",{className:"total"},l.a.createElement("h3",null,"Total Recipes: ",l.a.createElement("span",null,"#")),l.a.createElement("h3",null,"Total Books: ",l.a.createElement("span",null,this.props.loggedInUser.recipebook.length)))),l.a.createElement("div",null,l.a.createElement("h2",null,"My Book Shelf"),l.a.createElement("div",null,this.showAllBooks())),l.a.createElement($,{acquireData:this.getAllBooks}),l.a.createElement("div",{className:"edit-about"},l.a.createElement("h3",null,"Edit Profile:"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"About Me:"),l.a.createElement("textarea",{type:"text",name:"aboutme",value:this.state.aboutme,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Edit"}))))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).deleteBook=function(){var t=e.props.match.params;b.a.delete("http://localhost:5000/api/book/".concat(t.id)).then(function(t){e.props.history.push("/profile")}).catch(function(e){console.log(e)})},e.state={},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"page-height"},l.a.createElement("h1",null,"Book Title"),l.a.createElement("button",{onClick:function(){return e.deleteBook()}},"Delete Book"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"List of Recipes"))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getRecipe=function(){console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-="),b.a.get("http://nutrisafe.herokuapp.com/api/currentrecipe",{withCredentials:!0}).then(function(e){console.log("{}{}{}}{}{}{}}}}{}{}{}{{}{}",e);var t=e.data;a.setState(t,function(){return console.log("STATETSTATESTATESTATE",a.state)})}).catch(function(e){console.log(e)})},a.state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getRecipe()}},{key:"render",value:function(){return l.a.createElement("div",{className:"recipe-height"},l.a.createElement("div",{className:"recipe-img"},this.state.recipe&&l.a.createElement("img",{src:this.state.recipe.image,alt:""})),l.a.createElement("div",null,this.state.recipe&&l.a.createElement("h1",null,this.state.recipe.label)),l.a.createElement("div",{className:"nutri-values"},l.a.createElement("p",null,"Nutrional Values:"),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(1),"kcal calories"),l.a.createElement("br",null),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.totalNutrients.CHOCDF.quantity.toFixed(1),"g carbs"),l.a.createElement("br",null),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.totalNutrients.FIBTG.quantity.toFixed(1),"g fiber"),l.a.createElement("br",null),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.totalNutrients.PROCNT.quantity.toFixed(1),"g protien"),l.a.createElement("br",null),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.totalNutrients.SUGAR.quantity.toFixed(1),"g sugar"),l.a.createElement("p",null,"Dietary Values:")),l.a.createElement("div",null,l.a.createElement("h2",{className:"recipe-ingredients"},"Ingredients:")),l.a.createElement("div",null,this.state.recipe&&l.a.createElement("h3",null,"CookTime: ",this.state.recipe.totalTime,"min"),this.state.recipe&&l.a.createElement("h3",null,"Yield: ",this.state.recipe.yield)),l.a.createElement("div",null,l.a.createElement("h2",null,"Instructions:"),l.a.createElement("h3",null,"Please visit the link for cooking directions"),this.state.recipe&&l.a.createElement("span",null,this.state.recipe.url)))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{id:"edamam-badge","data-color":"transparent"}))}}]),t}(n.Component),B=a(38),_=a(80),x=function(e){var t=e.component,a=e.user,n=Object(B.a)(e,["component","user"]);return console.log(Object(k.a)({component:t,user:a},n)),l.a.createElement(p.a,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,Object.assign({},e,{loggedInUser:a})):l.a.createElement(_.a,{to:{pathname:"/",state:{from:e.location}}})}}))},R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new f,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){console.log("response from the fetch user function ^&&^&&^&^^&^&^&^&^&^&^&^&^&&^&^&^&^&&^&^&&^^&",t),e.setState({loggedInUser:t})}).catch(function(t){console.log("error from the fetch user function %%%%%%%%%%%%&&&&&&&&&&&&&$$$$$$$$$$$$$$$$$$$$$",t),e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),l.a.createElement("div",{className:"App"},l.a.createElement(y,Object.assign({},this.props,{setTheUser:this.getTheUser,userInSession:this.state.loggedInUser})),l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(v,{setTheUser:e.getTheUser})}}),l.a.createElement(p.a,Object.assign({exact:!0,path:"/"},this.props,{render:function(){return l.a.createElement(O,{setTheUser:e.getTheUser})}})),l.a.createElement(x,{path:"/profile",user:this.state.loggedInUser,component:w}),l.a.createElement(p.a,Object.assign({exact:!0,path:"/book/:id"},this.props,{component:U})),l.a.createElement(p.a,Object.assign({exact:!0,path:"/recipes/searchResults"},this.props,{component:T})),l.a.createElement(I,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(79);r.a.render(l.a.createElement(A.a,null,l.a.createElement(p.a,{component:R})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.21a7c021.chunk.js.map