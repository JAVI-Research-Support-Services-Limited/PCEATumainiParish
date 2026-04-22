import "./ministries.css";
import { Link, useLocation } from "react-router-dom";

export const ministries = [
  {
    id: "kids",
    title: "Kids Ministry",
    subtitle: "Pearl Kids",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRmqPLAzLLWpzqLBdJMRPhtlBh1xJqwgBSxo5gBS43KkPIgWcATtcms-Dd-D3vxOxadj-n2RIVshpOfssUjIAMmcwHBdg1rFBc208XcMCqARk3apwrizDfUU5LiAP_4E8TlmGkU-pM1es7EI2OH_VxvjpW6hNZMKeC3cWNwp-7xf68HlxOXFXYzHajPPe_SsnvAJcHUciP-AJsV_sPuoI8r4cW11pUagBjk0aMzaO1ggbN6E88yrQGErmCPCKDFMhZjyXJGPrLywo",
    position: "bottom"
  },
  {
    id: "youth",
    title: "Youth Ministry",
    subtitle: "One Love",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMDqyAOcZEN2tkm4JyRgkiH_hHGOALX6oc6IK65e5K6nD_aSKU2Bgss19TrpvzO5B0NBvBgo2rWumQZEoZ8GzTbGauu6bDgn2DBN2oP__vsLqmtNrdXAhTk3By30YK-JZrPyrb0wtxo7JGmyiI3w5tx_umk0TSIEFm81wm9LI4q2o1nzwEuexoJlGkmyByZcA8-h3yDmCE1V0xdiHxoxG-6PlsgUPse3n1rDNU3G51Hd0z6Ddhc0F-MWI-aKn1w0ABmXeYBOf6e48",
    position: "bottom"
  },
  {
    id: "womens-guild",
    title: "Woman's Guild",
    subtitle: "Beautiful",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfHPWvLok8H72-B3iBsg0f6xXkboo56t77Gjzf2s2kcR7K-3SVNVRy5_wan2R-LHsKBsCzt1jHZpMgcyF11XJl0dIU3Xo4L5mGlRQMN4pufDRKpthaXWsaPOsN4ecaEaBD28-I9yCPYD2euoeUkH6aaqg3NA2u0RErO_QE6mj4rihcevvDhD9adKDXHzuFDfnoiGzldfCCeO26VvD2fgw8Hjp-1y_VF9b1VKpncqPTbIwcX3Ux47S3iKPIZXVLXSv2rhHkSaOWI0",
    position: "center",
    large: true
  },
  {
    id: "mens-fellowship",
    title: "Men's Fellowship",
    subtitle: "Beautiful Conference",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqQkmV0y4YgI9vsi_v8-xcKjHhNdUQ1gN1vgKc1zNrfqP1X9sZcdi_W5tEBqt2LmGCp5v37lQjPnnrJWV2zaqIZK8KJa9uSI0S0yRmoYU_dxOhNF9f-ocb-oh70Z6odilYWY_2AQw2ABOvx9t_GzMyLleyKg3Co3fBtL2xqDDOKC3zWfgJ2K2_vz2MbuyD_dqfI3p2epDhvzq8QIpkHIsHwPii6CqIAZLZHdnlf6QYYAEaKgmrofLUAPI8r8ypl-viL4-h0LsavpQ",
    position: "center"
  },
  {
    id: "brigade",
    title: "Brigade",
    subtitle: "Pearls of Hope",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASJxv14W5RnfgVUJ4SjsUIGVqf6yP93lR6-HjZrFHBsVCl9iwicHjIPhj-WUt7jFVMzlg9U3C9TlxtkpgJVUURnlYuL5oS81bq5PEMCcTcYt68WjI2S67wDPgoE9Qo5j1aOtv-G3lMstm9PWjgH8w9dXuTUqJbmy3yya3xZMxpdPmOQr9sA3sFk9ubCbx1ZQk_BUxDCf7CFGKH1WWlWExxh_6gwYrPwsCBosrDqEhILrodoeCp3lZ-FdCjR6dREXaB1AUMJSBtFwI",
    position: "bottom"
  },
  {
    id: "evangelism",
    title: "Evangelism",
    subtitle: "Español",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQWMy7sBT2NMcFv_ntNn2isM47QvHtAFO8SYz3qfl3uUsWzE5823hnyaS93EbuRX24IbbmHTTKbPjjnuklMKGbSX8Ke0iZEQ3Q4YZKGTpwPteEX3AT1pEV4nZHFiDtTFh-nObtMHiRTQq7MdJ14MXBGIiGdgf5TCTtnK0fgFmRwzBox0MxjdD5umN5rQJCFa3Q-FR97f5E-No22IlW9qf_N2F8nN_qnf9Kx6zxvfgxo5NJr_nA4QLoHWn2BgPdilVfBHf-wUEZzs",
    position: "bottom"
  },
  {
    id: "christian-education",
    title: "Christian Education",
    subtitle: "Growing in Faith",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    position: "bottom"
  },
  {
    id: "jprc",
    title: "JPRC",
    subtitle: "Justice & Peace",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    position: "bottom"
  },
  {
    id: "health-board",
    title: "Health Board",
    subtitle: "Caring for Wellness",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    position: "bottom"
  },
  {
    id: "choir",
    title: "Choir",
    subtitle: "Voices of Praise",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    position: "bottom"
  }
];

export default function Ministries() {
  const location = useLocation();
  
  // Detect church context from URL
  const churchPrefix = location.pathname.includes('/st-luke') 
    ? '/st-luke' 
    : location.pathname.includes('/mwihoko')
    ? '/mwihoko'
    : location.pathname.includes('/emmanuel')
    ? '/emmanuel'
    : '';

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <img
          alt="Worship background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrlUnSGa4tLNHsxNuQaclNo01Ms6Chu_xwBfxN586UZBp1Vd6swqJrOUdaJ_zxrNtU3bQQN1vicBU-Dx5FTNWN_81R6b8uzh1CWtwb61wu4YrOTFeVUPhPLaL1Uwmsng5ZhL23CqJKb43QpNFRSmWlzIKN3fpOWoFVeplC3pQEDTgH8aZDXRyoNTyEuZKxXpqPviFB4SYvwn3gpsKfDvJf0TecKgWDevSne2JYul0v4_HMbvfjJE2ycb14BK8cTBbZ7SX_5VB9DZg"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-white text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 uppercase">
            Ministries
          </h1>
          <div className="space-y-2">
            <p className="text-white text-lg md:text-xl font-bold tracking-widest uppercase">
              Our Programs & Ministries
            </p>
            <p className="text-white text-base md:text-lg opacity-90 font-medium uppercase tracking-tight">
              Our ministries are the place you can find life-giving community.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              className="relative h-[500px] group overflow-hidden cursor-pointer"
            >
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex flex-col items-center text-center px-6 ministry-overlay ${
                  ministry.position === "center"
                    ? "justify-center"
                    : "justify-end pb-12"
                }`}
              >
                <p className="text-white text-xs tracking-[0.2em] mb-2 uppercase opacity-80">
                  {ministry.subtitle}
                </p>
                <h3
                  className={`text-white font-bold mb-6 uppercase ${
                    ministry.large
                      ? "text-4xl md:text-5xl font-black tracking-tighter"
                      : "text-3xl"
                  }`}
                >
                  {ministry.title}
                </h3>
                {/* FIXED: Using absolute path with church prefix */}
                <Link
                  to={`${churchPrefix}/ministries/${ministry.id}`}
                  className="text-white text-xs font-bold tracking-widest border-b border-white/50 pb-1 hover:border-white transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
