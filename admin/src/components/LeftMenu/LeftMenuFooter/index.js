/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Powered by</span>
        <a
          href="https://github.com/felipe-jm"
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Felipe Jung
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
