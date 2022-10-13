import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FaqCard({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    <div
      className={`${
        isOpen ? "faq_card_active" : "faq_card"
      } px-5 sm:px-8 py-5 sm:py-6 mb-8`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="flex justify-between items-center">
        <p className="faq_question lg:mx-5">{t(`data.allFaq.${index}.faq_question`)}</p>

        <div
          className={`faq_arrow_wrapper ${isOpen ? "arrow_up" : "arrow_down"}`}
        >
          <img src="/images/arrow-down.png" alt="faq arrow" />
        </div>
      </div>

      {isOpen && (
        <p className="faq_answer lg:mx-5 mt-5 lg:max-w-6xl">
          {t(`data.allFaq.${index}.faq_answer`)}
        </p>
      )}
    </div>
  );
}
