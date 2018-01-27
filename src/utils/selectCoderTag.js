import React from 'react';
import HtmlCoder from '../components/pages/coder/mode/HtmlCoder';
import CssCoder from '../components/pages/coder/mode/CssCoder';

export default ({ coder }, submit) => {
  if (coder.mode === "html" && coder.code !== undefined) {
	 	return( <HtmlCoder
	            submit={submit}
	            coder={coder}
	            code={coder.code}
	            mode={coder.mode}
	            cursorStart={coder.cursorStart}
          />)
  } else if (coder.mode === "css" && coder.code !== undefined) {
	 	return( <CssCoder
	            submit={submit}
	            coder={coder}
	            code={coder.code}
	            mode={coder.mode}
	            cursorStart={coder.cursorStart}
	          />)
  } else {
    
  }
}