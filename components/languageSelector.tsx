import React, { useEffect, useState, useRef } from "react";
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";

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

export default function LanguageSelector() {
    const router = useRouter();
    const { locale, locales } = useRouter();

    const [selected, setSelected] = useState(locale)
    const [show, setShow] = useState(false);
    const wrapperRef = useRef(null);

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

    useEffect(() => {
        router.push('/', '/', { locale: selected });
    }, [selected])

    useEffect(() => {
        function handleClickOutside(event) {
            if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef])

    return (
        <>
            <div className="group inline-block relative">
                <button className="relative nav-language shadow-sm mx-2 pl-3 pr-10 py-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onClick={() => setShow(true)}>
                    <span className="flex items-center">
                        <img src="/images/multilang.png" width={20} height={20}></img>
                        <span className="ml-3 block truncate ">{getLang(selected)}</span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-orange" aria-hidden="true" />
                    </span>
                </button>
                {
                    show && (
                        <div ref={wrapperRef} className="absolute z-10 right-1/2 transform translate-x-1/2 mt-1 w-96 bg-indigo rounded-md py-1 text-base ring-2 ring-orange ring-opacity-100 sm:text-sm">
                            <div className="grid grid-cols-2">
                                {locales.map((item, index) => (
                                    <div key={index} onClick={() => setSelected(item)}>
                                        <div className="flex flex-row items-center cursor-pointer">
                                            <span className={item === locale ? 'mx-8 my-2 block truncate text-xl text-orange' : 'mx-8 my-2 block truncate text-xl'}>
                                                {getFullName(item)}
                                            </span>
                                            {item === locale ? (
                                                <span className='text-orange'>
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}