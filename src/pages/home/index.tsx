import { BlockRenderer } from '../../components/BlockRenderer'
import { jsonData } from '../../const/jsonData'

const Home = () => {
  return (
    <div>
      {jsonData.blocks.map((block, index) => {
        return <BlockRenderer key={index} block={block} />
      })}
    </div>
  )
}

export default Home