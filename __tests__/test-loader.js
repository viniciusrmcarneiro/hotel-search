const testsContext = require.context('./', true, /.*spec\.js$/);
testsContext.keys().map((test) => testsContext(test) )
