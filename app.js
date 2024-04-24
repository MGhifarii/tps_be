// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// require('dotenv').config();
// const cors = require('cors');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


// app.get('/', (req, res) => {
//     res.send('Hello World');
//   });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// console.log(`Server started on port ${PORT}`);
// });

// // connect to mongoDB
// mongoose.connect(
//     process.env.MDB_CONNECT,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err) => {
//       if (err) return console.error(err);
//       console.log(`MongoDB connected: `);
//     }
//   );

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/usersRouter');
// // var categoriesRouter = require('./routes/categories');
// // var restoransRouter = require('./routes/restorans');
// // var importRouter = require('./routes/import');
// // var analisisRouter = require('./routes/analisis');
// // var exportRouter = require('./routes/export');

// app.use(logger('dev'));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// // app.use('/categories', categoriesRouter);
// // app.use('/restorans', restoransRouter);
// // app.use('/import', importRouter);
// // app.use('/analisis', analisisRouter);
// // app.use('/export', exportRouter);

// module.exports = app;


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware.js");
const dotenv = require('dotenv')
// const FileUpload = require("express-fileupload");

const PORT = process.env.PORT || 5000;

dotenv.config();

// set up express
const app = express();

// CORS
app.use(
  cors(
    // origin: ["http://localhost:3000"],
    // credentials: true,
  )
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// port listener
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));



app.use(errorHandler);

// connect to mongoDB
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log(`MongoDB connected: `);
  }
);

// set up routes
app.use("/api/users", require("./routes/usersRouter.js"));
app.use("/api/tps", require("./routes/tpsRouter.js"));
app.use("/api/export", require("./routes/exportRouter.js"));
app.use("/api/analisis", require("./routes/analisis.js"));


// app.use("/api/v1/products", require("./app/routers/productRouter.js"));
// app.use("/api/v1/admins", require("./app/routers/adminRouter.js"));

//Upload File
// app.use(FileUpload());
// app.use(productRouter);
 
//simple route
// app.get("/", (req, res) => {
//   res.json({message:"Welcome to NaraStore"});
// });

