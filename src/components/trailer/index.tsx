import { Title, TrailerComponent } from "./style";

interface Props {
  trailer: string;
}

export const Trailer: React.FC<Props> = ({ trailer }) => {
  return (
    <TrailerComponent>
      <Title>Trailer</Title>
      <iframe
        width="760"
        height="415"
        src={`https://www.youtube.com/embed/${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </TrailerComponent>
  );
};
