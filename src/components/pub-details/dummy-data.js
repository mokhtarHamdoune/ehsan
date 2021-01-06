import user_pic from '../../images/user-picture.png';
import img1 from '../../images/aaron.jpg';
import img2 from '../../images/butterfly-effect.jpg';
import img3 from '../../images/charity-comunity-1.jpg';
import img4 from '../../images/help-people-1.jpg';
import img5 from '../../images/help-people-2.jpg';
import img6 from '../../images/help-people-3.jpg';
const dummy_data=[{
    id:1,
    user_pic:{src:user_pic,alt:'the publisher'},
    isFaved:false,
    images:[{src:img1,alt:'white flower'},{src:img2,alt:'butterfly effect'},{src:img3,alt:'donate to charity'}],
    progress:{
        current:50,
        goal:120,
        donners:1600
    },
    publisher:{
        user_name:'John Paul',
        birth:'10-05-1996',
        address:'075,Los Angelos California',
        phoneN:'0686884133'
    },
    about:{
        title:'Surgery for the Heart',
        type:'Surgery',
        situation:'Red',
        description:'Integer rutrum magna urna, non commodo magna imperdiet nec. Nunc facilisis sagittis enim nec semper. Sed bibendum nulla eget hendrerit condimentum. Proin auctor bibendum efficitur. Suspendisse potenti. Mauris eget ligula et eros tincidunt suscipit. Donec tristique lorem sit amet nisl elementum fermentum. Nulla eget neque tincidunt tellus gravida cursus vel a neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam laoreet tincidunt turpis non interdum. Praesent at metus eu elit gravida suscipit eu at arcu. Fusce ipsum nisi, luctus et dolor quis, consequat fringilla nibh.'
    },
    links:{
        facebook:'https://www.facebook.com',
        instagram:'https://www.instagram.com'
    },
    pub_date:'mon. 14 dec.2020 22:15'
},
{
    id:2,
    user_pic:{src:user_pic,alt:'the publisher'},
    isFaved:false,
    images:[{src:img4,alt:'help people 1'},{src:img5,alt:'help people 2'},{src:img6,alt:'help people 3'}],
    progress:{
        current:200,
        goal:300,
        donners:1200
    },
    publisher:{
        user_name:'Mekho Hamdoune',
        birth:'24-07-1997',
        address:'075,Houssin Abdelkader,Souani',
        phoneN:'0675984587'
    },
    about:{
        title:'Surgery for Right Leg',
        type:'Surgery',
        situation:'Yellow',
        description:'Integer rutrum magna urna, non commodo magna imperdiet nec. Nunc facilisis sagittis enim nec semper. Sed bibendum nulla eget hendrerit condimentum. Proin auctor bibendum efficitur. Suspendisse potenti. Mauris eget ligula et eros tincidunt suscipit. Donec tristique lorem sit amet nisl elementum fermentum. Nulla eget neque tincidunt tellus gravida cursus vel a neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam laoreet tincidunt turpis non interdum. Praesent at metus eu elit gravida suscipit eu at arcu. Fusce ipsum nisi, luctus et dolor quis, consequat fringilla nibh.'
    },
    links:{
        facebook:'https://www.facebook.com',
        instagram:'https://www.instagram.com',
        twitter:'https://www.twitter.com'
    },
    pub_date:'mon. 14 dec.2020 22:15'
}]
export default dummy_data;