// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import PostsComponent from './components/posts-component/posts-component';

export function App() {
  return (
    <div className="container">
      <PostsComponent />
    </div>
  );
}

export default App;
