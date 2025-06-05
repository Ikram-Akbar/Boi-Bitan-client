import bannerImg from "../../src/assets/books.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-100 px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Boi Bitan
          </h1>
          <p className="text-gray-600 mb-6">
            Discover your next favorite book from our extensive collection. Dive into the world of stories and knowledge.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Explore Now
          </button>
        </div>

        {/* Image Placeholder */}
        <div className="w-full md:w-1/2">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
