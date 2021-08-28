import "./careerDetails.styles.scss";

interface CareerDetailsProps {
  description: string;
  title: string;
  dateStart: number;
  dateEnd?: number;
}

export function CareerDetails({
  description,
  title,
  dateStart,
  dateEnd,
}: CareerDetailsProps) {
  return (
    <div className="career_details">
      <div className="career_details__title">
        <strong>{title}</strong>
        <span>
          {dateStart} - {dateEnd ? dateEnd : "atual"}
        </span>
      </div>
      <p className="career_details__paragraph">{description}</p>
    </div>
  );
}
