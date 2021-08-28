import "./card.styles.scss";

interface CardProps {
  image: string;
  alt: string;
  url: string;
}

export function Card({ image, alt, url }: CardProps) {
  return (
    <a href={url} className="card">
      <img src={image} alt={alt} />
    </a>
  );
}
