import React from 'react';
import { CopyBlock, a11yLight } from "react-code-blocks";

const CodeBlock = ({codeText}) => {
  
  return (
    <div className='codeblock'>
      <CopyBlock
        language={'javascript'}
        text={codeText}
        showLineNumbers={false}
        theme={a11yLight}
        wrapLines={true}
        
      />
    </div>
  )
}

export default CodeBlock;