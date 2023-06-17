const events = require('events')

const event = new events();

event.on("new",()=>{
    console.log("event fired");
})
event.emit("new");
