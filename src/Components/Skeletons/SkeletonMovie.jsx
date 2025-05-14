import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMovie = (props) => (
  <ContentLoader 
    speed={2}
    width={580}
    height={946}
    viewBox="0 0 580 946"
    backgroundColor="#1f1f1f"
    foregroundColor="#6e6e6e"
    {...props}
  >
    <rect x="0" y="143" rx="10" ry="10" width="580" height="80" /> 
    <rect x="1" y="276" rx="10" ry="10" width="58" height="33" /> 
    <rect x="64" y="277" rx="10" ry="10" width="58" height="33" /> 
    <rect x="127" y="277" rx="10" ry="10" width="58" height="33" /> 
    <rect x="190" y="277" rx="10" ry="10" width="58" height="33" /> 
    <rect x="254" y="277" rx="10" ry="10" width="58" height="33" /> 
    <circle cx="338" cy="294" r="17" /> 
    <circle cx="378" cy="294" r="17" /> 
    <circle cx="418" cy="294" r="17" /> 
    <circle cx="458" cy="294" r="17" /> 
    <circle cx="498" cy="294" r="17" /> 
    <rect x="1" y="350" rx="10" ry="10" width="230" height="33" /> 
    <rect x="1" y="392" rx="5" ry="5" width="580" height="8" /> 
    <rect x="1" y="405" rx="5" ry="5" width="580" height="8" /> 
    <rect x="1" y="418" rx="5" ry="5" width="580" height="8" /> 
    <rect x="1" y="431" rx="5" ry="5" width="580" height="8" /> 
    <rect x="0" y="464" rx="30" ry="30" width="270" height="60" /> 
    <rect x="278" y="464" rx="30" ry="30" width="140" height="60" /> 
    <rect x="427" y="464" rx="30" ry="30" width="60" height="60" /> 
    <rect x="0" y="676" rx="10" ry="10" width="180" height="25" /> 
    <rect x="0" y="714" rx="5" ry="5" width="280" height="8" /> 
    <rect x="0" y="733" rx="5" ry="5" width="280" height="8" /> 
    <rect x="0" y="752" rx="5" ry="5" width="280" height="8" /> 
    <rect x="0" y="771" rx="5" ry="5" width="280" height="8" />
  </ContentLoader>
)

export default SkeletonMovie