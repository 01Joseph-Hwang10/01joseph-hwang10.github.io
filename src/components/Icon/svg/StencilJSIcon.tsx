import React, { ReactNode } from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

class StencilJSIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromRect(256, 197);
  }

  render(): ReactNode {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={this.className}
        width={this.width}
        height={this.height}
        viewBox={this.viewBox.toString()}
        css={this.css}
      >
        <g>
          <path
            d="M193.065354,138.495015 L139.731692,196.923077 L41.5985231,196.923077 L94.4010831,138.495015 L193.065354,138.495015 Z M256,69.2476062 L202.694892,127.675077 L0,127.675077 L53.3053046,69.2476062 L256,69.2476062 Z M214.399015,2.13162821e-14 L161.311508,58.4277662 L62.9326769,58.4277662 L116.098954,2.13162821e-14 L214.399015,2.13162821e-14 Z"
            fill={this.color}
          ></path>
        </g>
      </svg>
    );
  }
}

export default StencilJSIcon;
