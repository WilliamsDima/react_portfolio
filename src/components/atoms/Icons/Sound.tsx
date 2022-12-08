import * as React from "react"
import { SVGProps } from "react"

const Sound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M4 11v10h5l10 6V5L9 11H4zm13-2.468v14.935L9.554 19H6v-6h3.554L17 8.532zm4.657 13.125-1.414-1.414a6.008 6.008 0 0 0 0-8.486l1.414-1.414c3.118 3.119 3.118 8.195 0 11.314zm2.828 2.828-1.414-1.414c3.899-3.899 3.899-10.243 0-14.143l1.414-1.414c4.679 4.679 4.679 12.293 0 16.971z"
      style={{
        fill: "#08FDD8",
      }}
    />
  </svg>
)

export default Sound
