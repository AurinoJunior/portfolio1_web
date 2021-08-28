import "./CareerDetails.styles.scss";

interface CareerDetailsProps {
  description: string;
  title: string;
  dateStart: number;
  dateEnd: number;
}

export function CareerDetails({
  description,
  title,
  dateStart,
  dateEnd,
}: CareerDetailsProps) {
  const currentWork = dateEnd ? dateEnd : "até o momento";

  return (
    <div className="career_details">
      <div className="career_details__title">
        <strong>{title}</strong>
        <span>
          {dateStart} - {currentWork}
        </span>
      </div>
      <p className="career_details__paragraph">{description}</p>
    </div>
  );
}
