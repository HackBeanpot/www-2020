(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{"7OSE":function(e){e.exports=JSON.parse('[{"content":"There was definitely a lot of support and direction, both with the staff and mentors from actual companies. If you wanted to do something and didn’t know how to do it, there was definitely people you could talk to that would help you learn how. HackBeanpot had a lot of people just giving talks about things in computer science that people may want to learn, and I feel like that was really cool because it was so easy to learn and pick up new things.","attribution":"Shane Timmerman","role":"Past Attendee","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/shane.jpg"},{"content":"I ... didn’t really feel at the same level as people who had been coding for a long time. I went in really scared, but while being there it was actually a really fun and enjoyable learning experience!","attribution":"Olivia Petrillo","role":"Past Attendee","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/olivia.jpg"},{"content":"In terms of elements to bring to HackBeanpot, I think a big one is inclusivity. To the team that would mean making sure our team is inclusive of everyone’s opinions and perspectives… To the event I think diversity is important for encouraging people who don’t necessarily see themselves at a hackathon to participate and try something new.","attribution":"Caitlin Wang","role":"Current Organizer","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/caitlin.jpg"},{"content":"I had a really awesome time and I recommend anyone who’s interested in going to a hackathon to go to HackBeanpot. It was definitely a creative environment and even if you didn’t know much you could learn so much from the people there.","attribution":"Kelsey Esposito","role":"Past Attendee","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/kelsey.jpg"},{"content":"If I could describe hackbeanpot in one word...invigorating. We had a lot of folks who weren’t sure what the experience would be like, and they left feeling united--Really energized and really impressed with the amount of talent that was on display as well as the atmosphere.","attribution":"Rob Antzack","role":"PowerAdvocate CTO","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/rob-antczak-square.jpg"},{"content":"HackBeanpot is the best hackathon I\'ve been to, hands down….Being a mentor is super rewarding because I got to see a ton of projects go from the idea phase to a working demo.","attribution":"Sanders","role":"Past Organizer","imgSrc":"http://tools.hackbeanpot.com/assets/images/stories-portraits/sanders.png"}]')},lxTM:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("wTti"),s=a("7OSE");var i=function(e){var t,a;function o(t){var a;return(a=e.call(this,t)||this).state={currentQuote:0},a}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=o.prototype;return i.renderImages=function(e){var t=this;return e.map((function(e){var a=0;return 1===e&&(a="75px"),4===e&&(a="-75px"),n.a.createElement("div",{key:"stories-"+e,style:{width:"33%",bottom:a}},n.a.createElement("div",{className:(t.state.currentQuote===e?"stories-circles__img-container selected ":"")+"stories-circles__img-container center"},n.a.createElement("img",{className:"stories-circles__img",src:s[e].imgSrc,alt:s[e].attribution,onClick:function(){t.setState({currentQuote:e})}})))}))},i.render=function(){return n.a.createElement("div",{className:"stories-circles"},n.a.createElement("div",{className:"stories-circles__top"},this.renderImages([0,1,2])),n.a.createElement(r.default,{quote:s[this.state.currentQuote]}),n.a.createElement("div",{className:"stories-circles__bottom"},this.renderImages([3,4,5])))},o}(n.a.Component);t.default=i},wTti:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=function(e){return n.a.createElement(o.Fragment,null,e.quote?n.a.createElement("div",{className:"quote"},n.a.createElement("div",{className:"quote-box",id:e.quoteId},n.a.createElement("span",null,'"',e.quote.content,'"')),n.a.createElement("h6",{className:"quote__attribution noClick"},e.quote.attribution,","," ",n.a.createElement("span",{className:"quote__role noClick"},e.quote.role))):null)};r.defaultProps={quote:null,hasBtn:!1},t.default=r}}]);
//# sourceMappingURL=component---src-pages-stories-components-stories-jsx-1bda64f2dabee5fb6120.js.map