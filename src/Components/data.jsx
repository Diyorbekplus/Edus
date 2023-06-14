import one from "../Images/Carousel/one.jpg"
import two from "../Images/Carousel/two.jpg"
import three from "../Images/Carousel/three.jpg"
import one1 from "../Images/Courses/one.jpg"
import two2 from "../Images/Courses/two.jpg"
import three3 from "../Images/Courses/three.jpg"
import four4 from "../Images/Courses/four.jpg"
import onet from "../Images/Persons/one.jpg"
import twot from "../Images/Persons/two.jpg"
import threet from "../Images/Persons/three.jpg"
import fourt from "../Images/Persons/four.jpg"

/* Shopping Products Images */
import pen from "../Images/ShoppingProducts/pen.jpg"
import pen2 from "../Images/ShoppingProducts/pen2.jpg"
import bag from "../Images/ShoppingProducts/bag.jpg"
import bag2 from "../Images/ShoppingProducts/bag2.jpg"
import bag3 from "../Images/ShoppingProducts/bag3.jpg"
import notebook from "../Images/ShoppingProducts/notebook.jpg"
import notebook2 from "../Images/ShoppingProducts/notebook2.jpg"

import oneadvisers from "../Images/Advisors/one.jpg"
import twoadvisers from "../Images/Advisors/two.jpg"
import threeadvisers from "../Images/Advisors/three.jpg"
import fouradvisers from "../Images/Advisors/four.jpg"
import fiveadvisers from "../Images/Advisors/five.jpg"
import sixadvisers from "../Images/Advisors/six.jpg"
import sevenadvisers from "../Images/Advisors/seven.jpg"
import eightadvisers from "../Images/Advisors/eight.jpg"
import eventOne from "../Images/Events/one.jpg"
import eventTwo from "../Images/Events/two.jpg"
import eventThree from "../Images/Events/three.jpg"

import { MdGroups,MdOutlineDataset } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { HiTrophy } from "react-icons/hi2";
import { GiCoffeeCup } from "react-icons/gi";
import { TbCoin } from "react-icons/tb";
import { FaTree, FaLaptop } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { MdLocationOn, MdOutlineMailOutline, MdPhone } from "react-icons/md";

export const navLinks = [
    {
        id: 1,
        title: "home",
        direction: "/",
    },
    {
        id: 2,
        title: "pages",
        dropdown: [
            {
                id: 21,
                title: 'About Us',
                link: "/about"
            },
            {
                id: 22,
                title: 'FAQ',
                link: "/faq"
            },
            {
                id: 23,
                title: 'Contact Us',
                link: "/contact"
            },
            {
                id: 24,
                title: 'Events',
                link: "/events"
            },
            {
                id: 25,
                title: 'Galleries',
                link: "/galleries"
            },
            {
                id: 26,
                title: 'Membership Plans',
                link: "/membership"
            },
            {
                id: 27,
                title: 'Profile',
                link: "/profile"
            }
        ]
    },
    {
        id: 3,
        title: "courses",
        direction: "/courses",
    },
    {
        id: 4,
        title: "shop",
        direction: "/shop",
    },
    {
        id: 5,
        title: "blog",
        direction: "/blog",
    },
]

export const carousel = [
    {
        id: 1,
        active: "active",
        title1: "Best Education",
        title2: "Center",
        subtitle: "Empowering Minds, Transforming Futures: The Online Education Center",
        img: one,
    },
    {
        id: 2,
        title1: "Virtual Learning",
        title2: "Hub",
        subtitle: "Igniting Brilliance, Nurturing Potential: Your Journey to Excellence at the Premier Education Hub",
        img: three,
    },
    {
        id: 3,
        title1: "Collaborative Learning Hub",
        title2: "Center",
        subtitle: "Uniting Minds, Fostering Collaboration in Online Education",
        img: two,
    }
]

