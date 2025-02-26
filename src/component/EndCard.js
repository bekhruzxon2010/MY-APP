import React from 'react'
import styles from '../styles/EndCard.module.css'

function EndCard() {
    return (
        <div>
            <div className={styles['all11']}>
                <h2>К сожалению, страница не найдена</h2>
                <p className={styles['text_width11']}>Но мы обязательно всё починим, а пока попробуйте:</p>
                <button className={styles['btn_style11']}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
                <h1 className={styles['number']}>404</h1>
            </div>
        </div>
    )
}

export default EndCard