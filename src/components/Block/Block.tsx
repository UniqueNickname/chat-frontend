import React from 'react'
import classNames from "classnames"

import './Block.scss'

type BlockPropsTypes = {
  className?  : string,
  children    : React.ReactNode
}

const Block : React.FC<BlockPropsTypes> = ({ className, children }) => <div className={classNames("block", className)}>{children}</div>


export default Block
