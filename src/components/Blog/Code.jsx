import React, { useState } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import sass from "react-syntax-highlighter/dist/cjs/languages/prism/sass";
import {
  parentDiv,
  copyButton,
  copyButtonDark,
} from "../../stylesheets/components/Blog/Code.module.sass";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("sass", sass);

const Code = ({ children, language, isDark }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={parentDiv}>
      <CopyToClipboard
        onCopy={() => setIsCopied(true)}
        className={`${copyButton} ${isDark && copyButtonDark}`}
        text={children}
      >
        <button type="button" aria-label="Copy to Clipboard Button">
          {isCopied ? <FaRegClipboard /> : <FaRegCopy />}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter language={language} style={isDark ? atomDark : prism}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

Code.propTypes = {
  children: PropTypes.PropTypes.arrayOf(PropTypes.PropTypes.string).isRequired,
  language: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
};

Code.defaultProps = {
  language: null,
};

export default Code;
