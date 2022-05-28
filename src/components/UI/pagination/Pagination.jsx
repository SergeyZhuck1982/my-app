import React from 'react';
import cl from './Pagination.module.css'
import MySelect from "./../select/MySelect";
import { usePagination } from "./../../../hooks/usePagination";

const Pagination = (props) => {

    const [pagesArray] = usePagination(props.totalPages)

    return (
        <div className={cl.page__wrapper}>
            {
                pagesArray.map(p => 
                    <span 
                    onClick={()=>props.onChangePage(p)}
                        className={p===props.currentPage?[cl.page,  cl.page__current].join(" "):cl.page} 
                        key={p-1}
                    >{p}</span>
                )
            }
            <div className={cl.perPage}>
                <span>Количество на странице:</span>
                <MySelect
                    options={[
                        {value:5, name:"5"},
                        {value:10, name:"10"},
                        {value:20, name:"20"},
                        {value:50, name:"50"},
                        {value:parseInt(props.totalPages*props.limit), name:"Все"}
                    ]} 
                    defaultValue="" 
                    value={props.limit} 
                    onChange={props.onChangeLimit}
                ></MySelect>
            </div>
        </div>
    );
};

export default Pagination;