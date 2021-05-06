import React, { useEffect, useState } from 'react';
import Table from './Table';
import './styles.css';

const Pagination = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [maxPageLimit, setMaxPageLimit] = useState(10);
    const [minPageLimit, setMinPageLimit] = useState(1);

    const handlePageChange = (event) => {
        const page = Number(event.target.id);
        if (currentPage < page) {
            setMaxPageLimit(maxPageLimit + 1);
            setMinPageLimit(minPageLimit + 1);
        }
        else if (currentPage > page && maxPageLimit > 10) {
            setMaxPageLimit(maxPageLimit - 1);
            setMinPageLimit(minPageLimit - 1);
        }
        if (page == maxPageLimit && maxPageLimit > 10) {
            setMaxPageLimit(maxPageLimit + 5)
            setMinPageLimit(minPageLimit + 5);
        }
        else if (page == minPageLimit && maxPageLimit > 10) {
            setMaxPageLimit(maxPageLimit - 5)
            setMinPageLimit(minPageLimit - 5);
        }
        setCurrentPage(page);
    };

    const handleTableLimit = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
        setMaxPageLimit(10);
        setMinPageLimit(1);
    };

    const pageNumbers = [];
    for (let index = 1; index <= Math.floor(data.length / itemsPerPage); index++) {
        pageNumbers.push(index)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPageItems = data.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        fetch('http://localhost:9000/users')
            .then(response => response.json()
            )
            .then((json) => {
                setData(json);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const renderPageNumbers = pageNumbers.map(page => {
        if (page >= minPageLimit && page <= maxPageLimit) {
            return (<li key={page} id={page} className={page == currentPage ? "active" : null} onClick={handlePageChange}>{page}</li>
            )
        }
    });

    const handleFirstLast = (event) => {
        const id = event.target.id;
        if (id === 'first') {
            setCurrentPage(1);
            setMaxPageLimit(10);
            setMinPageLimit(1);
        }
        else if (id === 'last') {
            setCurrentPage(pageNumbers.length);
            setMaxPageLimit(pageNumbers.length);
            setMinPageLimit(pageNumbers.length - 10);
        }
    }


    return (
        <div>
            <Table data={currentPageItems} />
            <div>
                <ul className="pagenumbers" >
                    <li>
                        <button id="first" onClick={handleFirstLast}>First</button>
                    </li>
                    {renderPageNumbers}
                    <li>
                        <button id="last" onClick={handleFirstLast}>Last</button>
                    </li>
                </ul>
                <select onChange={handleTableLimit}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value={data.length}>All</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;