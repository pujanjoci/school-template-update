const Layout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div
        className="md:col-span-2 md:row-span-2 bg-cover bg-center rounded-xl overflow-hidden"
        style={{ backgroundImage: `url('./src/assets/bg-home.png')` }}
      >
        <div className="p-8 text-white bg-indigo-950/80 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p>We foster holistic learning, critical thinking, and inclusive community engagement.</p>
          <a href="#approach" className="mt-4 inline-block text-sm underline text-yellow-400">
            Learn More
          </a>
        </div>
      </div>
      <div className="md:col-span-2 bg-red-700 p-8 text-white rounded-xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Admission</h2>
        <p>Join our vibrant academic community and embark on a journey of lifelong discovery.</p>
        <a href="#admission" className="mt-4 inline-block text-sm underline">
          Enroll Today
        </a>
      </div>
    </div>
  );
};

export default Layout;
