import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonFilms = (props) => (
  <ContentLoader 
    speed={2}
    width={130}
    height={200}
    viewBox="0 0 130 200"
    backgroundColor="#1f1f1f"
    foregroundColor="#6e6e6e"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="130" height="200" />
  </ContentLoader>
)

export default SkeletonFilms

