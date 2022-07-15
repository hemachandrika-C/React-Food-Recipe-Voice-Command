import React, {  useEffect } from 'react';

import alanBtn from '@alan-ai/alan-sdk-web';



function App(){
 

  useEffect(() => {
    alanBtn({
      key: 'b6c7d264eae4f578992dc7a28f1100ff2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles}) => {
        if (command === 'newHeadlines') {
          console.log(articles);
         
        } 
      },
    });
  }, []);

  return (
    <div>
      hgello
     
    </div>
  );
};

export default App;