import styled from "styled-components";
import bgLightImage from '../assets/images/bg-desktop-light.jpg'

const App = () => {
  return (
    <div>
      <Background className="bg-fixed">
        <div className="container m-auto p-8">
          <>holas</>
        </div>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background-image: url(${bgLightImage});
  background-repeat: no-repeat;
`

export default App;