export const features = [
    {
        id: 1,
        img: <MdGroups/>,
        title: "Exclusive Advisor",
        text: "Neque convallis a cras semper auctor neque vitae. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing",
        color: "#021E66",
        link: ""
    },
    {
        id: 2,
        img: <FaLaptopCode/>,
        title: "Digital Laboratory",
        text: "Eget sit amet tellus cras adipiscing enim eu turpis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus",
        color: "#F73668",
        link: ""
    },
    {
        id: 3,
        img: <HiTrophy/>,
        title: "Reached Your Goals",
        text: "Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi",
        color: "#159947",
        link: ""
    },
]

export const upcomingCourses = [
    {
        id: 1,
        img: one1,
        price: 70,
        title: "Business Management",
        type: "Business",
        studentsAmount: 5,
        startDate: '23h 10m',
        lessonsAmount: 15
    },
    {
        id: 2,
        img: three3,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        studentsAmount: 10,
        startDate: '33h 10m',
        lessonsAmount: 10
    },
    {
        id: 3,
        img: two2,
        price: 30,
        title: "English For Today",
        type: "Language",
        studentsAmount: 25,
        startDate: '20h 10m',
        lessonsAmount: 25
    },
    {
        id: 4,
        img: four4,
        price: 70,
        title: "Business Management",
        type: "Business",
        studentsAmount: 5,
        startDate: '23h 10m',
        lessonsAmount: 15
    },
    {
        id: 5,
        img: two2,
        price: 100,
        title: "Computer Engginering",
        type: "Technology",
        studentsAmount: 5,
        startDate: '13h 10m',
        lessonsAmount: 10
    },
    {
        id: 6,
        img: one1,
        price: 70,
        title: "Business Management",
        type: "Business",
        studentsAmount: 5,
        startDate: '23h 10m',
        lessonsAmount: 15
    },
    {
        id: 7,
        img: four4,
        price: 60,
        title: "General Science Last",
        type: "Science",
        studentsAmount: 15,
        startDate: '3h 10m',
        lessonsAmount: 10
    },
]

export  const testimonials = [
    {
        id: 1,
        img: onet,
        name: "Mustafa",
        status: "Web Designer",
        text: "Edus has provided me, as a busy parent, with the flexibility to pursue my educational goals while still being present for my children. The collaborative features and supportive community have made it an invaluable resource for my personal and professional growth."
    },
    {
        id: 2,
        img: twot,
        name: "Rahmatjon",
        status: "Architect",
        text: "Balancing parenthood and academics can be overwhelming, but Edus has been a lifeline for me. The collaborative tools and understanding of the unique needs of student parents have made it possible for me to continue my education without sacrificing time with my children."
    },
    {
        id: 3,
        img: threet,
        name: "Mardon",
        status: "Mathematic",
        text: "Edus understands the challenges faced by student parents. It provides an inclusive and supportive environment, along with valuable collaborative opportunities, that have helped me find the perfect balance between my role as a parent and my pursuit of higher education."
    },
    {
        id: 4,
        img: fourt,
        name: "Anvar",
        status: "3D Designer",
        text: "Edus has been a game-changer for me as a student parent. The collaborative learning environment and supportive community have allowed me to seamlessly balance my studies with my parenting responsibilities. It's an incredible platform that understands and caters to the unique challenges we face, providing the tools and resources needed to succeed."
    },
    {
        id: 5,
        img: threet,
        name: "Farrux",
        status: "Lawyer",
        text: "Thanks to Edus, I've been able to excel as a student parent. The user-friendly interface and collaborative features have made it easier than ever to pursue my education while fulfilling my parental duties. The support from both faculty and fellow student parents has been invaluable in creating a positive and empowering learning experience."
    },
    
]

export const advantages = [
    {
        id: 1,
        icon: <FaLaptopCode/>,
        title: "Teaching In Digital Classroom",
        text: "Faucibus turpis in eu mi bibendum neque egestas. Euismod lacinia at quis risus sed vulputate"
    },
    {
        id: 2,
        icon: <GiCoffeeCup/>,
        title: "We Arrange Many Events & Meetup",
        text: "Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a"
    },
    {
        id: 3,
        icon: <TbCoin/>,
        title: "100% Tuition Fee & No Extrea Charge",
        text: "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tellus integer feugiat"
    },
    {
        id: 4,
        icon: <FaTree/>,
        title: "Natural Compass And Playgrounds",
        text: "Aliquam etiam erat velit scelerisque consectetur. Quis enim lobortis scelerisque fermentum dui faucibus in ornare"
    }
]

