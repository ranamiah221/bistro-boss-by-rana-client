import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "../Featured/Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-5 ">
      <SectionTitle
        subHeader="check it out"
        header="Featured items"
      ></SectionTitle>
      <div className="md:flex justify-between bg-slate-600 bg-opacity-50 items-center py-20 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>March 25, 2024</p>
          <p className="uppercase text-xl font-medium">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            veritatis recusandae atque voluptatum non sapiente illo facilis et
            eos? Ex numquam delectus perspiciatis minus veniam aliquid pariatur
            sunt modi dolor repellat enim odit, quas maxime? Veniam tenetur
            reprehenderit ratione quam sapiente perferendis assumenda modi
            accusamus omnis voluptas aut, similique adipisci!
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
