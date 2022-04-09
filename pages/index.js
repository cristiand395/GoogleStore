import Header from '@components/Header';
import CardList from '@containers/CardList';
import styles from '@styles/Home.module.css'
import SearchBar from '@components/SearchBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <CardList/>
    </div>
  )
}
