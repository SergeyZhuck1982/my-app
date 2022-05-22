import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const classList = [cl.myModal]
    if ( visible )
    {
        classList.push(cl.active)
    }

    return (
        <div className={classList.join(" ")} onClick={e=>{setVisible(false)}}>
            <div className={cl.myModalContent} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;