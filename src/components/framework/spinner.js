/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

import React from "react";
import Radium from "radium";

@Radium
class Spinner extends React.Component {
  getSpinner () {
    return {
      __html: `
        <svg
          style="display: inline"
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid">
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="none"/>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(0 50 50) translate(0 -30)">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(30 50 50) translate(0 -30)">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin="0.08333333333333333s"
              repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(60 50 50) translate(0 -30)">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin="0.16666666666666666s"
              repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(90 50 50) translate(0 -30)">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin="0.25s"
              repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(120 50 50) translate(0 -30)">
            <animate
              attributeName="opacity"
              from="1"
              to="0"
              dur="1s"
              begin="0.3333333333333333s"
              repeatCount="indefinite"/>
            </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(150 50 50) translate(0 -30)">
              <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="1s"
                begin="0.4166666666666667s"
                repeatCount="indefinite"/>
            </rect>
            <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(180 50 50) translate(0 -30)">
              <animate
                attributeName="opacity"
                from="1"
                to="0"
                dur="1s"
                begin="0.5s"
                repeatCount="indefinite"/>
            </rect>
            <rect
              x="46.5"
              y="40"
              width="7"
              height="20"
              rx="5"
              ry="5"
              fill="rgba(140,140,140,1)"
              transform="rotate(210 50 50) translate(0 -30)">
            <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.5833333333333334s"
            repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(240 50 50) translate(0 -30)">
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.6666666666666666s"
            repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(270 50 50) translate(0 -30)">
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.75s"
            repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(300 50 50) translate(0 -30)">
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1s"
            begin="0.8333333333333334s"
            repeatCount="indefinite"/>
          </rect>
          <rect
            x="46.5"
            y="40"
            width="7"
            height="20"
            rx="5"
            ry="5"
            fill="rgba(140,140,140,1)"
            transform="rotate(330 50 50) translate(0 -30)">
          <animate
            attributeName="opacity"
            from="1"
            to="0" dur="1s" begin="0.9166666666666666s" repeatCount="indefinite"/>
          </rect>
        </svg>`
    };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.getSpinner()} />
    );
  }
}

export default Spinner;
