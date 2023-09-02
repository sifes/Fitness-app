import React from 'react'
import ReactPaginate from 'react-paginate'
import { useExercisesSelector } from '../hooks/store'
import { useActions } from '../hooks/useActions'

interface IPagination { }

const Pagination: React.FC<IPagination> = () => {
    const { pages } = useExercisesSelector()
    const { setCurrentPagesCount } = useActions()

    function handlePageChange(selectedPage: { selected: number }) {
        setCurrentPagesCount(selectedPage.selected)
    }
    return (
        <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pages.totalCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName='page hvr-underline-from-left'
            nextClassName='next hvr-underline-from-left'
            previousClassName='previous hvr-underline-from-left'
        />
    )
}

export { Pagination }