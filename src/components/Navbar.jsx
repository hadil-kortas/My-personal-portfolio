import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();  
  const [ active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
 

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "nl", label: "Dutch", flag: "🇳🇱" },
    { code: "de", label: "German", flag: "🇩🇪" },
  ];

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);
  
  

  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >

        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link 
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
              setActive(""); 
              window.scrollTo(0, 0);
            }}
            >
          <div>
              <p className='text-white text-[18px] font-bold cursor-pointer flex'> Hadil Kortas &nbsp; <span
            className='sm:block hidden'>| {t('FullStack Web Developer')} </span>
            </p>
            {/*<p className='text-white text-[13px]'>kortashadil27@gmail.com</p>*/}
            
          </div>
              

            </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((Link) => (
                <li 
                  key={Link.id}
                  className={`${
                    active === Link.title
                    ? "text-white"
                    : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(Link.title)}
                  >

                  <a href={`#${Link.id}`}>{t(Link.title.toLowerCase())}</a>
                </li>
              ))}
                <li className="relative inline-block text-secondary text-[18px] ">
            <button
              onClick={() => setToggle(!toggle)}
              className="focus:outline-none"
            >
              {languages.find((lang) => lang.code === selectedLanguage).flag}
            </button>
            <div
              className={`${
                toggle ? "block" : "hidden"
              } absolute top-0 -right-14 mt-8 bg-white border rounded-md shadow-lg w-32`}
            >
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setToggle(false);
                  }}
                  className="cursor-pointer hover:bg-gray-200 p-2"
                >
                  {lang.flag} {lang.label}
                </div>
              ))}
            </div>
          </li>

            </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img 
              src={toggle ? close : menu}
              alt="menu"
              className='w-[28px] h-[28px]
              object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((Link) => (
                  <li 
                    key={Link.id}
                    className={`${
                      active === Link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium
                    cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }
                    }
                  >

                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}

              </ul>

            </div>
          </div>
        </div>

      </nav>
    
  )
}

export default Navbar