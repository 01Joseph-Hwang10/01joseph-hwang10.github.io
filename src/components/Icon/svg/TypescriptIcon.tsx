import React from "react";
import MultitoneSVGIcon from "./base/MultitoneSVGIcon";
import { ViewBox } from "./base/utils";

class TypescriptIcon extends MultitoneSVGIcon {
  protected get viewBox(): ViewBox {
    return ViewBox.fromSquare(256);
  }

  protected get colors(): string[] {
    return (
      this.props.colors || [
        "var(--ifm-color-primary-contrast-foreground)",
        "var(--ifm-color-primary-contrast-background)",
      ]
    );
  }

  render(): React.JSX.Element {
    return (
      <svg
        className={this.className}
        height={this.width}
        width={this.height}
        viewBox={this.viewBox.toString()}
        xmlns="http://www.w3.org/2000/svg"
        css={this.css}
      >
        <rect className={this.useColorAt(0)} height="256" rx="20" width="256" />
        <path
          className={this.useColorAt(1)}
          clipRule="evenodd"
          d="m150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179s12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899s11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163s-3.657-7.121-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661s-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597 2.591.719 5.11 1.625 7.558 2.719 2.447 1.093 4.708 2.359 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582s-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759 3.801 1.554 7.343 3.078 10.625 4.575 3.283 1.496 6.119 3.049 8.509 4.66s4.276 3.366 5.658 5.265 2.073 4.057 2.073 6.474c0 1.783-.432 3.438-1.296 4.963-.863 1.524-2.174 2.848-3.93 3.97s-3.945 1.999-6.565 2.632-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451zm-46.036-68.733h35.518v-22.742h-99v22.742h35.3447v101.258h28.1373z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}

export default TypescriptIcon;
