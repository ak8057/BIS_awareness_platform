const GsapHeader = () => (
  <header className="py-16 pb-8 bg-gradient-to-b from-[#080D27] via-gray-900 to-black relative overflow-hidden">
    <div className="px-12 relative z-10">
      <h1 className="text-[90px] font-extrabold uppercase text-white relative leading-none tracking-wide">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          BIS Image
        </span>
        <span className="block text-[80px] font-semibold text-gray-300 mix-blend-overlay relative">
          Gallery
          <span className="absolute inset-0 text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-700 -z-1 filter blur-lg opacity-40">
            Gallery
          </span>
        </span>
      </h1>
    </div>

    {/* Decorative Elements */}
    <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-blue-500 to-gray-700 rounded-full blur-3xl opacity-30 -top-10 -left-10"></div>
    <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-gray-800 to-blue-900 rounded-full blur-3xl opacity-30 -bottom-20 -right-20"></div>
  </header>
);

export default GsapHeader;
