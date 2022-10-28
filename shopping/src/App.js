import './App.css';
import Footer from './component/footer';
import Heder from './component/heder/heder';
import Main from './component/Main/main';
import { ContextProvider } from './context'

function App() {
 

  return (
    <div>
      <Heder />
      <ContextProvider>
        <Main />
      </ContextProvider>
        
      <Footer />
    
    </div> 
  );
}

export default App;
