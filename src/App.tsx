import { Footer, Header, Main } from './layouts';
import { ColorModeProvider } from './context/colorModeContext'


function Root() { 
  return (
    <ColorModeProvider>
      <div >

       <Header />
        <Main />
        <Footer/>
      </div>
    </ColorModeProvider>
  );
}

export default Root;
