import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div className={s.message}>messaga_1</div>
                <div className={s.message}>messaga_2</div>
                <div className={s.message}>messaga_3</div>
            </div>
            <div className={s.dialogs_items}>
                <div className={`${s.dialog} ${s.active}`}>Acura Higaone</div>
                <div className={s.dialog}>Yuki Kadono</div>
                <div className={s.dialog}>Kate Brenson</div>
                <div className={s.dialog}>Kris Prat</div>
            </div>
        </div>
    )
}