const Koa = require("koa");
const app = new Koa();

// add date method to context
app.context.date = Date();
app.context.userData = {
    first: 'Manny',
    last: 'Henri'
};

// response
app.use(ctx => { 
    // use state
    ctx.state.user = `Manny Henri`;
    // request object
    let from = ctx.request.origin;
    let method = ctx.request.method;
    // print out name with date
    // ctx.body = `Hello ${ctx.state.user} on ${ctx.date} from ${from}-${method}`;
    // ctx.body = `Last Name: ${ctx.userData.last}`;
    // console.log(`Last Name: ${ctx.userData.last}`);
    ctx.response.body = ctx.userData;
});

app.listen(3001);