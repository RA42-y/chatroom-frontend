import React from 'react';
import { Pagination } from 'react-bootstrap';

const ChatsListPagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = (page) => {
        if (onPageChange) {
            onPageChange(page);
        }
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        paginationItems.push(
            <Pagination.First
                key="first"
                disabled={currentPage === 0}
                onClick={() => handlePageChange(0)}
            />
        );

        paginationItems.push(
            <Pagination.Prev
                key="previous"
                disabled={currentPage === 0}
                onClick={() => handlePageChange(currentPage - 1)}
            />
        );

        for (let i = 0; i < totalPages; i++) {
            paginationItems.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i + 1}
                </Pagination.Item>
            );
        }

        paginationItems.push(
            <Pagination.Next
                key="next"
                disabled={currentPage === totalPages - 1}
                onClick={() => handlePageChange(currentPage + 1)}
            />
        );

        paginationItems.push(
            <Pagination.Last
                key="last"
                disabled={currentPage === totalPages - 1}
                onClick={() => handlePageChange(totalPages - 1)}
            />
        );

        return paginationItems;
    };

    return (
        <div className={"chats-list-pagination"}>
            <Pagination>
                {renderPaginationItems()}
            </Pagination>
        </div>
    );
};

export default ChatsListPagination;
