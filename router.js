const Router = require("@koa/router");

const router = new Router();

const counter = { count: 0 };
// return count
router.get('/', ctx => {
  ctx.body = counter;
});

// EXCERCISE 1 - fix the issue in this code - old count and counter in the response are always equal
// old counter should bear the value before the increment

// EXPLANATION: [your explanation here]

// EXCERCISE 2 - Modify the code to accept a body parameter "increment" (assume is number) and increment by the same value
// if not provided, the default value is 1
// tip: ctx.request.body will give you the request body object

// increment
router.post('/increment', ctx => {
  console.log('body is: ', ctx.request.body)

  const oldCounter = counter;
  counter.count += 1;

  ctx.body = {
    oldCounter,
    counter,
  }
});

module.exports = router;