import { HeaderComponent, HeaderContent } from "./style";

export const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <HeaderContent>
        <img src="/assets/img/logo.png" alt="logo tmdb" />
      </HeaderContent>
    </HeaderComponent>
  );
};
