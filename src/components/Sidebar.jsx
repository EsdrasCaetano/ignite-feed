import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
           <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
           />

           <div className={styles.profile}>
                <strong>Deda</strong>
                <p>Web Developer</p>
           </div>

           <footer>
                <a href="">
                    Editar Perfil
                </a>
           </footer>
        </aside>
    )
}