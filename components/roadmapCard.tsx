import { useTranslation } from 'next-i18next'

export default function RoadmapCard({ item, color, index }) {
  const { t } = useTranslation('common');
  return (
    <div className="roadmap_card" key={item._id}>
      <h3 className="title pr-4">{t(`data.allRoadmap.${index}.roadmap_title`)}</h3>
      <ul>
        {item.roadmap_content.map((item, index1) => {
          return (
            <li key={item} className="text pr-4 mb-6">
              {t(`data.allRoadmap.${index}.roadmap_content.${index1}`)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
