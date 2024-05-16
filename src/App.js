import './App.css';
import Sidebar from './components/sidebar/Sidebar.js';
import Feed from './components/feed/Feed.js';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Feed />
        </div>
    );
}

export default App;