export const advisors = [
    {
        id: 1,
        img: oneadvisers,
        name: "Ahad"
    },
    {
        id: 2,
        img: twoadvisers,
        name: "Anisha"
    },
    {
        id: 3,
        img: sixadvisers,
        name: "Kariya"
    },
    {
        id: 4,
        img: fouradvisers,
        name: "Falak"
    },
    {
        id: 5,
        img: fiveadvisers,
        name: "Humoyun"
    },
    {
        id: 6,
        img: threeadvisers,
        name: "Daler"
    },
    {
        id: 7,
        img: sevenadvisers,
        name: "Yahyo"
    },
    {
        id: 8,
        img: eightadvisers,
        name: "Murod"
    },
]

export const FaqQuestion = [
    {
        id: 1,
        order: "one",
        title: "What is online learning like?",
        text: `For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. `
    },
    {
        id: 2,
        order: "two",
        title: "Can I learn at my own pace?",
        text: `Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are. `
    },
    {
        id: 3,
        order: "three",
        title: "Are you accredited or licensed by educational organizations?",
        text: ` Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone. `
    },
    {
        id: 4,
        order: "four",
        title: "Does online learning really work?",
        text: `On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into`
    },
]
export const showFaqQuestion = [
    {
        id: 5,
        order: "five",
        title: "What types of assignments do you give?",
        text: `Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. `
    },
    {
        id: 6,
        order: "six",
        title: "What are the requirements to take the courses or sign up with your website?",
        text: `People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those.`
    },
    {
        id: 7,
        order: "seven",
        title: "What are the technology requirements?",
        text: `In the same vein, people need to know whether their computers are up to snuff. You’ll want to explain all the software that you use and what kind of technology people need to take your online courses. If there are certain programs or applications used, put those here. `
    },
    {
        id: 8,
        order: "eight",
        title: "How long does each course take?",
        text: `Some online courses are just a few hours long, while others last a few months. Depending on the type of online learning that you offer, your courses may have their own variable lengths. Explain to people the types of courses that you have available and what the time frame is for each one. `
    },
]

export const connection = [
    {
        id: 1,
        icon: <MdLocationOn/>,
        data: ["Naqshbandiy Street 7", "Turtkul, Karakalpakstan"]
    },
    {
        id: 2,
        icon: <MdOutlineMailOutline/>,
        data: ["diyorbekplus@gmail.com", "www.diyuller.com"]
    },
    {
        id: 3,
        icon: <MdPhone/>,
        data: ["+998 91 387 51 17", "+998 97 374 11 77"]
    },
]

export const events = [
    {
        id: 1,
        img: eventOne,
        title: ""
    },
    {
        id: 2,
        img: eventTwo,
        title: ""
    },
    {
        id: 3,
        img: eventThree,
        title: ""
    },
]

export const galleries = [
    {
        id: 1,
        img: one
    },
    {
        id: 2,
        img: two
    },
    {
        id: 3,
        img: three
    },
    {
        id: 4,
        img: one1
    },
    {
        id: 5,
        img: two2
    },
    {
        id: 6,
        img: three3
    },
    {
        id: 7,
        img: eventOne
    },
    {
        id: 8,
        img: eventTwo
    },
    {
        id: 9,
        img: onet
    },
    {
        id: 10,
        img: one1
    },
]

export const membershipPlans = [
    {
        id: 1,
        icon: <FiBookOpen/>,
        title: "Basic Plan",
        price: 25,
        duration: "Per 30 days",
        tips: [
            "Event & Program",
            "Free Book & Computer",
            "Advance All Program"
        ]
    },
    {
        id: 2,
        icon: <FaLaptop/>,
        title: "Standard Plan",
        price: 100,
        duration: "Per 6 months",
        tips: [
            "Event & Program",
            "Free Book & Computer",
            "Advance All Program"
        ]
    },
    {
        id: 3,
        icon: <MdOutlineDataset/>,
        title: "Gold Plan",
        price: 250,
        duration: "Per Year",
        tips: [
            "Event & Program",
            "Free Book & Computer",
            "Advance All Program"
        ]
    }
]

