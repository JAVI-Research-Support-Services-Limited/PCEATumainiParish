export default function Statement() {
  return (
    <div className="py-20 relative bg-white">
      <div className="mx-auto w-[90%] max-w-[1246px] px-6">
        <div className="relative overflow-hidden pb-20">
          <div className="border-b border-gray-200 pb-20 pr-6 lg:max-w-[59.5%]">
            <div className="bg-[#0e0e0e] h-1 mb-8 w-[100px]" />

            <h2 className="text-[44px] font-extrabold tracking-[0.88px] leading-[58px] mb-4 max-w-[548px] text-black">
              In our church, we
              <br />
              love and <span className="whitespace-nowrap">trust Jesus</span>
            </h2>

            <p className="mb-14 text-muted-foreground max-w-[620px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit urna vitae ac
              vitae lacus ac proin ultricies eleifend dui ut felis bibendum ut
              amet nunc turpis diam urna quam congue. Tortor in egestas
              imperdiet posuere duis enim lectus consectetur arcu ac id in
              mauris.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="/news"
                className="inline-block bg-black text-white font-semibold tracking-wide uppercase px-6 py-3 border-b-[1.25px] border-black transition-colors"
              >
                Church News
              </a>

              <a
                href="/calendar"
                className="inline-block bg-white text-black font-semibold tracking-wide uppercase px-6 py-3 border border-gray-200 transition-colors"
              >
                Event Calendar
              </a>

              <a
                href="/about#statement"
                className="inline-block bg-black text-white font-semibold tracking-wide uppercase px-8 py-3 border-b-[1.25px] border-black transition-colors"
              >
                Statement of Faith
              </a>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 hidden md:block w-1/2 max-w-[620px]">
            <img
              src="https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60df90b7e80d802edea764c7_image-1-about-church-x-template-p-800.jpeg"
              alt="Our Church"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
