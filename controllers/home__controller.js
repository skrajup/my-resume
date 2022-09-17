const get__index = (req, res)=>{
    res.render("home.ejs");
}

const get__education = (req, res) => {
    res.render("education.ejs");
}

const get__skills = (req, res) => {
    res.render("skills.ejs");
}

const get__achievements = (req, res) =>{
    res.render("achievements.ejs");
}

const get__interests = (req, res) => {
    res.render("interests.ejs");
}

const get__curriculars = (req, res) => {
    res.render("curriculars.ejs");
}

module.exports = { get__index, get__education, get__skills, get__achievements, get__interests, get__curriculars };
