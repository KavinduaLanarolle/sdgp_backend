import {addnewUser,seeAllUsers,getUserByID} from '../controllers/infController'
import {seeAllPredictions, getLast, seeWarningPredictions} from "../controllers/predictionController";


const routes= (app) =>{
// ---------register route------------
app.route('/register')


    .get((req,res,next) => {
        //middleware
        console.log(`Request from :${req.originalUrl}`)
        console.log(`Request type :${req.method}`)
        next();
        
    },seeAllUsers
   
    )
    .post(addnewUser);


// ---------login route------------
app.route('/login')

.get((req,res,next) => {
    //middleware
    console.log(`Request from :${req.originalUrl}`)
    console.log(`Request type :${req.method}`)
    next();

},getUserByID

)
.post(getUserByID);




    app.route('/predict')

        .get((req,res,next) => {
            //middleware
            console.log(`Request from :${req.originalUrl}`)
            console.log(`Request type :${req.method}`)
            next();

        },seeAllPredictions
        )


    app.route('/warning')

        .get((req,res,next) => {
                //middleware
                console.log(`Request from :${req.originalUrl}`)
                console.log(`Request type :${req.method}`)
                next();

            },seeWarningPredictions
        )


        app.route('/lastOne')

        .get((req,res,next) => {
            //middleware
            console.log(`Request from :${req.originalUrl}`)
            console.log(`Request type :${req.method}`)
            next();

        },getLast
        )
}



export default routes;