import React, { ReactNode } from "react";
import MonotoneSVGIcon from "./base/MonotoneSVGIcon";
import { ViewBox } from "./base/utils";

/**
 * @see https://verdaccio.org/img/logo/uk/verdaccio-tiny-uk-no-bg.svg
 */
class VerdaccioIcon extends MonotoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(100);
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
        fill="none"
      >
        <rect width="100" height="100" rx="37" fill="none" />
        <g filter="url(#filter0_d_0_18)">
          <mask id="path-2-inside-1_0_18" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M69 46.6L53.8 77H45L21.4 29.8L36.6 29.8L49.4 55.4L53.8 46.6H69Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69 46.6L53.8 77H45L21.4 29.8L36.6 29.8L49.4 55.4L53.8 46.6H69Z"
            fill={this.color}
          />
          <path
            d="M69 46.6L71.1466 47.6733L72.8833 44.2H69V46.6ZM53.8 77V79.4H55.2833L55.9466 78.0733L53.8 77ZM45 77L42.8534 78.0733L43.5167 79.4H45V77ZM21.4 29.8V27.4H17.5167L19.2534 30.8733L21.4 29.8ZM36.6 29.8L38.7466 28.7267L38.0833 27.4H36.6V29.8ZM49.4 55.4L47.2534 56.4733L49.4 60.7666L51.5466 56.4733L49.4 55.4ZM53.8 46.6V44.2H52.3167L51.6534 45.5267L53.8 46.6ZM66.8534 45.5267L51.6534 75.9267L55.9466 78.0733L71.1466 47.6733L66.8534 45.5267ZM53.8 74.6H45V79.4H53.8V74.6ZM47.1466 75.9267L23.5466 28.7267L19.2534 30.8733L42.8534 78.0733L47.1466 75.9267ZM21.4 32.2L36.6 32.2V27.4L21.4 27.4V32.2ZM34.4534 30.8733L47.2534 56.4733L51.5466 54.3267L38.7466 28.7267L34.4534 30.8733ZM51.5466 56.4733L55.9466 47.6733L51.6534 45.5267L47.2534 54.3267L51.5466 56.4733ZM53.8 49H69V44.2H53.8V49Z"
            fill={this.color}
            mask="url(#path-2-inside-1_0_18)"
          />
        </g>
        <g filter="url(#filter1_d_0_18)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.8 41H56.6L62.2 29.8L77.4 29.8L71.8 41V41Z"
            fill={this.color}
          />
          <path
            d="M62.9416 31H75.4584L71.0584 39.8H58.5416L62.9416 31Z"
            stroke={this.color}
            stroke-width="2.4"
          />
        </g>
        <path
          d="M55.6351 70.688L53.0607 75.8H45.7416L23.3416 31H35.8573L55.6351 70.688Z"
          fill={this.color}
          stroke={this.color}
          stroke-width="2.4"
        />
        <path
          d="M58.6 31H73.821"
          stroke={this.color}
          stroke-width="2.4"
          stroke-linecap="square"
        />
        <path
          d="M54.6 35H69.821"
          stroke={this.color}
          stroke-width="2.4"
          stroke-linecap="square"
        />
        <path
          d="M50.6 39.8H65.821"
          stroke={this.color}
          stroke-width="2.4"
          stroke-linecap="square"
        />
        <defs>
          <filter
            id="filter0_d_0_18"
            x="16.4"
            y="28.8"
            width="57.6"
            height="57.2"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_18"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_18"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_0_18"
            x="51.6"
            y="28.8"
            width="30.8"
            height="21.2"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0906646 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_18"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_18"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
}

export default VerdaccioIcon;
