import { CustomToast } from '../../containers/Notify/notify';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');


function App() {
  return (
      <div>
          <ToastContainer />
      </div>
  );
}


const div = document.createElement('div')
div.id = 'app-container'
document.body.appendChild(div)
const container = document.getElementById('app-container');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);


// toast('🦄 Wow so easy!', {
            // position: "top-right",
            // autoClose: 15555,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
            // theme: "light",
          // });



document.onmouseup = function () {
    var selectedText = window.getSelection().toString();
    if (selectedText) {
        console.log("selected text: " + selectedText);
        chrome.runtime.sendMessage({
          info: selectedText
        }, (res) => {
          if (res) {
            console.log(res);
            toast(<CustomToast
              Source={selectedText}
              ToastBody={res}
            />, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
    }
}


// export default function App() {
  // const [showToastBody,setShowToastBody]=useState(false)
  // const notify = () => toast(<CustomToastComp showToastBody={showToastBody} setShowToastBody={setShowToastBody}/>);

  // return (
    // <div className="App">
      // <StyledToastContainer
        // closeButton={false}
        // // hideProgressBar={true}
        // // autoClose={false}
        // progressStyle={{backgroundColor:"white"}}
      // />
      // <button onClick={notify}>Notify !</button>

      // <h1>Hello CodeSandbox</h1>
      // <h2>Start editing to see some magic happen!</h2>
    // </div>
  // );
// }

