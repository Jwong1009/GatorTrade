/**********************************************************
 * FILE: routes/members.js
 * 
 * DESCRIPTION: Generates JS objects for each member that
 * holds their first name, last name, description, email,
 * github id, github link, image, and role.
 * 
 * CREATED BY: Joanne
**********************************************************/

const members = {
    patel: {
        fname: 'Kishan',
        lname: 'Patel',
        desc: '',
        email: "kpatel10@sfsu.edu",
        github_id: 'kp-4137',
        github_link: "https://github.com/kp-4137",
        image: "/images/patel.jpeg",
        role: 'Team Lead',
    },
    lei: {
        fname: 'Ze',
        lname: 'Lei',
        desc: 'Ze is in his last semester at SFSU. He is studying for a B.S. in Computer Science. He plays video games like Teamfight Tactics.',
        email: "zlei1@sfsu.edu",
        github_id: 'Frogger-Software',
        github_link: "https://github.com/Frogger-Software",
        image: "/images/generic-photo.jpg",
        role: 'Back-End Member, Github Master',
    },
    zaheer: {
        fname: 'Faisal',
        lname: 'Zaheer',
        desc: 'I love computers, I like math, and I enjoy learning how to code, so I incorporate all of that into my projects. I\'m also a huge Star Wars fan! "Parsec" is a unit of distance, not time!',
        email: "fzaheer@mail.sfsu.edu",
        github_id: 'Faisal-ZaheerVI',
        github_link: "https://github.com/Faisal-ZaheerVI",
        image: "/images/zaheer.jpg",
        role: 'Back-End Lead'
    },
    hernandez: {
        fname: 'Juan',
        lname: 'Hernandez',
        desc: 'Lacking direction, expecations, aspirations and overall motivation I decided to pursue Computer Science after someone told me there\'s money to be made.\nI\'ve regretted that decision with each passing day and realize I should have gone into the mountains to farm wasabi.\nI can write "Hello World" programs in C, C++, Python, Javascript, Java and not much else.\nNow what I lack in raw coding ability I don\'t make up with my level of creativity nor ingenuity.',
        email: "jhernandez54@mail.sfsu.edu",
        github_id: 'Juan-Hernandez7',
        github_link: "https://github.com/Juan-Hernandez7",
        image: "/images/juan_moleman.jpg",
        role: 'Back-End Member',
    },
    wong: {
        fname: 'Joanne',
        lname: 'Wong',
        desc: 'My most recent hobbies include playing games, listening to music, and watching dramas. Besides computer science, I enjoy many topics in psychology and sociology.',
        email: "jwong45@mail.sfsu.edu",
        github_id: 'Jwong1009',
        github_link: "https://github.com/Jwong1009",
        image: "/images/generic-photo.jpg",
        role: 'Front-End Member',
    },
    cheung: {
        fname: 'Michael',
        lname: 'Cheung',
        desc: 'I am a senior at San Francisco State University, and I am the frontend lead for this web application. \nI have knowledge in HTML, CSS, Javascript, Bootstrap and Node. I also have knowledge in C, C++, Java and Python. \nI enjoy playing Magic the Gathering and Flesh and Blood.',
        email: "mcheung12@mail.sfsu.edu",
        github_id: 'weirds111',
        github_link: "https://github.com/weirds111",
        image: "/images/Michael_Cheung_Photo.jpg",
        role: 'Front-End Lead',
    }

}


module.exports = members;