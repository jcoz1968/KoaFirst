const Koa = require("koa");
const app = new Koa();

// add date method to context
app.context.date = Date();
app.context.userData = {
    first: 'Manny',
    last: 'Henri'
};

// response
app.use(async (ctx) => { 
    try {
        return ctx.response.body = await ctx.userData;
    }
    catch(err) {
        // return ctx.throw(400, 'data required');
        console.log(err);
    }
});

app.listen(3001);