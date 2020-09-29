import mongoose from 'mongoose';
import {predictionsSchema} from '../models/predictionModel';



const Predict = mongoose.model('Predictions', predictionsSchema);


export const seeAllPredictions = async (req, res) => {
    Predict.find({},(err,predictions)=> {
        if (err) {
            res.send(err);
            
        }
        res.json(predictions);

    });
}



export const seeWarningPredictions = async (req, res) => {
    let arr=[];
    Predict.find({},(err,predictions)=> {
        if (err) {
            res.send(err);

        }
       // res.json(predictions);
        predictions.forEach(element=>{
            if(element.risk == "Moderate Risk" || element.risk == "High Risk" || element.risk == "Very High Risk" || element.risk == "Extreme"){
                arr.push(element);
            }
        });
res.json(arr);
    });
}




export const getLast = async (req,res) => {
    Predict.find({},(err,predictions)=> {
        if (err) {
            res.send(err);
            console.log()
        }
        
        console.log(predictions[predictions.length-1]);
        res.send(predictions[predictions.length-1]);

    });

}



