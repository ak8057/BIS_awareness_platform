import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-screen max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="space-y-6">
        <span className="block mb-4 text-xs md:text-sm text-indigo-600 font-medium uppercase tracking-wide">
          Mandatory Certification
        </span>
        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          BIS Certification Scheme
        </h3>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Explore the comprehensive range of products covered under the Bureau
          of Indian Standards (BIS) Mandatory Certification: Scheme – I (ISI
          Mark Scheme).
        </p>
        <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95">
          Learn More
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Cement",
    description:
      "Ensuring quality and durability standards for construction materials.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Household Electrical Goods",
    description:
      "Safety checks for electrical products like fans, irons, and heaters.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
    title: "Batteries",
    description: "Testing for efficiency and safety of battery systems.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
    title: "Oil Pressure Stoves",
    description: "Certifying reliability and performance for household stoves.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1325&q=80",
    title: "Automobile Accessories",
    description: "Quality checks for accessories like mirrors and wipers.",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Cylinder, Valves, and Regulators",
    description: "Ensuring safety for essential LPG products.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Medical Equipment",
    description: "Certifying accuracy and safety in healthcare devices.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=684&q=80",
    title: "Steel and Iron Products",
    description: "Testing structural strength and composition.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
    title: "Electrical Transformers",
    description: "Ensuring reliability in power distribution systems.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=870&q=80",
    title: "Capacitors",
    description:
      "Verifying performance of electrical energy storage components.",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=684&q=80",
    title: "Chemicals, Fertilisers, Polymers & Textiles",
    description: "Certifying eco-friendly and efficient production methods.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=870&q=80",
    title: "Kitchen Appliances",
    description: "Quality and safety testing for home appliances.",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1820&q=80",
    title: "Domestic Water Heaters (LPG)",
    description: "Ensuring energy efficiency and safety in water heaters.",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=686&q=80",
    title: "Air Conditioners and Parts",
    description: "Testing cooling systems and components for efficiency.",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=687&q=80",
    title: "Plugs and Socket-Outlets",
    description: "Certifying safe and reliable electrical connections.",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Energy Meters",
    description: "Ensuring precision and reliability in energy usage tracking.",
  },
];




const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };



  
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="relative w-full h-full group overflow-hidden cursor-pointer"
      onClick={() => setSelectedSquare(sq)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${sq.src})`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-sm font-medium">
          {sq.title}
        </p>
      </div>
    </motion.div>
  ));
};
  
  const closeModal = () => {
    setSelectedSquare(null);
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 rounded-lg overflow-hidden shadow-lg">
        {squares.map((sq) => sq)}
      </div>

      {selectedSquare && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={selectedSquare.src}
                alt={selectedSquare.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedSquare.title}
            </h4>
            <p className="text-gray-600">{selectedSquare.description}</p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ShuffleHero;
