
import Card from './cmp/Card'



const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "frontend Engineer",
        tag3:"senior level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo:"https://static.vecteezy.com/system/resources/thumbnails/014/018/561/small/amazon-logo-on-transparent-background-free-vector.jpg" ,
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Backend Developer",
        tag3:"junior level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/120px-Apple_logo_black.svg.png",
    companyName: "Apple",
    datePosted: "10 days ago",
    tag1: "Part Time",
    tag2: "iOS developer",
        tag3:"senior level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Netflix_2016_N_logo.svg/120px-Netflix_2016_N_logo.svg.png",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Machine learning",
        tag3:"senior level",
    pay: "$90/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/67/51/d6/6751d6513590a0ec3e07a98a010fe0fb.jpg",
    companyName: "Meta",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Clodu Solution Architech",
        tag3:"junior level",
    pay: "$70/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Data Analytic",
        tag3:"junior level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/330px-Tesla_Motors.svg.png?_=20220430025811",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    tag1: "Part Time",
    tag2: "Software Engineer",
        tag3:"senior level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandLogo:"https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo-500x281.png" ,
    companyName: "Adobe",
    datePosted: "8 days ago",
    tag1: "Full Time",
    tag2: "UI/UX Designer",
        tag3:"senior level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/960px-Uber_logo_2018.svg.png?_=20180914002846",
    companyName: "Uber",
    datePosted: "12 days ago",
    tag1: "Full Time",
    tag2: "AI Expert",
        tag3:"junior level",
    pay: "$75/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-500x281.png",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    tag1: "Part Time",
    tag2: "Full Stack Developer",
    tag3:"senior level",
    pay: "$68/hr",
    location: "Delhi, India"
  }
];
  return (
    <div className='Parent'>

{jobOpenings.map(function(elem,idx){
  return<div key={idx}> 
  <Card  company={elem.companyName} posted={elem.datePosted} post={elem.tag2}
  tag1={elem.tag1} tag3={elem.tag3} pay={elem.pay} location={elem.location} logo={elem.brandLogo}/>
  </div>
})}
    </div>
  )
}

export default App


