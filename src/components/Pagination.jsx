import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

class CustomPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
    }

    handleClick = (page) => {
        this.setState({ currentPage: page });
        // Perform any necessary operations here, such as fetching data for the corresponding page
        // this.fetchData(page);
    };

    render() {
        const { currentPage } = this.state;

        const pageItems = [];

        // Add first page icon
        pageItems.push(
            <Pagination.First
                key="first"
                onClick={() => this.handleClick(1)}
                disabled={currentPage === 1}
            />
        );

        // Add previous page icon
        pageItems.push(
            <Pagination.Prev
                key="prev"
                onClick={() => this.handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            />
        );

        // Add current page number
        pageItems.push(
            <Pagination.Item
                key={currentPage}
                active
                onClick={() => this.handleClick(currentPage)}
            >
                {currentPage}
            </Pagination.Item>
        );

        // Add next page icon
        pageItems.push(
            <Pagination.Next
                key="next"
                onClick={() => this.handleClick(currentPage + 1)}
                disabled={currentPage === this.props.totalPages}
            />
        );

        // Add last page icon
        pageItems.push(
            <Pagination.Last
                key="last"
                onClick={() => this.handleClick(this.props.totalPages)}
                disabled={currentPage === this.props.totalPages}
            />
        );

        return (
            <div className={"chats-list-pagination"}>
                <Pagination>{pageItems}</Pagination>
            </div>

        );
    }
}

export default CustomPagination;
