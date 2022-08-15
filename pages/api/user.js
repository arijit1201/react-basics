export default function handler(req, res){
    console.log("api code")
    res.status(200).json({message: "Hello World"});
}