export const courses = [
    {
        id: 1,
        img: eventTwo,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 2,
        img: two2,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 3,
        img: eventTwo,
        price: 80,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 4,
        img: eventOne,
        price: 140,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 5,
        img: eventTwo,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 6,
        img: one1,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 7,
        img: two2,
        price: 50,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 8,
        img: eventTwo,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 9,
        img: two2,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 10,
        img: three3,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },    {
        id: 11,
        img: eventTwo,
        price: 190,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 12,
        img: eventTwo,
        price: 90,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 13,
        img: eventTwo,
        price: 40,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 14,
        img: eventTwo,
        price: 60,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
    {
        id: 15,
        img: eventTwo,
        price: 30,
        title: "Computer Management",
        type: "Technology",
        text: "Arcu non odio euismod lacinia at quis risus sed vulputate. Eu nisl nunc mi ipsum faucibus vitae. Dictum non consectetur a erat."
    },
]

export const shopProducts = [
    {
        id: 1,
        img: pen,
        title: "Pen",
        price: 2,
    },
    {
        id: 2,
        img: pen2,
        title: "Pen",
        price: 2,
    },
    {
        id: 3,
        img: bag,
        title: "Bag",
        price: 2,
    },
    {
        id: 4,
        img: bag2,
        title: "Bag",
        price: 2,
    },
        {
        id: 5,
        img: bag3,
        title: "Bag",
        price: 2,
    },
    {
        id: 6,
        img: notebook,
        title: "Notebook",
        price: 2,
    },
    {
        id: 7,
        img: notebook2,
        title: "Pen",
        price: 2,
    },
    {
        id: 8,
        img: pen,
        title: "Pen",
        price: 2,
    },
    {
        id: 9,
        img: notebook,
        title: "Notebook",
        price: 2,
    },
    {
        id: 10,
        img: bag,
        title: "bag",
        price: 2,
    },
    {
        id: 11,
        img: bag2,
        title: "Bag",
        price: 2,
    },
    {
        id: 12,
        img: notebook,
        title: "Notebook",
        price: 2,
    },
    {
        id: 13,
        img: pen2,
        title: "Pen",
        price: 2,
    },
    {
        id: 14,
        img: bag,
        title: "Bag",
        price: 2,
    },
    {
        id: 15,
        img: notebook,
        title: "noNtebook",
        price: 2,
    },

]

export const news = [
    {
        id: 1,
        img: eventTwo,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 2,
        img: eventThree,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Civil Engineering",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 3,
        img: eventTwo,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 4,
        img: eventTwo,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 5,
        img: eventOne,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 6,
        img: eventTwo,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 7,
        img: eventOne,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 8,
        img: eventTwo,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
    {
        id: 9,
        img: eventOne,
        admin : "admin",
        date: "November 20,2022",
        comments: 20,
        type: "Business Studies",
        title: "Designing Users Across Interview With Jemy",
        text: "Iaculis nunc sed augue lacus viverra vitae. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et"
    },
]

export const newCategories = [
    {
        id: 1,
        title: "Business Studies",
        count: 3
    },
    {
        id: 2,
        title: "Civil Engineering",
        count: 3
    },
    {
        id: 3,
        title: "Computer Engineering",
        count: 2
    },
    {
        id: 4,
        title: "General Science",
        count: 2
    },
    {
        id: 5,
        title: "Graphics Design",
        count: 2
    },
]

export const recentPosts = [
    {
        id: 1,
        title :"Designing Users Across Interview With Jemy",
        img: eventTwo,
        date: "November 10, 2022"
    },
    {
        id: 2,
        title :"Month Web Development Update React Hook",
        img: eventTwo,
        date: "November 10, 2022"
    },
    {
        id: 3,
        title :"Exploring The Latest Web Design Trends",
        img: eventTwo,
        date: "December 15, 2022"
    },
]