/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 80004
 Source Host           : localhost:27017
 Source Schema         : portfoliodb

 Target Server Type    : MongoDB
 Target Server Version : 80004
 File Encoding         : 65001

 Date: 27/12/2024 21:16:16
*/


// ----------------------------
// Collection structure for contacts
// ----------------------------
db.getCollection("contacts").drop();
db.createCollection("contacts");

// ----------------------------
// Documents of contacts
// ----------------------------
db.getCollection("contacts").insert([ {
    _id: ObjectId("676f63b2d70e000059001f04"),
    type: "gmail",
    url: "jamesthomasdev2001@gmail.com"
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("676f63d5d70e000059001f05"),
    type: "github",
    url: "github.com/JamesThomas0727"
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("676f63e5d70e000059001f06"),
    type: "gmail",
    url: "xunandev2001@gmail.com"
} ]);

// ----------------------------
// Collection structure for educations
// ----------------------------
db.getCollection("educations").drop();
db.createCollection("educations");

// ----------------------------
// Documents of educations
// ----------------------------

// ----------------------------
// Collection structure for experiences
// ----------------------------
db.getCollection("experiences").drop();
db.createCollection("experiences");

// ----------------------------
// Documents of experiences
// ----------------------------
db.getCollection("experiences").insert([ {
    _id: ObjectId("676f8908b8210000000071f2"),
    id: 1,
    what: "Student",
    description: "Established in 1911, HKU is Hong Kong's oldest university, renowned for its research and comprehensive programs.",
    where: {
        country: "Hong Kong",
        city: "Pokfulam",
        name: "The University of Hong Kong"
    },
    from: null,
    to: null
} ]);
db.getCollection("experiences").insert([ {
    _id: ObjectId("676f892eb8210000000071f3"),
    id: 2,
    what: "Student",
    description: "THS is a progressive international school offering a Middle School program that emphasizes personalized learning and real-world application, catering to students in Grades 6 to 8.",
    where: {
        city: "Ap Lei Chau",
        country: "Hong Kong",
        name: "The Harbour School (THS)"
    }
} ]);

// ----------------------------
// Collection structure for projects
// ----------------------------
db.getCollection("projects").drop();
db.createCollection("projects");

// ----------------------------
// Documents of projects
// ----------------------------

// ----------------------------
// Collection structure for skills
// ----------------------------
db.getCollection("skills").drop();
db.createCollection("skills");

// ----------------------------
// Documents of skills
// ----------------------------
db.getCollection("skills").insert([ {
    _id: ObjectId("676f619fd70e000059001ef4"),
    id: 1,
    skill: "C/C++",
    level: 97,
    avatar: "cc++.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61b1d70e000059001ef5"),
    id: 2,
    skill: "Qt",
    level: 99,
    avatar: "qt.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61c1d70e000059001ef6"),
    level: 65,
    skill: "MFC",
    id: 3,
    avatar: "mfc.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61c9d70e000059001ef7"),
    id: 4,
    skill: "Java",
    level: 70,
    avatar: "java.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61cad70e000059001ef8"),
    id: 5,
    skill: "Python",
    level: 90,
    avatar: "python.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61cbd70e000059001ef9"),
    id: 6,
    skill: "PHP",
    level: 95,
    avatar: "php.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61ccd70e000059001efa"),
    id: 7,
    skill: "Laravel",
    level: 90,
    avatar: "laravel.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61ccd70e000059001efb"),
    id: 8,
    skill: "WordPress",
    level: 90,
    avatar: "wordpress.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61cdd70e000059001efc"),
    id: 9,
    skill: "CodeIgniter",
    level: 95,
    avatar: "codeigniter.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f61cdd70e000059001efd"),
    id: 10,
    skill: "JavaScript",
    level: 97,
    avatar: "javascript.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f6208d70e000059001efe"),
    id: 11,
    skill: "Node.js",
    level: 90,
    avatar: "nodejs.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f6209d70e000059001eff"),
    id: 12,
    skill: "Express.js",
    level: 90,
    avatar: "expressjs.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f620ad70e000059001f00"),
    id: 13,
    skill: "React.js",
    level: 90,
    avatar: "reactjs.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f620ed70e000059001f01"),
    id: 14,
    skill: "MySQL",
    level: 90,
    avatar: "mysql.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f6210d70e000059001f02"),
    id: 15,
    skill: "MongoDB",
    level: 90,
    avatar: "mongodb.png"
} ]);
db.getCollection("skills").insert([ {
    _id: ObjectId("676f6212d70e000059001f03"),
    id: 16,
    level: 50,
    skill: "Tailwind CSS",
    avatar: "tailwindcss.png"
} ]);
