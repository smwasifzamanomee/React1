//ThingsYouNeed icons
import {GiNotebook, GiWorld} from 'react-icons/gi'
import {AiTwotoneCar} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'


//NavList
const navList = [
    {id: 1, name: 'Services', route: '/services'},
    {id: 2, name: 'About Us', route: '/about-us'},
    {id: 3, name: 'Testimonies', route: '/testimonies'},
    {id: 4, name: 'FAQ', route: '/faq'},
    {id: 5, name: 'Contact Us', route: '/contact-us'},
]

//ThingsYouNeed Data
const ThingsYouNeedData = [
    {
        id: 1,
        IconItem: HiLocationMarker,
        title: "Select Destination",
        description: "Completes all the work associated with planning and processing"
    },
    {
        id: 2,
        IconItem: GiNotebook,
        title: "Select Destination",
        description: "Completes all the work associated with planning and processing"
    },
    {
        id: 3,
        IconItem: AiTwotoneCar,
        title: "Select Destination",
        description: "Completes all the work associated with planning and processing"
    },
    {
        id: 4,
        IconItem: GiWorld,
        title: "Select Destination",
        description: "Completes all the work associated with planning and processing"
    },
]
// Footer Data
const footerData = {
    company:[
        {id: 1, name: 'About'},
        {id: 2, name: 'Careers'},
        {id: 3, name: 'Logistic'},
        {id: 4, name: 'Privacy & Policy'},
    ],
    contact: [
        {id: 1, name: 'Help/FAQ'},
        {id: 2, name: 'Press'},
        {id: 3, name: 'Affilates'},
    ],
    more: [
        {id: 1, name: 'Press Centre'},
        {id: 2, name: 'Our Blog'},
    ]
}

export{
    navList,
    ThingsYouNeedData,
    footerData

}