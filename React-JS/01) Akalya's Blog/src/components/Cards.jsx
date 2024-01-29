import { Link } from "react-router-dom";
const Cards = () => {
  const postInfo = [
    
    {
      id: 1,
      img: "https://www.backpacksters.com/wp-content/uploads/2020/02/India-Coorg-Kushalnagar-Namdroling-Monastery-21.jpg",
      title: "A Weekend Trip To Coorg ",
      category:"Travel",
      date: "Jan 25 , 2024",
      content:
        "Coorg is famous for its natural beauty and lush green cover. And the climate? Coorg weather is the reason why many Kannadigas rush to Madikeri and the other towns in the foresty district. So how do you plan a weekend trip to Coorg? Here’s all you the info you need.",
    },
    {
      id: 2,
      img: "https://www.enzazaden.com//us/-/media/images/enza-zaden/list-images-640x480/01_products-services/02-trends-and-inspiration/2020/li_2020_healthy-food-heart.jpg",
      title: "Fueling Your Body Right: A Guide to Balanced Food Habits",
      category:"Food",
      date: "Jan 20 , 2024",
      content:
        "Maintaining a balanced diet is essential for overall health and well-being. The food we consume plays a crucial role in providing our bodies with the necessary nutrients, energy, and building blocks for optimal functioning.",
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/620d593c0cff284f05f9cb95/625091a96cb932f79c70dd17_PS%20Pilates%20Studio%20Highlands%20Colorado%20Denver.jpg",
      title: "Slimming Down with Pilates: A Gentle Path to Weight Loss",
      category:"Fitness",
      date: "Jan 15 , 2024",
      content:
        "Losing weight doesn't always mean high-intensity workouts. Pilates, known for its low-impact exercises, offers a unique approach to weight loss, focusing on building lean muscle, boosting metabolism, and fostering a mind-body connection.",
    },
  ];
  console.log(postInfo);
  const blogPostTemplate = postInfo.map((post) => {
    return (
      <div className="mb-5 bg-gray-100 px-5 py-5 rounded-lg ">
        <img
          src={post.img}
          alt="pilates image" className="w-[stretch]"
        />
        <div>
          <h3 className="font-bold text-black pt-5 text-justify">{post.title}</h3>
          <p className="text-gray-400 pt-1">{post.category} - {post.date}</p>
          <p className="pt-1 text-justify">{post.content}</p>
          <div className="flex justify-center my-5">
          <Link to={post.category}>
          <button type="button" className="bg-lightSecondary px-5 py-2 rounded-md font-semibold hover:bg-lightPrimary hover:text-white">Read More</button>
          </Link>
          </div>
        </div>
      </div>
    );
  });

  return <div className="w-[full] ">{blogPostTemplate}</div>;
};
export default Cards;
