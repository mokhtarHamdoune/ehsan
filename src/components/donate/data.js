import help_people1 from '../../images/help-people-1.jpg';
import help_people3 from '../../images/help-people-3.jpg';
import help_people2 from '../../images/ben-white.jpg';
import user_pic from '../../images/user-picture.png';
const publications=[
    {
        id:1,
        user_pic:{src:user_pic,alt:'the publisher'},
        images:[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}],
        progress:{
            current:50,
            goal:120,
            donners:1600
        },
        publisher:{
            user_name:'Logan Paul',
            birth:'10-05-1996',
            address:'075,Los Angelos California'
        },
        about:{
            type:'Surgery',
            situation:'Red',
            pub_date:'26-11-2020',
            pub_hour:'22:15'
        },
        pub_date:'19-12-2020'
    },
    {
        id:2,
        user_pic:{src:user_pic,alt:'the publisher'},
        images:[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}],
        progress:{
            current:200,
            goal:300,
            donners:1200
        },
        publisher:{
            user_name:'Mohammed Hamdoune',
            birth:'24-07-1996',
            address:'075,Houssin Abdelkader,Souani'
        },
        about:{
            type:'Surgery',
            situation:'Medium',
            pub_date:'24-08-2020',
            pub_hour:'2:38'
        },
        pub_date:'19-12-2020'
    }

]

export default publications;