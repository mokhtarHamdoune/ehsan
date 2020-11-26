import help_people1 from '../../images/help-people-1.jpg';
import help_people3 from '../../images/help-people-3.jpg';
import help_people2 from '../../images/ben-white.jpg';

const publications=[
    {
        id:1,
        images:[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}],
        progress:{
            current:50,
            goal:120,
            donners:1600
        },
        publisher:{
            name:'Logan',
            surname:'Paul',
            birth:'10-05-1996',
            address:'075,Los Angelos California'
        },
        about:{
            type:'Surgery',
            situation:'Red',
            pub_date:'26-11-2020',
            pub_hour:'22:15'
        }
    },
    {
        id:2,
        images:[{src:help_people1,alt:'family has a modest house'},{src:help_people3,alt:'2 chldren help each other in the hospital'},{src:help_people2,alt:'Child present his muscle'}],
        progress:{
            current:200,
            goal:300,
            donners:1200
        },
        publisher:{
            name:'Mohammed',
            surname:'Hamdoune',
            birth:'24-07-1996',
            address:'075,Houssin Abdelkader,Souani'
        },
        about:{
            type:'Surgery',
            situation:'Medium',
            pub_date:'24-08-2020',
            pub_hour:'2:38'
        }
    }

]

export default publications;