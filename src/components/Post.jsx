import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/54487736?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Esdras Caetano</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa!</p>
                <p>Acabei de subir um projeto no meu portgolio</p>
                <p><a href="">jane.design/doutorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}