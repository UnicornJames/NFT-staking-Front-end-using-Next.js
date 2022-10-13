import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const lang = [
  {
    name: "English",
    sh_name: "En",
    code: "en"
  },
  {
    name: "Pусский",
    sh_name: "Ru",
    code: "ru"
  },
  {
    name: "汉语",
    sh_name: "Zh",
    code: 'zh'
  },
  {
    name: "Türkçe",
    sh_name: 'Tr',
    code: 'tr'
  },
  {
    name: "Français",
    sh_name: 'Fr',
    code: 'fr'
  },
  {
    name: "Español",
    sh_name: 'Es',
    code: 'es'
  },
  {
    name: "Português",
    sh_name: 'Pt',
    code: "pt"
  },
  {
    name: "한국어",
    sh_name: 'Ko',
    code: 'ko'
  },
  {
    name: "عربى",
    sh_name: 'Ar',
    code: 'ar'
  },
  {
    name: "Deutsch",
    sh_name: 'De',
    code: 'de'
  },
  {
    name: "日本語",
    sh_name: 'Ja',
    code: 'ja'
  }
];

export default function MenuPanel() {
  const { t } = useTranslation('common');
  const { locale, locales } = useRouter();
  const [showLang, setShowLang] = useState(0);
  const [selected, setSelected] = useState(locale)
  const router = useRouter();

  useEffect(() => {
    router.push('/', '/', { locale: selected });
  }, [selected])

  const getLang = (item: any) => {
    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code === item)
        return lang[i].sh_name;
    }
  }

  const getFullName = (item: any) => {
    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code === item)
        return lang[i].name;
    }
  }

  return (
    <>
      {(showLang === 0 || showLang === 2) && (
        <div className="relative menu-bg md:hidden flex px-2 py-6 z-10" style={{ position: 'sticky', top: '88px', height: '100vh' }}>
          <div className="px-4">
            <div className="space-y-1">
              <p className="py-2 text-orange text-xl"><Link href="/docs">{t('header.whitepaper')}</Link></p>
              <p className="py-2 text-orange text-xl"><Link href="https://github.com/HedgePlus">GitHub</Link></p>
              <div className="py-2 flex flex-row items-center" onClick={() => setShowLang(1)}>
                <img src="/images/multilang.png" width={20} height={20}></img>
                <p className="p-2 text-orange text-xl" >{getLang(locale)}</p>
              </div>
              <div className="mt-0 mb-16">
                <div className="right_social pt-4">
                  <div className="flex flex-row">
                    <div className="wrapper_circle mr-2">
                      <a href="https://t.me/hedgeplus_io">
                        <img src="/images/telegram.svg" alt="telegram logo" />
                      </a>
                    </div>
                    <div className="wrapper_circle mr-2">
                      <a href="https://discord.gg/hkqAHKUVGK">
                        <img src="/images/discord.svg" alt="discord logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }

      {showLang === 1 && (
        <div className="relative menu-bg md:hidden flex px-2 py-6 z-10" style={{ position: 'sticky', top: '88px', height: '100vh' }}>
          <div className="px-4 w-full">
            <div className="space-y-1">
              <div className="flex flex-col">
                <img className="w-4 transform -rotate-90 mb-4" src="/images/arrow-top.png" alt="top arrow" onClick={() => setShowLang(2)} />
                <div className="grid grid-cols-2">
                  {locales.map((item, index) => (
                    <span key={index} onClick={() => setSelected(item)} className={item === locale ? 'mx-8 my-2 block truncate text-xl text-orange text-center' : 'mx-8 my-2 block truncate text-xl text-center'}>
                      {getFullName(item)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
