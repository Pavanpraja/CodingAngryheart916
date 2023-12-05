import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "CodWebSignup",
  })
  .then(() => console.log("I have successfull to connect database"))
  .catch((e) => console.log(e));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const signuporegis = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const userdetails = new mongoose.Schema({
  name: String,
  DOB: String,
  about: String,
});

const Contactdata = mongoose.model("Resister", contactSchema);
const SignRegisdata = mongoose.model("Signup", signuporegis);
const userdetdata = mongoose.model("userdetails", userdetails);

const app = express();

//using middlewares

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/rotatews", express.static("images"));
app.use("/", express.static("images"));
app.use("/next1", express.static("images"));
app.use("/next2", express.static("images"));
app.use("/next3", express.static("images"));
app.use("/next4", express.static("images"));
app.use("/next5", express.static("images"));
app.use("/next50", express.static("images"));
app.use("/next51", express.static("images"));
app.use("/next52", express.static("images"));
app.use("/next6", express.static("images"));
app.use("/next7", express.static("images"));
app.use("/contact", express.static("images"));
app.use("/signup", express.static("images"));
app.use("/ide", express.static("images"));
app.use("/prosec", express.static("images"));
app.use("/register", express.static("images"));

app.use("/indexcss", express.static("images"));
app.use("/nextcss1", express.static("images"));
app.use("/nextcss2", express.static("images"));
app.use("/nextcss3", express.static("images"));
app.use("/nextcss31", express.static("images"));
app.use("/nextcss32", express.static("images"));
app.use("/nextcss32(1)", express.static("images"));
app.use("/nextcss32(2)", express.static("images"));
app.use("/nextcss32(3)", express.static("images"));
app.use("/nextcss32(4)", express.static("images"));
app.use("/nextcss32(5)", express.static("images"));
app.use("/nextcss33", express.static("images"));
app.use("/nextcss34", express.static("images"));
app.use("/nextcss35", express.static("images"));
app.use("/nextcss36", express.static("images"));
app.use("/nextcss37", express.static("images"));
app.use("/nextcss37(1)", express.static("images"));
app.use("/nextcss37(2)", express.static("images"));
app.use("/nextcss37(3)", express.static("images"));
app.use("/nextcss37(4)", express.static("images"));
app.use("/nextcss37(5)", express.static("images"));
app.use("/nextcss38", express.static("images"));
app.use("/nextcss39", express.static("images"));
app.use("/nextcss40", express.static("images"));
app.use("/nextcss41", express.static("images"));

app.use("/indexjs", express.static("images"));
app.use("/stepjs1", express.static("images"));
app.use("/stepjs2", express.static("images"));
app.use("/stepjs3", express.static("images"));
app.use("/stepjs4", express.static("images"));
app.use("/stepjs41", express.static("images"));
app.use("/stepjs42", express.static("images"));
app.use("/stepjs43", express.static("images"));
app.use("/stepjs44", express.static("images"));
app.use("/stepjs45", express.static("images"));
app.use("/stepjs46", express.static("images"));
app.use("/stepjs47", express.static("images"));
app.use("/stepjs48", express.static("images"));


app.set("view engine", "ejs");

// paths created

app.get("/", (req, res) => {
  res.render("rotatews")
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/next1", (req, res) => {
  res.render("next1");
});
app.get("/next2", (req, res) => {
  res.render("next2");
});
app.get("/next3", (req, res) => {
  res.render("next3");
});
app.get("/next4", (req, res) => {
  res.render("next4");
});
app.get("/next5", (req, res) => {
  res.render("next5");
});
app.get("/next50", (req, res) => {
  res.render("next50");
});
app.get("/next51", (req, res) => {
  res.render("next51");
});
app.get("/next52", (req, res) => {
  res.render("next52");
});
app.get("/next6", (req, res) => {
  res.render("next6");
});
app.get("/next7", (req, res) => {
  res.render("next7");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/ide", (req, res) => {
  res.render("ide");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/userdetail", (req, res)=>{
  res.render("userdetail");
});
app.get("/ide", (req, res)=>{
  res.render("ide");
});

