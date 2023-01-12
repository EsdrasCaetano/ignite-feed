import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post"

import styles from "./App.module.css";
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
        <Sidebar />

        <main>

          <Post
            author="Esdras"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          <Post
            author="Deda"
            content="Lorem, ipsum dolor so que menor"
          />
        </main>
      </div>
    </div>
  )
}


