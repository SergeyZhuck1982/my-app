import {useMemo} from "react";

export const usePagination = (totalPages) => {

    const pagesArray = useMemo(()=>{
        let pArray = []
        for(let i=0;i<totalPages; i++)
        {
            pArray.push(i+1)
        }
        return pArray;
    }, [totalPages])

    return [pagesArray];
}