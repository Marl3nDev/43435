import PrevSvg from '@icons/pagination-left.svg?react'
import NextSvg from '@icons/pagination-right.svg?react'
import ReactPaginate from 'react-paginate';

import { useTickets } from '@/shared/hooks/useTickets/useTickets.jsx';



import './TicketsPagination.css'

export const TicketsPagination = () => {
  const { searchTicketsWithParams, params, data } = useTickets()
  const limit = Number(params.limit || 5)
  const handleClick = (e) => {
    searchTicketsWithParams({
      ...params,
      offset: e.selected,
    })
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  if (data?.total_count <= limit) return

  return (
    <div className="tickets-pagination">
      <ReactPaginate.default
        forcePage={Number(params.offset) || 0}
        pageCount={Math.ceil(data?.total_count / limit)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        nextLabel={<NextSvg/>}
        previousLabel={<PrevSvg/>}
        onPageChange={handleClick}
      />
    </div>
  );
};