app.get("/indexcss", (req, res)=>{
  res.render("indexcss");
});
app.get("/nextcss1", (req, res)=>{
  res.render("nextcss1");
});
app.get("/nextcss2", (req, res)=>{
  res.render("nextcss2");
});
app.get("/nextcss3", (req, res)=>{
  res.render("nextcss3");
});
app.get("/nextcss31", (req, res)=>{
  res.render("nextcss31");
});
app.get("/nextcss32", (req, res)=>{
  res.render("nextcss32");
});
app.get("/nextcss32(1)", (req, res)=>{
  res.render("nextcss32(1)");
});
app.get("/nextcss32(2)", (req, res)=>{
  res.render("nextcss32(2)");
});
app.get("/nextcss32(3)", (req, res)=>{
  res.render("nextcss32(3)");
});
app.get("/nextcss32(4)", (req, res)=>{
  res.render("nextcss32(4)");
});
app.get("/nextcss32(5)", (req, res)=>{
  res.render("nextcss32(5)");
});
app.get("/nextcss33", (req, res)=>{
  res.render("nextcss33");
});
app.get("/nextcss34", (req, res)=>{
  res.render("nextcss34");
});
app.get("/nextcss35", (req, res)=>{
  res.render("nextcss35");
});
app.get("/nextcss36", (req, res)=>{
  res.render("nextcss36");
});
app.get("/nextcss37", (req, res)=>{
  res.render("nextcss37");
});
app.get("/nextcss37(1)", (req, res)=>{
  res.render("nextcss37(1)");
});
app.get("/nextcss37(2)", (req, res)=>{
  res.render("nextcss37(2)");
});
app.get("/nextcss37(3)", (req, res)=>{
  res.render("nextcss37(3)");
});
app.get("/nextcss37(4)", (req, res)=>{
  res.render("nextcss37(4)");
});
app.get("/nextcss37(5)", (req, res)=>{
  res.render("nextcss37(5)");
});
app.get("/nextcss38", (req, res)=>{
  res.render("nextcss38");
});
app.get("/nextcss39", (req, res)=>{
  res.render("nextcss39");
});
app.get("/nextcss40", (req, res)=>{
  res.render("nextcss40");
});
app.get("/nextcss41", (req, res)=>{
  res.render("nextcss41");
});


app.get("/indexjs", (req, res)=>{
  res.render("indexjs");
});
app.get("/stepjs1", (req, res)=>{
  res.render("stepjs1");
});
app.get("/stepjs2", (req, res)=>{
  res.render("stepjs2");
});
app.get("/stepjs3", (req, res)=>{
  res.render("stepjs3");
});
app.get("/stepjs4", (req, res)=>{
  res.render("stepjs4");
});
app.get("/stepjs41", (req, res)=>{
  res.render("stepjs41");
});
app.get("/stepjs42", (req, res)=>{
  res.render("stepjs42");
});
app.get("/stepjs43", (req, res)=>{
  res.render("stepjs43");
});
app.get("/stepjs44", (req, res)=>{
  res.render("stepjs44");
});
app.get("/stepjs45", (req, res)=>{
  res.render("stepjs45");
});
app.get("/stepjs46", (req, res)=>{
  res.render("stepjs46");
});
app.get("/stepjs47", (req, res)=>{
  res.render("stepjs47");
});
app.get("/stepjs48", (req, res)=>{
  res.render("stepjs48");
});


const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (token) {

    const decoded = jwt.verify(token, "alkdfjakjhfkdf");

    req.user = await SignRegisdata.findById(decoded._id)

    next();
  } else {
    res.redirect("/signup");
  }
};

app.get("/signcookie", isAuthenticated, async (req, res) => {
  res.render("signout", {email:req.user.email});
});


app.post("/userdetail", async (req, res)=>{
  
  res.redirect("/signcookie");
})

app.post("/signup", async (req, res)=>{

  const {email, password} = req.body;

  let user = await SignRegisdata.findOne({email});

  if(!user){
    return res.redirect("/register")
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.render("signup", {email, message: "Incorrect Password try again"});
  }

  const token = jwt.sign({_id:user._id}, "alkdfjakjhfkdf");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  // res.redirect("/signcookie");
  res.redirect("/signcookie");
})

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let user = await SignRegisdata.findOne({email});

  if(user){
    return res.redirect("/signup");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  user = await SignRegisdata.create({name, email, password: hashedPassword,})

  const token = jwt.sign({_id:user._id}, "alkdfjakjhfkdf");

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/signcookie");

});

app.get("/signout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/signup");
});

app.listen(5600, () => {
  console.log("server is running right now");
});
