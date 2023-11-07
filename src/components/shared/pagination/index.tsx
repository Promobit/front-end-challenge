import { PaginationButton, PaginationComponent } from "./style";
import { Link, useLocation } from "react-router-dom";

interface Props {
  currentPage: number;
  totalPage: number;
}
export const Pagination: React.FC<Props> = ({ currentPage, totalPage }) => {
  const location = useLocation();
  const maxVisiblePages = 5;

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPage, startPage + maxVisiblePages - 1);

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", String(i));
    pages.push(
      <PaginationButton>
        <Link
          key={i}
          to={{
            pathname: location.pathname,
            search: searchParams.toString(),
          }}
        >
          {i}
        </Link>
      </PaginationButton>
    );
  }

  return <PaginationComponent>{pages}</PaginationComponent>;
};
