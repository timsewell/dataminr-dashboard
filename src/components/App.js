import '../scss/App.scss';
import Container from './Container';
import { DMProvider } from '../DMContext';


const App = () => {
  return (
    <div className='dataminr-dashboard container'>
        <DMProvider>
            <Container />
        </DMProvider>
    </div>
  );
}

export default App;
