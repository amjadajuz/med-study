import React from 'react'
import { BlockRenderer } from '../../components/BlockRenderer'
import { jsonData } from '../../const/jsonData'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      {jsonData.blocks.map((block, index) => {
        return <BlockRenderer key={index} block={block} />
      })}
    </div>
  )
}

export default Home